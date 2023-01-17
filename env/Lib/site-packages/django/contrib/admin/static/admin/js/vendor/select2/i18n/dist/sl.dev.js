"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;
  e.define("select2/i18n/sl", [], function () {
    return {
      errorLoading: function errorLoading() {
        return "Zadetkov iskanja ni bilo mogoče naložiti.";
      },
      inputTooLong: function inputTooLong(e) {
        var n = e.input.length - e.maximum,
            t = "Prosim zbrišite " + n + " znak";
        return 2 == n ? t += "a" : 1 != n && (t += "e"), t;
      },
      inputTooShort: function inputTooShort(e) {
        var n = e.minimum - e.input.length,
            t = "Prosim vpišite še " + n + " znak";
        return 2 == n ? t += "a" : 1 != n && (t += "e"), t;
      },
      loadingMore: function loadingMore() {
        return "Nalagam več zadetkov…";
      },
      maximumSelected: function maximumSelected(e) {
        var n = "Označite lahko največ " + e.maximum + " predmet";
        return 2 == e.maximum ? n += "a" : 1 != e.maximum && (n += "e"), n;
      },
      noResults: function noResults() {
        return "Ni zadetkov.";
      },
      searching: function searching() {
        return "Iščem…";
      },
      removeAllItems: function removeAllItems() {
        return "Odstranite vse elemente";
      }
    };
  }), e.define, e.require;
}();