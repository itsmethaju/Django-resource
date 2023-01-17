"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;
  e.define("select2/i18n/eu", [], function () {
    return {
      inputTooLong: function inputTooLong(e) {
        var t = e.input.length - e.maximum,
            n = "Idatzi ";
        return n += 1 == t ? "karaktere bat" : t + " karaktere", n += " gutxiago";
      },
      inputTooShort: function inputTooShort(e) {
        var t = e.minimum - e.input.length,
            n = "Idatzi ";
        return n += 1 == t ? "karaktere bat" : t + " karaktere", n += " gehiago";
      },
      loadingMore: function loadingMore() {
        return "Emaitza gehiago kargatzen…";
      },
      maximumSelected: function maximumSelected(e) {
        return 1 === e.maximum ? "Elementu bakarra hauta dezakezu" : e.maximum + " elementu hauta ditzakezu soilik";
      },
      noResults: function noResults() {
        return "Ez da bat datorrenik aurkitu";
      },
      searching: function searching() {
        return "Bilatzen…";
      },
      removeAllItems: function removeAllItems() {
        return "Kendu elementu guztiak";
      }
    };
  }), e.define, e.require;
}();