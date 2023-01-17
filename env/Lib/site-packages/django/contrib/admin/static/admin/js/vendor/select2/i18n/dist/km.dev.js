"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd;
  n.define("select2/i18n/km", [], function () {
    return {
      errorLoading: function errorLoading() {
        return "មិនអាចទាញយកទិន្នន័យ";
      },
      inputTooLong: function inputTooLong(n) {
        return "សូមលុបចេញ  " + (n.input.length - n.maximum) + " អក្សរ";
      },
      inputTooShort: function inputTooShort(n) {
        return "សូមបញ្ចូល" + (n.minimum - n.input.length) + " អក្សរ រឺ ច្រើនជាងនេះ";
      },
      loadingMore: function loadingMore() {
        return "កំពុងទាញយកទិន្នន័យបន្ថែម...";
      },
      maximumSelected: function maximumSelected(n) {
        return "អ្នកអាចជ្រើសរើសបានតែ " + n.maximum + " ជម្រើសប៉ុណ្ណោះ";
      },
      noResults: function noResults() {
        return "មិនមានលទ្ធផល";
      },
      searching: function searching() {
        return "កំពុងស្វែងរក...";
      },
      removeAllItems: function removeAllItems() {
        return "លុបធាតុទាំងអស់";
      }
    };
  }), n.define, n.require;
}();