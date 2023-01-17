"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd;
  n.define("select2/i18n/sv", [], function () {
    return {
      errorLoading: function errorLoading() {
        return "Resultat kunde inte laddas.";
      },
      inputTooLong: function inputTooLong(n) {
        return "Vänligen sudda ut " + (n.input.length - n.maximum) + " tecken";
      },
      inputTooShort: function inputTooShort(n) {
        return "Vänligen skriv in " + (n.minimum - n.input.length) + " eller fler tecken";
      },
      loadingMore: function loadingMore() {
        return "Laddar fler resultat…";
      },
      maximumSelected: function maximumSelected(n) {
        return "Du kan max välja " + n.maximum + " element";
      },
      noResults: function noResults() {
        return "Inga träffar";
      },
      searching: function searching() {
        return "Söker…";
      },
      removeAllItems: function removeAllItems() {
        return "Ta bort alla objekt";
      }
    };
  }), n.define, n.require;
}();