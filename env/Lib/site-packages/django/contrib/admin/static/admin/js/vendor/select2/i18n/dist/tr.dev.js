"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd;
  n.define("select2/i18n/tr", [], function () {
    return {
      errorLoading: function errorLoading() {
        return "Sonuç yüklenemedi";
      },
      inputTooLong: function inputTooLong(n) {
        return n.input.length - n.maximum + " karakter daha girmelisiniz";
      },
      inputTooShort: function inputTooShort(n) {
        return "En az " + (n.minimum - n.input.length) + " karakter daha girmelisiniz";
      },
      loadingMore: function loadingMore() {
        return "Daha fazla…";
      },
      maximumSelected: function maximumSelected(n) {
        return "Sadece " + n.maximum + " seçim yapabilirsiniz";
      },
      noResults: function noResults() {
        return "Sonuç bulunamadı";
      },
      searching: function searching() {
        return "Aranıyor…";
      },
      removeAllItems: function removeAllItems() {
        return "Tüm öğeleri kaldır";
      }
    };
  }), n.define, n.require;
}();