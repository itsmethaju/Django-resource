"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd;
  n.define("select2/i18n/el", [], function () {
    return {
      errorLoading: function errorLoading() {
        return "Τα αποτελέσματα δεν μπόρεσαν να φορτώσουν.";
      },
      inputTooLong: function inputTooLong(n) {
        var e = n.input.length - n.maximum,
            u = "Παρακαλώ διαγράψτε " + e + " χαρακτήρ";
        return 1 == e && (u += "α"), 1 != e && (u += "ες"), u;
      },
      inputTooShort: function inputTooShort(n) {
        return "Παρακαλώ συμπληρώστε " + (n.minimum - n.input.length) + " ή περισσότερους χαρακτήρες";
      },
      loadingMore: function loadingMore() {
        return "Φόρτωση περισσότερων αποτελεσμάτων…";
      },
      maximumSelected: function maximumSelected(n) {
        var e = "Μπορείτε να επιλέξετε μόνο " + n.maximum + " επιλογ";
        return 1 == n.maximum && (e += "ή"), 1 != n.maximum && (e += "ές"), e;
      },
      noResults: function noResults() {
        return "Δεν βρέθηκαν αποτελέσματα";
      },
      searching: function searching() {
        return "Αναζήτηση…";
      },
      removeAllItems: function removeAllItems() {
        return "Καταργήστε όλα τα στοιχεία";
      }
    };
  }), n.define, n.require;
}();