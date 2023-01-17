"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;
  e.define("select2/i18n/sk", [], function () {
    var e = {
      2: function _(e) {
        return e ? "dva" : "dve";
      },
      3: function _() {
        return "tri";
      },
      4: function _() {
        return "štyri";
      }
    };
    return {
      errorLoading: function errorLoading() {
        return "Výsledky sa nepodarilo načítať.";
      },
      inputTooLong: function inputTooLong(n) {
        var t = n.input.length - n.maximum;
        return 1 == t ? "Prosím, zadajte o jeden znak menej" : t >= 2 && t <= 4 ? "Prosím, zadajte o " + e[t](!0) + " znaky menej" : "Prosím, zadajte o " + t + " znakov menej";
      },
      inputTooShort: function inputTooShort(n) {
        var t = n.minimum - n.input.length;
        return 1 == t ? "Prosím, zadajte ešte jeden znak" : t <= 4 ? "Prosím, zadajte ešte ďalšie " + e[t](!0) + " znaky" : "Prosím, zadajte ešte ďalších " + t + " znakov";
      },
      loadingMore: function loadingMore() {
        return "Načítanie ďalších výsledkov…";
      },
      maximumSelected: function maximumSelected(n) {
        return 1 == n.maximum ? "Môžete zvoliť len jednu položku" : n.maximum >= 2 && n.maximum <= 4 ? "Môžete zvoliť najviac " + e[n.maximum](!1) + " položky" : "Môžete zvoliť najviac " + n.maximum + " položiek";
      },
      noResults: function noResults() {
        return "Nenašli sa žiadne položky";
      },
      searching: function searching() {
        return "Vyhľadávanie…";
      },
      removeAllItems: function removeAllItems() {
        return "Odstráňte všetky položky";
      }
    };
  }), e.define, e.require;
}();