/**
 * Component Loader
 * Loads shared HTML components (header, footer) into pages.
 * Gracefully degrades if JavaScript is disabled (fallback nav is shown).
 */

(function() {
    'use strict';
    
    /**
     * Calculate relative path from current page to root
     * @returns {string} Relative path prefix (e.g., "../" or "")
     */
    function getPathToRoot() {
        var pathname = window.location.pathname;
        var basePath = window.BASE_PATH || '';
        
        // Remove base path if present
        if (basePath && pathname.indexOf(basePath) === 0) {
            pathname = pathname.substring(basePath.length);
        }
        
        // For file:// protocol, use current path
        if (window.location.protocol === 'file:') {
            pathname = window.location.pathname;
        }
        
        // Count directory depth
        var segments = pathname.split('/').filter(function(s) {
            return s && !s.endsWith('.html');
        });
        
        var depth = segments.length;
        var prefix = '';
        
        for (var i = 0; i < depth; i++) {
            prefix += '../';
        }
        
        return prefix || './';
    }
    
    /**
     * Get current page name for navigation highlighting
     * @returns {string} Current page identifier
     */
    function getCurrentPage() {
        var pathname = window.location.pathname;
        var basePath = window.BASE_PATH || '';
        
        // Remove base path
        if (basePath && pathname.indexOf(basePath) === 0) {
            pathname = pathname.substring(basePath.length);
        }
        
        // Extract page name
        var segments = pathname.split('/').filter(Boolean);
        var lastSegment = segments[segments.length - 1] || 'index.html';
        
        // Handle directory index
        if (!lastSegment.endsWith('.html')) {
            lastSegment = 'index.html';
        }
        
        return lastSegment.replace('.html', '');
    }
    
    /**
     * Load an HTML component into a target element
     * @param {string} componentPath - Path to component HTML file
     * @param {string} targetSelector - CSS selector for target element
     * @param {Function} callback - Optional callback after load
     */
    function loadComponent(componentPath, targetSelector, callback) {
        var target = document.querySelector(targetSelector);
        if (!target) return;
        
        var pathToRoot = getPathToRoot();
        var fullPath = pathToRoot + componentPath;
        
        // Use fetch with fallback for older browsers
        if (window.fetch) {
            fetch(fullPath)
                .then(function(response) {
                    if (!response.ok) throw new Error('Component not found');
                    return response.text();
                })
                .then(function(html) {
                    processComponent(html, target, pathToRoot, callback);
                })
                .catch(function(error) {
                    console.warn('[Components] Failed to load:', componentPath, error);
                    // Keep fallback content visible
                });
        } else {
            // XMLHttpRequest fallback
            var xhr = new XMLHttpRequest();
            xhr.open('GET', fullPath, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        processComponent(xhr.responseText, target, pathToRoot, callback);
                    } else {
                        console.warn('[Components] Failed to load:', componentPath);
                    }
                }
            };
            xhr.send();
        }
    }
    
    /**
     * Process and insert component HTML
     * @param {string} html - Component HTML content
     * @param {Element} target - Target DOM element
     * @param {string} pathToRoot - Relative path to root
     * @param {Function} callback - Optional callback
     */
    function processComponent(html, target, pathToRoot, callback) {
        // Replace path placeholders
        html = html.replace(/\{\{PATH\}\}/g, pathToRoot);
        html = html.replace(/\{\{BASE\}\}/g, window.BASE_PATH || '');
        
        // Insert component
        target.innerHTML = html;
        
        // Fix relative paths in links and images
        fixRelativePaths(target, pathToRoot);
        
        // Highlight current page in navigation
        highlightCurrentPage(target);
        
        // Execute callback
        if (typeof callback === 'function') {
            callback(target);
        }
    }
    
    /**
     * Fix relative paths in component links and images
     * @param {Element} container - Container element
     * @param {string} pathToRoot - Relative path to root
     */
    function fixRelativePaths(container, pathToRoot) {
        // Fix links
        var links = container.querySelectorAll('a[href]');
        links.forEach(function(link) {
            var href = link.getAttribute('href');
            
            // Skip external links, anchors, and already-processed links
            if (!href || 
                href.indexOf('://') !== -1 || 
                href.indexOf('//') === 0 ||
                href.charAt(0) === '#' ||
                href.indexOf('mailto:') === 0 ||
                href.indexOf('tel:') === 0) {
                return;
            }
            
            // For file:// protocol, ensure relative paths
            if (window.location.protocol === 'file:') {
                if (href.charAt(0) === '/') {
                    link.setAttribute('href', pathToRoot + href.substring(1));
                }
            }
        });
        
        // Fix images
        var images = container.querySelectorAll('img[src]');
        images.forEach(function(img) {
            var src = img.getAttribute('src');
            
            if (!src || src.indexOf('://') !== -1 || src.indexOf('//') === 0 || src.indexOf('data:') === 0) {
                return;
            }
            
            if (window.location.protocol === 'file:' && src.charAt(0) === '/') {
                img.setAttribute('src', pathToRoot + src.substring(1));
            }
        });
    }
    
    /**
     * Highlight current page in navigation
     * @param {Element} container - Container with navigation
     */
    function highlightCurrentPage(container) {
        var currentPage = getCurrentPage();
        var navLinks = container.querySelectorAll('.nav-links a, .nav-link');
        
        navLinks.forEach(function(link) {
            var href = link.getAttribute('href') || '';
            var linkPage = href.split('/').pop().replace('.html', '');
            
            // Handle index page
            if (linkPage === '' || linkPage === 'index') {
                linkPage = 'index';
            }
            
            // Check if this link matches current page
            if (linkPage === currentPage || 
                (currentPage === 'index' && (href === '/' || href.endsWith('index.html') || href === './' || href === ''))) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            } else {
                link.classList.remove('active');
                link.removeAttribute('aria-current');
            }
        });
    }
    
    /**
     * Initialize mobile menu toggle
     * @param {Element} header - Header element
     */
    function initMobileMenu(header) {
        var menuToggle = header.querySelector('.menu-toggle');
        var navLinks = header.querySelector('.nav-links');
        
        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', function() {
                var isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
                menuToggle.setAttribute('aria-expanded', !isExpanded);
                navLinks.classList.toggle('active');
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!header.contains(e.target)) {
                    navLinks.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Close menu when pressing Escape
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    navLinks.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        }
    }
    
    // Load components when DOM is ready
    function init() {
        // Load header
        loadComponent('components/header.html', '#site-header', function(header) {
            initMobileMenu(header);
            // Dispatch event for other scripts
            document.dispatchEvent(new CustomEvent('headerLoaded', { detail: header }));
        });
        
        // Load footer
        loadComponent('components/footer.html', '#site-footer', function(footer) {
            document.dispatchEvent(new CustomEvent('footerLoaded', { detail: footer }));
        });
    }
    
    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Export for external use
    window.ComponentLoader = {
        load: loadComponent,
        getPathToRoot: getPathToRoot,
        getCurrentPage: getCurrentPage
    };
})();
