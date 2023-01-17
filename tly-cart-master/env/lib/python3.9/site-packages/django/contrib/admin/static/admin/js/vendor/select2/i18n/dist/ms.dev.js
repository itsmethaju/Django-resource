"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd;
  n.define("select2/i18n/ms", [], function () {
    return {
      errorLoading: function errorLoading() {
        return "Keputusan tidak berjaya dimuatkan.";
      },
      inputTooLong: function inputTooLong(n) {
        return "Sila hapuskan " + (n.input.length - n.maximum) + " aksara";
      },
      inputTooShort: function inputTooShort(n) {
        return "Sila masukkan " + (n.minimum - n.input.length) + " atau lebih aksara";
      },
      loadingMore: function loadingMore() {
        return "Sedang memuatkan keputusan…";
      },
      maximumSelected: function maximumSelected(n) {
        return "Anda hanya boleh memilih " + n.maximum + " pilihan";
      },
      noResults: function noResults() {
        return "Tiada padanan yang ditemui";
      },
      searching: function searching() {
        return "Mencari…";
      },
      removeAllItems: function removeAllItems() {
        return "Keluarkan semua item";
      }
    };
  }), n.define, n.require;
}();