"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;
  e.define("select2/i18n/nb", [], function () {
    return {
      errorLoading: function errorLoading() {
        return "Kunne ikke hente resultater.";
      },
      inputTooLong: function inputTooLong(e) {
        return "Vennligst fjern " + (e.input.length - e.maximum) + " tegn";
      },
      inputTooShort: function inputTooShort(e) {
        return "Vennligst skriv inn " + (e.minimum - e.input.length) + " tegn til";
      },
      loadingMore: function loadingMore() {
        return "Laster flere resultater…";
      },
      maximumSelected: function maximumSelected(e) {
        return "Du kan velge maks " + e.maximum + " elementer";
      },
      noResults: function noResults() {
        return "Ingen treff";
      },
      searching: function searching() {
        return "Søker…";
      },
      removeAllItems: function removeAllItems() {
        return "Fjern alle elementer";
      }
    };
  }), e.define, e.require;
}();