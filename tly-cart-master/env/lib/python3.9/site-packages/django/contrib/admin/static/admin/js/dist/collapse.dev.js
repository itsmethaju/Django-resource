/*global gettext*/
'use strict';

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

{
  window.addEventListener('load', function () {
    // Add anchor tag for Show/Hide link
    var fieldsets = document.querySelectorAll('fieldset.collapse');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = fieldsets.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2),
            i = _step$value[0],
            elem = _step$value[1];

        // Don't hide if fields in this fieldset have errors
        if (elem.querySelectorAll('div.errors, ul.errorlist').length === 0) {
          elem.classList.add('collapsed');
          var h2 = elem.querySelector('h2');
          var link = document.createElement('a');
          link.id = 'fieldsetcollapser' + i;
          link.className = 'collapse-toggle';
          link.href = '#';
          link.textContent = gettext('Show');
          h2.appendChild(document.createTextNode(' ('));
          h2.appendChild(link);
          h2.appendChild(document.createTextNode(')'));
        }
      } // Add toggle to hide/show anchor tag

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

    var toggleFunc = function toggleFunc(ev) {
      if (ev.target.matches('.collapse-toggle')) {
        ev.preventDefault();
        ev.stopPropagation();
        var fieldset = ev.target.closest('fieldset');

        if (fieldset.classList.contains('collapsed')) {
          // Show
          ev.target.textContent = gettext('Hide');
          fieldset.classList.remove('collapsed');
        } else {
          // Hide
          ev.target.textContent = gettext('Show');
          fieldset.classList.add('collapsed');
        }
      }
    };

    document.querySelectorAll('fieldset.module').forEach(function (el) {
      el.addEventListener('click', toggleFunc);
    });
  });
}