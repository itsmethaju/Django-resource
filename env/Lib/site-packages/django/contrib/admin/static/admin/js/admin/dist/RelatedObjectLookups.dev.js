/*global SelectBox, interpolate*/
// Handles related-objects functionality: lookup link for raw_id_fields
// and Add Another links.
'use strict';

{
  var dismissChildPopups = function dismissChildPopups() {
    relatedWindows.forEach(function (win) {
      if (!win.closed) {
        win.dismissChildPopups();
        win.close();
      }
    });
  };

  var setPopupIndex = function setPopupIndex() {
    if (document.getElementsByName("_popup").length > 0) {
      var index = window.name.lastIndexOf("__") + 2;
      popupIndex = parseInt(window.name.substring(index));
    } else {
      popupIndex = 0;
    }
  };

  var addPopupIndex = function addPopupIndex(name) {
    name = name + "__" + (popupIndex + 1);
    return name;
  };

  var removePopupIndex = function removePopupIndex(name) {
    name = name.replace(new RegExp("__" + (popupIndex + 1) + "$"), '');
    return name;
  };

  var showAdminPopup = function showAdminPopup(triggeringLink, name_regexp, add_popup) {
    var name = addPopupIndex(triggeringLink.id.replace(name_regexp, ''));
    var href = new URL(triggeringLink.href);

    if (add_popup) {
      href.searchParams.set('_popup', 1);
    }

    var win = window.open(href, name, 'height=500,width=800,resizable=yes,scrollbars=yes');
    relatedWindows.push(win);
    win.focus();
    return false;
  };

  var showRelatedObjectLookupPopup = function showRelatedObjectLookupPopup(triggeringLink) {
    return showAdminPopup(triggeringLink, /^lookup_/, true);
  };

  var dismissRelatedLookupPopup = function dismissRelatedLookupPopup(win, chosenId) {
    var name = removePopupIndex(win.name);
    var elem = document.getElementById(name);

    if (elem.classList.contains('vManyToManyRawIdAdminField') && elem.value) {
      elem.value += ',' + chosenId;
    } else {
      document.getElementById(name).value = chosenId;
    }

    var index = relatedWindows.indexOf(win);

    if (index > -1) {
      relatedWindows.splice(index, 1);
    }

    win.close();
  };

  var showRelatedObjectPopup = function showRelatedObjectPopup(triggeringLink) {
    return showAdminPopup(triggeringLink, /^(change|add|delete)_/, false);
  };

  var updateRelatedObjectLinks = function updateRelatedObjectLinks(triggeringLink) {
    var $this = $(triggeringLink);
    var siblings = $this.nextAll('.view-related, .change-related, .delete-related');

    if (!siblings.length) {
      return;
    }

    var value = $this.val();

    if (value) {
      siblings.each(function () {
        var elm = $(this);
        elm.attr('href', elm.attr('data-href-template').replace('__fk__', value));
      });
    } else {
      siblings.removeAttr('href');
    }
  };

  var updateRelatedSelectsOptions = function updateRelatedSelectsOptions(currentSelect, win, objId, newRepr, newId) {
    // After create/edit a model from the options next to the current
    // select (+ or :pencil:) update ForeignKey PK of the rest of selects
    // in the page.
    var path = win.location.pathname; // Extract the model from the popup url '.../<model>/add/' or
    // '.../<model>/<id>/change/' depending the action (add or change).

    var modelName = path.split('/')[path.split('/').length - (objId ? 4 : 3)]; // Exclude autocomplete selects.

    var selectsRelated = document.querySelectorAll("[data-model-ref=\"".concat(modelName, "\"] select:not(.admin-autocomplete)"));
    selectsRelated.forEach(function (select) {
      if (currentSelect === select) {
        return;
      }

      var option = select.querySelector("option[value=\"".concat(objId, "\"]"));

      if (!option) {
        option = new Option(newRepr, newId);
        select.options.add(option);
        return;
      }

      option.textContent = newRepr;
      option.value = newId;
    });
  };

  var dismissAddRelatedObjectPopup = function dismissAddRelatedObjectPopup(win, newId, newRepr) {
    var name = removePopupIndex(win.name);
    var elem = document.getElementById(name);

    if (elem) {
      var elemName = elem.nodeName.toUpperCase();

      if (elemName === 'SELECT') {
        elem.options[elem.options.length] = new Option(newRepr, newId, true, true);
        updateRelatedSelectsOptions(elem, win, null, newRepr, newId);
      } else if (elemName === 'INPUT') {
        if (elem.classList.contains('vManyToManyRawIdAdminField') && elem.value) {
          elem.value += ',' + newId;
        } else {
          elem.value = newId;
        }
      } // Trigger a change event to update related links if required.


      $(elem).trigger('change');
    } else {
      var toId = name + "_to";
      var o = new Option(newRepr, newId);
      SelectBox.add_to_cache(toId, o);
      SelectBox.redisplay(toId);
    }

    var index = relatedWindows.indexOf(win);

    if (index > -1) {
      relatedWindows.splice(index, 1);
    }

    win.close();
  };

  var dismissChangeRelatedObjectPopup = function dismissChangeRelatedObjectPopup(win, objId, newRepr, newId) {
    var id = removePopupIndex(win.name.replace(/^edit_/, ''));
    var selectsSelector = interpolate('#%s, #%s_from, #%s_to', [id, id, id]);
    var selects = $(selectsSelector);
    selects.find('option').each(function () {
      if (this.value === objId) {
        this.textContent = newRepr;
        this.value = newId;
      }
    }).trigger('change');
    updateRelatedSelectsOptions(selects[0], win, objId, newRepr, newId);
    selects.next().find('.select2-selection__rendered').each(function () {
      // The element can have a clear button as a child.
      // Use the lastChild to modify only the displayed value.
      this.lastChild.textContent = newRepr;
      this.title = newRepr;
    });
    var index = relatedWindows.indexOf(win);

    if (index > -1) {
      relatedWindows.splice(index, 1);
    }

    win.close();
  };

  var dismissDeleteRelatedObjectPopup = function dismissDeleteRelatedObjectPopup(win, objId) {
    var id = removePopupIndex(win.name.replace(/^delete_/, ''));
    var selectsSelector = interpolate('#%s, #%s_from, #%s_to', [id, id, id]);
    var selects = $(selectsSelector);
    selects.find('option').each(function () {
      if (this.value === objId) {
        $(this).remove();
      }
    }).trigger('change');
    var index = relatedWindows.indexOf(win);

    if (index > -1) {
      relatedWindows.splice(index, 1);
    }

    win.close();
  };

  var $ = django.jQuery;
  var popupIndex = 0;
  var relatedWindows = [];
  window.showRelatedObjectLookupPopup = showRelatedObjectLookupPopup;
  window.dismissRelatedLookupPopup = dismissRelatedLookupPopup;
  window.showRelatedObjectPopup = showRelatedObjectPopup;
  window.updateRelatedObjectLinks = updateRelatedObjectLinks;
  window.dismissAddRelatedObjectPopup = dismissAddRelatedObjectPopup;
  window.dismissChangeRelatedObjectPopup = dismissChangeRelatedObjectPopup;
  window.dismissDeleteRelatedObjectPopup = dismissDeleteRelatedObjectPopup;
  window.dismissChildPopups = dismissChildPopups; // Kept for backward compatibility

  window.showAddAnotherPopup = showRelatedObjectPopup;
  window.dismissAddAnotherPopup = dismissAddRelatedObjectPopup;
  window.addEventListener('unload', function (evt) {
    window.dismissChildPopups();
  });
  $(document).ready(function () {
    setPopupIndex();
    $("a[data-popup-opener]").on('click', function (event) {
      event.preventDefault();
      opener.dismissRelatedLookupPopup(window, $(this).data("popup-opener"));
    });
    $('body').on('click', '.related-widget-wrapper-link[data-popup="yes"]', function (e) {
      e.preventDefault();

      if (this.href) {
        var event = $.Event('django:show-related', {
          href: this.href
        });
        $(this).trigger(event);

        if (!event.isDefaultPrevented()) {
          showRelatedObjectPopup(this);
        }
      }
    });
    $('body').on('change', '.related-widget-wrapper select', function (e) {
      var event = $.Event('django:update-related');
      $(this).trigger(event);

      if (!event.isDefaultPrevented()) {
        updateRelatedObjectLinks(this);
      }
    });
    $('.related-widget-wrapper select').trigger('change');
    $('body').on('click', '.related-lookup', function (e) {
      e.preventDefault();
      var event = $.Event('django:lookup-related');
      $(this).trigger(event);

      if (!event.isDefaultPrevented()) {
        showRelatedObjectLookupPopup(this);
      }
    });
  });
}