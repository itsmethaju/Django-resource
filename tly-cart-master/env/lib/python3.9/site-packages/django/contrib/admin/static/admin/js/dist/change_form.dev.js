'use strict';

{
  var inputTags = ['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'];
  var modelName = document.getElementById('django-admin-form-add-constants').dataset.modelName;

  if (modelName) {
    var form = document.getElementById(modelName + '_form');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = form.elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var element = _step.value;

        // HTMLElement.offsetParent returns null when the element is not
        // rendered.
        if (inputTags.includes(element.tagName) && !element.disabled && element.offsetParent) {
          element.focus();
          break;
        }
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
  }
}