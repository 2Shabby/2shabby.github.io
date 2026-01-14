/**
 * Main JavaScript
 * Optional enhancements - site works fully without JS
 */

(function() {
  'use strict';

  // Theme Toggle
  var ThemeToggle = {
    STORAGE_KEY: 'theme-preference',

    init: function() {
      var toggles = document.querySelectorAll('.theme-toggle');
      var self = this;

      // Restore saved theme
      var saved = this.getSaved();
      if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
      }

      // Bind click handlers
      toggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
          self.toggle();
        });
      });
    },

    getSaved: function() {
      try {
        return localStorage.getItem(this.STORAGE_KEY);
      } catch (e) {
        return null;
      }
    },

    getCurrent: function() {
      var explicit = document.documentElement.getAttribute('data-theme');
      if (explicit) return explicit;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
      return 'light';
    },

    toggle: function() {
      var current = this.getCurrent();
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try {
        localStorage.setItem(this.STORAGE_KEY, next);
      } catch (e) {}
    }
  };

  // Mobile Menu
  var MobileMenu = {
    init: function() {
      var toggle = document.querySelector('.menu-toggle');
      var nav = document.querySelector('.main-nav');

      if (!toggle || !nav) return;

      toggle.addEventListener('click', function() {
        var expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !expanded);
        nav.classList.toggle('active');
      });

      // Close on click outside
      document.addEventListener('click', function(e) {
        if (!toggle.contains(e.target) && !nav.contains(e.target)) {
          toggle.setAttribute('aria-expanded', 'false');
          nav.classList.remove('active');
        }
      });

      // Close on escape
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          toggle.setAttribute('aria-expanded', 'false');
          nav.classList.remove('active');
        }
      });
    }
  };

  // Initialize
  function init() {
    ThemeToggle.init();
    MobileMenu.init();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
