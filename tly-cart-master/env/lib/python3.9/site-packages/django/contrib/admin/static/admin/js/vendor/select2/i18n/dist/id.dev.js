"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd;
  n.define("select2/i18n/id", [], function () {
    return {
      errorLoading: function errorLoading() {
        return "Data tidak boleh diambil.";
      },
      inputTooLong: function inputTooLong(n) {
        return "Hapuskan " + (n.input.length - n.maximum) + " huruf";
      },
      inputTooShort: function inputTooShort(n) {
        return "Masukkan " + (n.minimum - n.input.length) + " huruf lagi";
      },
      loadingMore: function loadingMore() {
        return "Mengambil data…";
      },
      maximumSelected: function maximumSelected(n) {
        return "Anda hanya dapat memilih " + n.maximum + " pilihan";
      },
      noResults: function noResults() {
        return "Tidak ada data yang sesuai";
      },
      searching: function searching() {
        return "Mencari…";
      },
      removeAllItems: function removeAllItems() {
        return "Hapus semua item";
      }
    };
  }), n.define, n.require;
}();