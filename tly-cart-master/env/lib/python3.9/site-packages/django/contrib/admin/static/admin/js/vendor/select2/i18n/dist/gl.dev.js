"use strict";

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;
  e.define("select2/i18n/gl", [], function () {
    return {
      errorLoading: function errorLoading() {
        return "Non foi posíbel cargar os resultados.";
      },
      inputTooLong: function inputTooLong(e) {
        var n = e.input.length - e.maximum;
        return 1 === n ? "Elimine un carácter" : "Elimine " + n + " caracteres";
      },
      inputTooShort: function inputTooShort(e) {
        var n = e.minimum - e.input.length;
        return 1 === n ? "Engada un carácter" : "Engada " + n + " caracteres";
      },
      loadingMore: function loadingMore() {
        return "Cargando máis resultados…";
      },
      maximumSelected: function maximumSelected(e) {
        return 1 === e.maximum ? "Só pode seleccionar un elemento" : "Só pode seleccionar " + e.maximum + " elementos";
      },
      noResults: function noResults() {
        return "Non se atoparon resultados";
      },
      searching: function searching() {
        return "Buscando…";
      },
      removeAllItems: function removeAllItems() {
        return "Elimina todos os elementos";
      }
    };
  }), e.define, e.require;
}();