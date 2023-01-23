/**
 *  This was created by GhostWeb Design company
 *  All rights reserved.
 */


/**
 * Start global variables
 */
const form = document.querySelector('.form');
const darkBtn = document.getElementById('dark-night-btn');
const darkBtnImg = document.getElementById('dark-night-btn-img');

// Fot test only
console.log(form);
console.log(darkBtn);
console.log(darkBtnImg);




/**
 * End global variables
 */


/**
 * Start helper functions
 */
function darkMode() {
    form.classList.remove('light');
    form.classList.add('dark');
    
    darkBtn.classList.remove('light');
    darkBtn.classList.add('dark');
    darkBtn.classList.add('invert');
    
    darkBtnImg.classList.add('rotate');

    
}





/**
 * End helper functions
 */









/**
 * End of script
 */