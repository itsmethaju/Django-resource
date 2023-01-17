"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd;
  n.define("select2/i18n/bg", [], function () {
    return {
      inputTooLong: function inputTooLong(n) {
        var e = n.input.length - n.maximum,
            u = "Моля въведете с " + e + " по-малко символ";
        return e > 1 && (u += "a"), u;
      },
      inputTooShort: function inputTooShort(n) {
        var e = n.minimum - n.input.length,
            u = "Моля въведете още " + e + " символ";
        return e > 1 && (u += "a"), u;
      },
      loadingMore: function loadingMore() {
        return "Зареждат се още…";
      },
      maximumSelected: function maximumSelected(n) {
        var e = "Можете да направите до " + n.maximum + " ";
        return n.maximum > 1 ? e += "избора" : e += "избор", e;
      },
      noResults: function noResults() {
        return "Няма намерени съвпадения";
      },
      searching: function searching() {
        return "Търсене…";
      },
      removeAllItems: function removeAllItems() {
        return "Премахнете всички елементи";
      }
    };
  }), n.define, n.require;
}();