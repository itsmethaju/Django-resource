/**
 * Persist changelist filters state (collapsed/expanded).
 */
'use strict';

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

{
  // Init filters.
  var filters = JSON.parse(sessionStorage.getItem('django.admin.filtersState'));

  if (!filters) {
    filters = {};
  }

  Object.entries(filters).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    var detailElement = document.querySelector("[data-filter-title='".concat(key, "']")); // Check if the filter is present, it could be from other view.

    if (detailElement) {
      value ? detailElement.setAttribute('open', '') : detailElement.removeAttribute('open');
    }
  }); // Save filter state when clicks.

  var details = document.querySelectorAll('details');
  details.forEach(function (detail) {
    detail.addEventListener('toggle', function (event) {
      filters["".concat(event.target.dataset.filterTitle)] = detail.open;
      sessionStorage.setItem('django.admin.filtersState', JSON.stringify(filters));
    });
  });
}