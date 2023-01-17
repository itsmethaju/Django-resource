"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;
  e.define("select2/i18n/tk", [], function () {
    return {
      errorLoading: function errorLoading() {
        return "Netije ýüklenmedi.";
      },
      inputTooLong: function inputTooLong(e) {
        return e.input.length - e.maximum + " harp bozuň.";
      },
      inputTooShort: function inputTooShort(e) {
        return "Ýene-de iň az " + (e.minimum - e.input.length) + " harp ýazyň.";
      },
      loadingMore: function loadingMore() {
        return "Köpräk netije görkezilýär…";
      },
      maximumSelected: function maximumSelected(e) {
        return "Diňe " + e.maximum + " sanysyny saýlaň.";
      },
      noResults: function noResults() {
        return "Netije tapylmady.";
      },
      searching: function searching() {
        return "Gözlenýär…";
      },
      removeAllItems: function removeAllItems() {
        return "Remove all items";
      }
    };
  }), e.define, e.require;
}();