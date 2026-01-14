/**
 * Base Path Resolver
 * Automatically detects if the site is hosted at root (user site) or under a subpath (project site).
 * 
 * Usage:
 * - User site (username.github.io): BASE_PATH = ""
 * - Project site (username.github.io/repo): BASE_PATH = "/repo"
 * - Local file: BASE_PATH = "" (relative paths work)
 * 
 * All internal links should use: BASE_PATH + "/path/to/page.html"
 * Or use the helper: resolvePath("/path/to/page.html")
 */

(function() {
    'use strict';
    
    // Detect base path from current location
    function detectBasePath() {
        // For local file:// protocol, use empty base (relative paths)
        if (window.location.protocol === 'file:') {
            return '';
        }
        
        // For GitHub Pages or similar hosting
        var pathname = window.location.pathname;
        var hostname = window.location.hostname;
        
        // Check if this is a GitHub Pages site
        if (hostname.endsWith('.github.io')) {
            // Extract potential repo name from path
            // User site: username.github.io/ -> no prefix needed
            // Project site: username.github.io/repo/ -> prefix is /repo
            
            // Check for known page patterns to determine if we're at root or in a repo
            var segments = pathname.split('/').filter(Boolean);
            
            if (segments.length === 0) {
                // At root of user site
                return '';
            }
            
            // Check if the first segment is a known page/directory
            var knownPaths = ['index.html', 'pages', 'assets', 'components', 'data', '404.html'];
            var firstSegment = segments[0];
            
            if (knownPaths.indexOf(firstSegment) !== -1 || firstSegment.endsWith('.html')) {
                // First segment is a known path, so we're at root (user site)
                return '';
            }
            
            // First segment might be a repo name (project site)
            // Verify by checking if the pattern looks like a project site
            return '/' + firstSegment;
        }
        
        // For localhost or other hosts, try to detect from pathname
        // Look for repo-like pattern: /repo-name/...
        var segments = pathname.split('/').filter(Boolean);
        
        if (segments.length > 0) {
            var firstSegment = segments[0];
            var knownPaths = ['index.html', 'pages', 'assets', 'components', 'data', '404.html'];
            
            if (knownPaths.indexOf(firstSegment) === -1 && !firstSegment.endsWith('.html')) {
                // Might be a subpath/repo, but for local testing usually not
                // Default to empty for local servers
                return '';
            }
        }
        
        return '';
    }
    
    // Set global BASE_PATH
    window.BASE_PATH = detectBasePath();
    
    /**
     * Resolve a path relative to the base path
     * @param {string} path - Path starting with /
     * @returns {string} Resolved path with base
     */
    window.resolvePath = function(path) {
        if (!path) return window.BASE_PATH || '/';
        
        // Handle absolute URLs (external links)
        if (path.indexOf('://') !== -1 || path.indexOf('//') === 0) {
            return path;
        }
        
        // Handle hash-only links
        if (path.charAt(0) === '#') {
            return path;
        }
        
        // For local file:// protocol, convert to relative path
        if (window.location.protocol === 'file:') {
            // Remove leading slash for relative path
            return path.charAt(0) === '/' ? path.substring(1) : path;
        }
        
        // Ensure path starts with /
        if (path.charAt(0) !== '/') {
            path = '/' + path;
        }
        
        return window.BASE_PATH + path;
    };
    
    /**
     * Get the relative path from current page to another page
     * Useful for pages in subdirectories
     * @param {string} targetPath - Target path from root
     * @returns {string} Relative path
     */
    window.getRelativePath = function(targetPath) {
        var currentPath = window.location.pathname;
        var basePath = window.BASE_PATH;
        
        // Remove base path from current path
        if (basePath && currentPath.indexOf(basePath) === 0) {
            currentPath = currentPath.substring(basePath.length);
        }
        
        // Count directory depth of current page
        var currentSegments = currentPath.split('/').filter(Boolean);
        var depth = currentSegments.length - 1; // -1 for the file itself
        
        if (depth < 0) depth = 0;
        
        // Build relative prefix
        var prefix = '';
        for (var i = 0; i < depth; i++) {
            prefix += '../';
        }
        
        // Remove leading slash from target
        if (targetPath.charAt(0) === '/') {
            targetPath = targetPath.substring(1);
        }
        
        return prefix + targetPath;
    };
    
    // Log base path for debugging (remove in production)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('[Base Path] Detected:', window.BASE_PATH || '(root)');
    }
})();
