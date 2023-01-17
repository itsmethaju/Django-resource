"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;
  e.define("select2/i18n/ca", [], function () {
    return {
      errorLoading: function errorLoading() {
        return "La càrrega ha fallat";
      },
      inputTooLong: function inputTooLong(e) {
        var n = e.input.length - e.maximum,
            r = "Si us plau, elimina " + n + " car";
        return r += 1 == n ? "àcter" : "àcters";
      },
      inputTooShort: function inputTooShort(e) {
        var n = e.minimum - e.input.length,
            r = "Si us plau, introdueix " + n + " car";
        return r += 1 == n ? "àcter" : "àcters";
      },
      loadingMore: function loadingMore() {
        return "Carregant més resultats…";
      },
      maximumSelected: function maximumSelected(e) {
        var n = "Només es pot seleccionar " + e.maximum + " element";
        return 1 != e.maximum && (n += "s"), n;
      },
      noResults: function noResults() {
        return "No s'han trobat resultats";
      },
      searching: function searching() {
        return "Cercant…";
      },
      removeAllItems: function removeAllItems() {
        return "Treu tots els elements";
      }
    };
  }), e.define, e.require;
}();