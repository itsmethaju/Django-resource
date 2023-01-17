"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd;
  n.define("select2/i18n/ja", [], function () {
    return {
      errorLoading: function errorLoading() {
        return "結果が読み込まれませんでした";
      },
      inputTooLong: function inputTooLong(n) {
        return n.input.length - n.maximum + " 文字を削除してください";
      },
      inputTooShort: function inputTooShort(n) {
        return "少なくとも " + (n.minimum - n.input.length) + " 文字を入力してください";
      },
      loadingMore: function loadingMore() {
        return "読み込み中…";
      },
      maximumSelected: function maximumSelected(n) {
        return n.maximum + " 件しか選択できません";
      },
      noResults: function noResults() {
        return "対象が見つかりません";
      },
      searching: function searching() {
        return "検索しています…";
      },
      removeAllItems: function removeAllItems() {
        return "すべてのアイテムを削除";
      }
    };
  }), n.define, n.require;
}();