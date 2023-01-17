"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;
  e.define("select2/i18n/de", [], function () {
    return {
      errorLoading: function errorLoading() {
        return "Die Ergebnisse konnten nicht geladen werden.";
      },
      inputTooLong: function inputTooLong(e) {
        return "Bitte " + (e.input.length - e.maximum) + " Zeichen weniger eingeben";
      },
      inputTooShort: function inputTooShort(e) {
        return "Bitte " + (e.minimum - e.input.length) + " Zeichen mehr eingeben";
      },
      loadingMore: function loadingMore() {
        return "Lade mehr Ergebnisse…";
      },
      maximumSelected: function maximumSelected(e) {
        var n = "Sie können nur " + e.maximum + " Element";
        return 1 != e.maximum && (n += "e"), n += " auswählen";
      },
      noResults: function noResults() {
        return "Keine Übereinstimmungen gefunden";
      },
      searching: function searching() {
        return "Suche…";
      },
      removeAllItems: function removeAllItems() {
        return "Entferne alle Elemente";
      }
    };
  }), e.define, e.require;
}();