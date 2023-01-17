"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd;
  n.define("select2/i18n/hr", [], function () {
    function n(n) {
      var e = " " + n + " znak";
      return n % 10 < 5 && n % 10 > 0 && (n % 100 < 5 || n % 100 > 19) ? n % 10 > 1 && (e += "a") : e += "ova", e;
    }

    return {
      errorLoading: function errorLoading() {
        return "Preuzimanje nije uspjelo.";
      },
      inputTooLong: function inputTooLong(e) {
        return "Unesite " + n(e.input.length - e.maximum);
      },
      inputTooShort: function inputTooShort(e) {
        return "Unesite još " + n(e.minimum - e.input.length);
      },
      loadingMore: function loadingMore() {
        return "Učitavanje rezultata…";
      },
      maximumSelected: function maximumSelected(n) {
        return "Maksimalan broj odabranih stavki je " + n.maximum;
      },
      noResults: function noResults() {
        return "Nema rezultata";
      },
      searching: function searching() {
        return "Pretraga…";
      },
      removeAllItems: function removeAllItems() {
        return "Ukloni sve stavke";
      }
    };
  }), n.define, n.require;
}();