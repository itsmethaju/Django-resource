"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd;
  n.define("select2/i18n/hsb", [], function () {
    var n = ["znamješko", "znamješce", "znamješka", "znamješkow"],
        e = ["zapisk", "zapiskaj", "zapiski", "zapiskow"],
        u = function u(n, e) {
      return 1 === n ? e[0] : 2 === n ? e[1] : n > 2 && n <= 4 ? e[2] : n >= 5 ? e[3] : void 0;
    };

    return {
      errorLoading: function errorLoading() {
        return "Wuslědki njedachu so začitać.";
      },
      inputTooLong: function inputTooLong(e) {
        var a = e.input.length - e.maximum;
        return "Prošu zhašej " + a + " " + u(a, n);
      },
      inputTooShort: function inputTooShort(e) {
        var a = e.minimum - e.input.length;
        return "Prošu zapodaj znajmjeńša " + a + " " + u(a, n);
      },
      loadingMore: function loadingMore() {
        return "Dalše wuslědki so začitaja…";
      },
      maximumSelected: function maximumSelected(n) {
        return "Móžeš jenož " + n.maximum + " " + u(n.maximum, e) + "wubrać";
      },
      noResults: function noResults() {
        return "Žane wuslědki namakane";
      },
      searching: function searching() {
        return "Pyta so…";
      },
      removeAllItems: function removeAllItems() {
        return "Remove all items";
      }
    };
  }), n.define, n.require;
}();