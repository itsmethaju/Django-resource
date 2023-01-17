"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd;
  n.define("select2/i18n/ru", [], function () {
    function n(n, e, r, u) {
      return n % 10 < 5 && n % 10 > 0 && n % 100 < 5 || n % 100 > 20 ? n % 10 > 1 ? r : e : u;
    }

    return {
      errorLoading: function errorLoading() {
        return "Невозможно загрузить результаты";
      },
      inputTooLong: function inputTooLong(e) {
        var r = e.input.length - e.maximum,
            u = "Пожалуйста, введите на " + r + " символ";
        return u += n(r, "", "a", "ов"), u += " меньше";
      },
      inputTooShort: function inputTooShort(e) {
        var r = e.minimum - e.input.length,
            u = "Пожалуйста, введите ещё хотя бы " + r + " символ";
        return u += n(r, "", "a", "ов");
      },
      loadingMore: function loadingMore() {
        return "Загрузка данных…";
      },
      maximumSelected: function maximumSelected(e) {
        var r = "Вы можете выбрать не более " + e.maximum + " элемент";
        return r += n(e.maximum, "", "a", "ов");
      },
      noResults: function noResults() {
        return "Совпадений не найдено";
      },
      searching: function searching() {
        return "Поиск…";
      },
      removeAllItems: function removeAllItems() {
        return "Удалить все элементы";
      }
    };
  }), n.define, n.require;
}();