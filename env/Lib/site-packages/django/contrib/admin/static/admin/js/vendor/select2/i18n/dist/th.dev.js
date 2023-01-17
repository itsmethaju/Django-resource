"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd;
  n.define("select2/i18n/th", [], function () {
    return {
      errorLoading: function errorLoading() {
        return "ไม่สามารถค้นข้อมูลได้";
      },
      inputTooLong: function inputTooLong(n) {
        return "โปรดลบออก " + (n.input.length - n.maximum) + " ตัวอักษร";
      },
      inputTooShort: function inputTooShort(n) {
        return "โปรดพิมพ์เพิ่มอีก " + (n.minimum - n.input.length) + " ตัวอักษร";
      },
      loadingMore: function loadingMore() {
        return "กำลังค้นข้อมูลเพิ่ม…";
      },
      maximumSelected: function maximumSelected(n) {
        return "คุณสามารถเลือกได้ไม่เกิน " + n.maximum + " รายการ";
      },
      noResults: function noResults() {
        return "ไม่พบข้อมูล";
      },
      searching: function searching() {
        return "กำลังค้นข้อมูล…";
      },
      removeAllItems: function removeAllItems() {
        return "ลบรายการทั้งหมด";
      }
    };
  }), n.define, n.require;
}();