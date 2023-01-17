'use strict';

{
  var initSidebarQuickFilter = function initSidebarQuickFilter() {
    var options = [];
    var navSidebar = document.getElementById('nav-sidebar');

    if (!navSidebar) {
      return;
    }

    navSidebar.querySelectorAll('th[scope=row] a').forEach(function (container) {
      options.push({
        title: container.innerHTML,
        node: container
      });
    });

    function checkValue(event) {
      var filterValue = event.target.value;

      if (filterValue) {
        filterValue = filterValue.toLowerCase();
      }

      if (event.key === 'Escape') {
        filterValue = '';
        event.target.value = ''; // clear input
      }

      var matches = false;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = options[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var o = _step3.value;
          var displayValue = '';

          if (filterValue) {
            if (o.title.toLowerCase().indexOf(filterValue) === -1) {
              displayValue = 'none';
            } else {
              matches = true;
            }
          } // show/hide parent <TR>


          o.node.parentNode.parentNode.style.display = displayValue;
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      if (!filterValue || matches) {
        event.target.classList.remove('no-results');
      } else {
        event.target.classList.add('no-results');
      }

      sessionStorage.setItem('django.admin.navSidebarFilterValue', filterValue);
    }

    var nav = document.getElementById('nav-filter');
    nav.addEventListener('change', checkValue, false);
    nav.addEventListener('input', checkValue, false);
    nav.addEventListener('keyup', checkValue, false);
    var storedValue = sessionStorage.getItem('django.admin.navSidebarFilterValue');

    if (storedValue) {
      nav.value = storedValue;
      checkValue({
        target: nav,
        key: ''
      });
    }
  };

  var toggleNavSidebar = document.getElementById('toggle-nav-sidebar');

  if (toggleNavSidebar !== null) {
    var disableNavLinkTabbing = function disableNavLinkTabbing() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = navLinks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var navLink = _step.value;
          navLink.tabIndex = -1;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    };

    var enableNavLinkTabbing = function enableNavLinkTabbing() {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = navLinks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var navLink = _step2.value;
          navLink.tabIndex = 0;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    };

    var disableNavFilterTabbing = function disableNavFilterTabbing() {
      document.getElementById('nav-filter').tabIndex = -1;
    };

    var enableNavFilterTabbing = function enableNavFilterTabbing() {
      document.getElementById('nav-filter').tabIndex = 0;
    };

    var navLinks = document.querySelectorAll('#nav-sidebar a');
    var main = document.getElementById('main');
    var navSidebarIsOpen = localStorage.getItem('django.admin.navSidebarIsOpen');

    if (navSidebarIsOpen === null) {
      navSidebarIsOpen = 'true';
    }

    if (navSidebarIsOpen === 'false') {
      disableNavLinkTabbing();
      disableNavFilterTabbing();
    }

    main.classList.toggle('shifted', navSidebarIsOpen === 'true');
    toggleNavSidebar.addEventListener('click', function () {
      if (navSidebarIsOpen === 'true') {
        navSidebarIsOpen = 'false';
        disableNavLinkTabbing();
        disableNavFilterTabbing();
      } else {
        navSidebarIsOpen = 'true';
        enableNavLinkTabbing();
        enableNavFilterTabbing();
      }

      localStorage.setItem('django.admin.navSidebarIsOpen', navSidebarIsOpen);
      main.classList.toggle('shifted');
    });
  }

  window.initSidebarQuickFilter = initSidebarQuickFilter;
  initSidebarQuickFilter();
}