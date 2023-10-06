// ==UserScript==
// @name         [WORKED]enter to save vrich
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://mamymui.vrich619.com/sale
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

    // Attach event listener to Enter key
    document.addEventListener('keydown', function(event) {
        // Check if the Enter key is pressed
        if (event.key === 'Enter') {
            const modal = document.getElementById('modal-edit-product');
            if (modal && modal.style.display === 'block') {
                triggerSaveButtonClick();
            }
        }
    });
})();
