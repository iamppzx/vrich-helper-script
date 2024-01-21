// ==UserScript==
// @name         [WORKED]enter to save vrich
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  try to take over the world!
// @author       ppzx
// @match        https://*.vrich619.com/sale
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vrich619.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to trigger the Save button click
    function triggerSaveButtonClick() {
        const saveButton = document.getElementById('save-product');
        if (saveButton) {
            saveButton.click();
        }
    }

    // Function to trigger the Delete button click
    function triggerDeleteButtonClick() {
        const deleteButton = document.getElementById('del-product');
        if (deleteButton) {
            deleteButton.click();
        }
    }

    // Attach event listener to keyboard keys
    document.addEventListener('keydown', function(event) {
        const modal = document.getElementById('modal-edit-product');
        if (modal && modal.style.display === 'block') {
            if (event.key === 'Enter') {
                triggerSaveButtonClick();
            } else if (event.key === 'Delete') {
                triggerDeleteButtonClick();
            }
        }
    });
})();
