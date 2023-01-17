"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;
  e.define("select2/i18n/nl", [], function () {
    return {
      errorLoading: function errorLoading() {
        return "De resultaten konden niet worden geladen.";
      },
      inputTooLong: function inputTooLong(e) {
        return "Gelieve " + (e.input.length - e.maximum) + " karakters te verwijderen";
      },
      inputTooShort: function inputTooShort(e) {
        return "Gelieve " + (e.minimum - e.input.length) + " of meer karakters in te voeren";
      },
      loadingMore: function loadingMore() {
        return "Meer resultaten laden…";
      },
      maximumSelected: function maximumSelected(e) {
        var n = 1 == e.maximum ? "kan" : "kunnen",
            r = "Er " + n + " maar " + e.maximum + " item";
        return 1 != e.maximum && (r += "s"), r += " worden geselecteerd";
      },
      noResults: function noResults() {
        return "Geen resultaten gevonden…";
      },
      searching: function searching() {
        return "Zoeken…";
      },
      removeAllItems: function removeAllItems() {
        return "Verwijder alle items";
      }
    };
  }), e.define, e.require;
}();