"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;
  e.define("select2/i18n/it", [], function () {
    return {
      errorLoading: function errorLoading() {
        return "I risultati non possono essere caricati.";
      },
      inputTooLong: function inputTooLong(e) {
        var n = e.input.length - e.maximum,
            t = "Per favore cancella " + n + " caratter";
        return t += 1 !== n ? "i" : "e";
      },
      inputTooShort: function inputTooShort(e) {
        return "Per favore inserisci " + (e.minimum - e.input.length) + " o più caratteri";
      },
      loadingMore: function loadingMore() {
        return "Caricando più risultati…";
      },
      maximumSelected: function maximumSelected(e) {
        var n = "Puoi selezionare solo " + e.maximum + " element";
        return 1 !== e.maximum ? n += "i" : n += "o", n;
      },
      noResults: function noResults() {
        return "Nessun risultato trovato";
      },
      searching: function searching() {
        return "Sto cercando…";
      },
      removeAllItems: function removeAllItems() {
        return "Rimuovi tutti gli oggetti";
      }
    };
  }), e.define, e.require;
}();