/**
 *  This was created by GhostWeb Design company
 *  All rights reserved.
 */


/**
 * Start global variables
 */
const form = document.querySelector('.form');
const darkBtn = document.getElementById('dark-night-btn');
const dayBtn = document.getElementById('day-night-btn');
const darkBtnImg = document.getElementById('dark-night-btn-img');
const signBox = document.querySelectorAll('.sign-box p');

// For local-storage
const darkLocal = localStorage.getItem('dark');


// Fot test only
// console.log(form);
// console.log(darkBtn);
// console.log(darkBtnImg);

/**
 * End global variables
 */


/**
 * Start helper functions
 */

// Start check for the last status from local storage of the user
if (darkLocal !== 'enabled') {
    dayMode();
} else {
    darkMode();
};


// helper functions day-night switcher
function darkMode() {
    localStorage.setItem('dark', 'enabled');
    
    form.classList.remove('light');
    form.classList.add('dark');

    dayBtn.style.display = 'block';
    darkBtn.style.display  = 'none';


    signBox.forEach((p) => {
        p.classList.remove('light');
        p.classList.add('dark');
    });

    dayBtn.classList.remove('light');
    dayBtn.classList.add('dark');
    dayBtn.classList.add('invert');
}
function dayMode() {
    localStorage.setItem('dark', null);

    form.classList.remove('dark');
    form.classList.add('light');

    darkBtn.style.display = 'block';
    dayBtn.style.display  = 'none';

    signBox.forEach((p) => {
        p.classList.remove('dark');
        p.classList.add('light');
    });
    
    dayBtn.classList.add('light');
    dayBtn.classList.remove('dark');
    dayBtn.classList.remove('invert');
}
// End day-night switcher functions
 

/**
 * End helper functions
 */






/**
 * End of script
 */