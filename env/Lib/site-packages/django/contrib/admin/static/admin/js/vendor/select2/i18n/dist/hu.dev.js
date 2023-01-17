"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;
  e.define("select2/i18n/hu", [], function () {
    return {
      errorLoading: function errorLoading() {
        return "Az eredmények betöltése nem sikerült.";
      },
      inputTooLong: function inputTooLong(e) {
        return "Túl hosszú. " + (e.input.length - e.maximum) + " karakterrel több, mint kellene.";
      },
      inputTooShort: function inputTooShort(e) {
        return "Túl rövid. Még " + (e.minimum - e.input.length) + " karakter hiányzik.";
      },
      loadingMore: function loadingMore() {
        return "Töltés…";
      },
      maximumSelected: function maximumSelected(e) {
        return "Csak " + e.maximum + " elemet lehet kiválasztani.";
      },
      noResults: function noResults() {
        return "Nincs találat.";
      },
      searching: function searching() {
        return "Keresés…";
      },
      removeAllItems: function removeAllItems() {
        return "Távolítson el minden elemet";
      }
    };
  }), e.define, e.require;
}();