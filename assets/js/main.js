/**
 * Main JavaScript
 * Handles theme switching, interactions, and dynamic content loading.
 */

(function() {
    'use strict';
    
    // ============================================
    // Theme Management
    // ============================================
    
    var ThemeManager = {
        STORAGE_KEY: 'theme-preference',
        
        /**
         * Initialize theme based on saved preference or system default
         */
        init: function() {
            var savedTheme = this.getSavedTheme();
            
            if (savedTheme) {
                this.setTheme(savedTheme, false);
            }
            // If no saved theme, CSS handles system preference via media query
            
            // Listen for system theme changes
            if (window.matchMedia) {
                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
                    // Only respond to system changes if user hasn't set a preference
                    if (!ThemeManager.getSavedTheme()) {
                        // Theme is handled by CSS media query, just update toggle icon
                        ThemeManager.updateToggleIcon();
                    }
                });
            }
            
            // Set up toggle button (may be loaded dynamically)
            this.setupToggle();
            document.addEventListener('headerLoaded', function() {
                ThemeManager.setupToggle();
            });
        },
        
        /**
         * Set up theme toggle button
         */
        setupToggle: function() {
            var toggles = document.querySelectorAll('.theme-toggle');
            
            toggles.forEach(function(toggle) {
                if (toggle.dataset.initialized) return;
                toggle.dataset.initialized = 'true';
                
                toggle.addEventListener('click', function() {
                    ThemeManager.toggle();
                });
            });
            
            this.updateToggleIcon();
        },
        
        /**
         * Get current effective theme
         * @returns {string} 'light' or 'dark'
         */
        getCurrentTheme: function() {
            var explicit = document.documentElement.getAttribute('data-theme');
            if (explicit) return explicit;
            
            // Check system preference
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
            return 'light';
        },
        
        /**
         * Get saved theme preference
         * @returns {string|null}
         */
        getSavedTheme: function() {
            try {
                return localStorage.getItem(this.STORAGE_KEY);
            } catch (e) {
                return null;
            }
        },
        
        /**
         * Set theme
         * @param {string} theme - 'light' or 'dark'
         * @param {boolean} save - Whether to save preference
         */
        setTheme: function(theme, save) {
            if (save === undefined) save = true;
            
            document.documentElement.setAttribute('data-theme', theme);
            
            if (save) {
                try {
                    localStorage.setItem(this.STORAGE_KEY, theme);
                } catch (e) {
                    // localStorage not available
                }
            }
            
            this.updateToggleIcon();
        },
        
        /**
         * Toggle between light and dark themes
         */
        toggle: function() {
            var current = this.getCurrentTheme();
            var next = current === 'dark' ? 'light' : 'dark';
            this.setTheme(next, true);
        },
        
        /**
         * Update toggle button icon based on current theme
         */
        updateToggleIcon: function() {
            // Icons are controlled via CSS based on data-theme attribute
            // This method can be extended for additional visual updates
        }
    };
    
    // ============================================
    // Projects Loader
    // ============================================
    
    var ProjectsLoader = {
        /**
         * Load and render projects from JSON
         * @param {string} containerId - ID of container element
         */
        load: function(containerId) {
            var container = document.getElementById(containerId);
            if (!container) return;
            
            var pathToRoot = window.ComponentLoader ? 
                window.ComponentLoader.getPathToRoot() : 
                this.getPathToRoot();
            
            var jsonPath = pathToRoot + 'data/projects.json';
            
            // Show loading state
            container.classList.add('loading');
            
            fetch(jsonPath)
                .then(function(response) {
                    if (!response.ok) throw new Error('Failed to load projects');
                    return response.json();
                })
                .then(function(data) {
                    container.classList.remove('loading');
                    ProjectsLoader.render(container, data.projects, pathToRoot);
                })
                .catch(function(error) {
                    container.classList.remove('loading');
                    console.warn('[Projects] Failed to load:', error);
                    // Keep static fallback content visible
                });
        },
        
        /**
         * Calculate path to root for standalone use
         * @returns {string}
         */
        getPathToRoot: function() {
            var pathname = window.location.pathname;
            var segments = pathname.split('/').filter(function(s) {
                return s && !s.endsWith('.html');
            });
            var depth = segments.length;
            var prefix = '';
            for (var i = 0; i < depth; i++) {
                prefix += '../';
            }
            return prefix || './';
        },
        
        /**
         * Render projects to container
         * @param {Element} container - Container element
         * @param {Array} projects - Array of project objects
         * @param {string} pathToRoot - Path to root directory
         */
        render: function(container, projects, pathToRoot) {
            if (!projects || projects.length === 0) {
                container.innerHTML = '<p class="text-muted text-center">No projects to display.</p>';
                return;
            }
            
            var html = '<div class="projects-grid">';
            
            projects.forEach(function(project) {
                html += ProjectsLoader.renderCard(project, pathToRoot);
            });
            
            html += '</div>';
            container.innerHTML = html;
        },
        
        /**
         * Render a single project card
         * @param {Object} project - Project data
         * @param {string} pathToRoot - Path to root
         * @returns {string} HTML string
         */
        renderCard: function(project, pathToRoot) {
            var imageSrc = project.image ? 
                (project.image.indexOf('://') !== -1 ? project.image : pathToRoot + project.image) :
                '';
            
            var imageHtml = imageSrc ?
                '<img src="' + this.escapeHtml(imageSrc) + '" alt="' + this.escapeHtml(project.title) + ' screenshot" loading="lazy">' :
                '<div class="img-placeholder" style="height: 200px;">📁</div>';
            
            var tagsHtml = '';
            if (project.tags && project.tags.length) {
                tagsHtml = '<div class="project-tags">';
                project.tags.forEach(function(tag) {
                    tagsHtml += '<span class="tag">' + ProjectsLoader.escapeHtml(tag) + '</span>';
                });
                tagsHtml += '</div>';
            }
            
            var linksHtml = '<div class="project-links">';
            if (project.demo) {
                linksHtml += '<a href="' + this.escapeHtml(project.demo) + '" class="btn btn-primary" target="_blank" rel="noopener">Live Demo</a>';
            }
            if (project.repo) {
                linksHtml += '<a href="' + this.escapeHtml(project.repo) + '" class="btn btn-secondary" target="_blank" rel="noopener">Source Code</a>';
            }
            linksHtml += '</div>';
            
            return '<article class="project-card">' +
                imageHtml +
                '<div class="project-card-content">' +
                '<h3>' + this.escapeHtml(project.title) + '</h3>' +
                '<p>' + this.escapeHtml(project.description) + '</p>' +
                tagsHtml +
                linksHtml +
                '</div>' +
                '</article>';
        },
        
        /**
         * Escape HTML special characters
         * @param {string} str - String to escape
         * @returns {string} Escaped string
         */
        escapeHtml: function(str) {
            if (!str) return '';
            var div = document.createElement('div');
            div.textContent = str;
            return div.innerHTML;
        }
    };
    
    // ============================================
    // Smooth Scroll
    // ============================================
    
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                var targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                var target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update URL without jumping
                    if (history.pushState) {
                        history.pushState(null, null, targetId);
                    }
                }
            });
        });
    }
    
    // ============================================
    // Form Handling
    // ============================================
    
    function initContactForm() {
        var form = document.getElementById('contact-form');
        if (!form) return;
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            var name = form.querySelector('[name="name"]');
            var email = form.querySelector('[name="email"]');
            var message = form.querySelector('[name="message"]');
            
            if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Email validation
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // In a real implementation, you would send this to a backend or form service
            // For now, we'll show a success message
            alert('Thank you for your message! This is a demo form - in production, you would connect this to a form handling service.');
            form.reset();
        });
    }
    
    // ============================================
    // 404 Redirect Handling
    // ============================================
    
    function handleRedirect() {
        var redirectPath = sessionStorage.getItem('404-redirect-path');
        if (redirectPath) {
            sessionStorage.removeItem('404-redirect-path');
            // Could implement client-side routing here if needed
            console.log('[Redirect] Attempted path:', redirectPath);
        }
    }
    
    // ============================================
    // Skip to Content
    // ============================================
    
    function initSkipLink() {
        var skipLink = document.querySelector('.skip-link');
        if (skipLink) {
            skipLink.addEventListener('click', function(e) {
                e.preventDefault();
                var target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.tabIndex = -1;
                    target.focus();
                }
            });
        }
    }
    
    // ============================================
    // Initialization
    // ============================================
    
    function init() {
        // Initialize theme
        ThemeManager.init();
        
        // Initialize smooth scroll
        initSmoothScroll();
        
        // Initialize contact form
        initContactForm();
        
        // Handle 404 redirects
        handleRedirect();
        
        // Initialize skip link
        initSkipLink();
        
        // Load projects if on projects page
        if (document.getElementById('projects-container')) {
            ProjectsLoader.load('projects-container');
        }
    }
    
    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Export for external use
    window.ThemeManager = ThemeManager;
    window.ProjectsLoader = ProjectsLoader;
})();
