"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd;
  n.define("select2/i18n/fi", [], function () {
    return {
      errorLoading: function errorLoading() {
        return "Tuloksia ei saatu ladattua.";
      },
      inputTooLong: function inputTooLong(n) {
        return "Ole hyvä ja anna " + (n.input.length - n.maximum) + " merkkiä vähemmän";
      },
      inputTooShort: function inputTooShort(n) {
        return "Ole hyvä ja anna " + (n.minimum - n.input.length) + " merkkiä lisää";
      },
      loadingMore: function loadingMore() {
        return "Ladataan lisää tuloksia…";
      },
      maximumSelected: function maximumSelected(n) {
        return "Voit valita ainoastaan " + n.maximum + " kpl";
      },
      noResults: function noResults() {
        return "Ei tuloksia";
      },
      searching: function searching() {
        return "Haetaan…";
      },
      removeAllItems: function removeAllItems() {
        return "Poista kaikki kohteet";
      }
    };
  }), n.define, n.require;
}();