"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd;
  n.define("select2/i18n/zh-CN", [], function () {
    return {
      errorLoading: function errorLoading() {
        return "无法载入结果。";
      },
      inputTooLong: function inputTooLong(n) {
        return "请删除" + (n.input.length - n.maximum) + "个字符";
      },
      inputTooShort: function inputTooShort(n) {
        return "请再输入至少" + (n.minimum - n.input.length) + "个字符";
      },
      loadingMore: function loadingMore() {
        return "载入更多结果…";
      },
      maximumSelected: function maximumSelected(n) {
        return "最多只能选择" + n.maximum + "个项目";
      },
      noResults: function noResults() {
        return "未找到结果";
      },
      searching: function searching() {
        return "搜索中…";
      },
      removeAllItems: function removeAllItems() {
        return "删除所有项目";
      }
    };
  }), n.define, n.require;
}();