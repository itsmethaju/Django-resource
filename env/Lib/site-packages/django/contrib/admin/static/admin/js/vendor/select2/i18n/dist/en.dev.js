"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;
  e.define("select2/i18n/en", [], function () {
    return {
      errorLoading: function errorLoading() {
        return "The results could not be loaded.";
      },
      inputTooLong: function inputTooLong(e) {
        var n = e.input.length - e.maximum,
            r = "Please delete " + n + " character";
        return 1 != n && (r += "s"), r;
      },
      inputTooShort: function inputTooShort(e) {
        return "Please enter " + (e.minimum - e.input.length) + " or more characters";
      },
      loadingMore: function loadingMore() {
        return "Loading more results…";
      },
      maximumSelected: function maximumSelected(e) {
        var n = "You can only select " + e.maximum + " item";
        return 1 != e.maximum && (n += "s"), n;
      },
      noResults: function noResults() {
        return "No results found";
      },
      searching: function searching() {
        return "Searching…";
      },
      removeAllItems: function removeAllItems() {
        return "Remove all items";
      }
    };
  }), e.define, e.require;
}();