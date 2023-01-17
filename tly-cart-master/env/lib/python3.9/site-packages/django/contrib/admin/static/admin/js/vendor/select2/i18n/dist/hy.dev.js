"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd;
  n.define("select2/i18n/hy", [], function () {
    return {
      errorLoading: function errorLoading() {
        return "Արդյունքները հնարավոր չէ բեռնել։";
      },
      inputTooLong: function inputTooLong(n) {
        return "Խնդրում ենք հեռացնել " + (n.input.length - n.maximum) + " նշան";
      },
      inputTooShort: function inputTooShort(n) {
        return "Խնդրում ենք մուտքագրել " + (n.minimum - n.input.length) + " կամ ավել նշաններ";
      },
      loadingMore: function loadingMore() {
        return "Բեռնվում են նոր արդյունքներ․․․";
      },
      maximumSelected: function maximumSelected(n) {
        return "Դուք կարող եք ընտրել առավելագույնը " + n.maximum + " կետ";
      },
      noResults: function noResults() {
        return "Արդյունքներ չեն գտնվել";
      },
      searching: function searching() {
        return "Որոնում․․․";
      },
      removeAllItems: function removeAllItems() {
        return "Հեռացնել բոլոր տարրերը";
      }
    };
  }), n.define, n.require;
}();