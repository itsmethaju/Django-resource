"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;
  e.define("select2/i18n/da", [], function () {
    return {
      errorLoading: function errorLoading() {
        return "Resultaterne kunne ikke indlæses.";
      },
      inputTooLong: function inputTooLong(e) {
        return "Angiv venligst " + (e.input.length - e.maximum) + " tegn mindre";
      },
      inputTooShort: function inputTooShort(e) {
        return "Angiv venligst " + (e.minimum - e.input.length) + " tegn mere";
      },
      loadingMore: function loadingMore() {
        return "Indlæser flere resultater…";
      },
      maximumSelected: function maximumSelected(e) {
        var n = "Du kan kun vælge " + e.maximum + " emne";
        return 1 != e.maximum && (n += "r"), n;
      },
      noResults: function noResults() {
        return "Ingen resultater fundet";
      },
      searching: function searching() {
        return "Søger…";
      },
      removeAllItems: function removeAllItems() {
        return "Fjern alle elementer";
      }
    };
  }), e.define, e.require;
}();