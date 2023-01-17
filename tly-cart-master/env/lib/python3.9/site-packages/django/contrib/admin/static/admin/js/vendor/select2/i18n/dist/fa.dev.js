"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd;
  n.define("select2/i18n/fa", [], function () {
    return {
      errorLoading: function errorLoading() {
        return "امکان بارگذاری نتایج وجود ندارد.";
      },
      inputTooLong: function inputTooLong(n) {
        return "لطفاً " + (n.input.length - n.maximum) + " کاراکتر را حذف نمایید";
      },
      inputTooShort: function inputTooShort(n) {
        return "لطفاً تعداد " + (n.minimum - n.input.length) + " کاراکتر یا بیشتر وارد نمایید";
      },
      loadingMore: function loadingMore() {
        return "در حال بارگذاری نتایج بیشتر...";
      },
      maximumSelected: function maximumSelected(n) {
        return "شما تنها می‌توانید " + n.maximum + " آیتم را انتخاب نمایید";
      },
      noResults: function noResults() {
        return "هیچ نتیجه‌ای یافت نشد";
      },
      searching: function searching() {
        return "در حال جستجو...";
      },
      removeAllItems: function removeAllItems() {
        return "همه موارد را حذف کنید";
      }
    };
  }), n.define, n.require;
}();