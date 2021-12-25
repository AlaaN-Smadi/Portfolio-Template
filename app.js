'use strict';


//  Get bar elements 
let slideBarState = false
let btn = document.getElementById('bar_btn');
let bar = document.getElementById('bar');
let shownIcon = document.getElementById('show');
let hiddenIcon = document.getElementById('hide');


btn.addEventListener('click', showBar)

// function to apply effects to slide bar
function showBar() {
    slideBarState = !slideBarState
    if (slideBarState) {
        bar.style.left = "0";
        bar.style.animationName = "bar_Slide_Show";
        bar.style.animationDuration = "1s";
        shownIcon.style.display = "none";
        hiddenIcon.style.display = "block";
    } else {
        bar.style.animationName = "bar_Slide_Hide";
        bar.style.animationDuration = "1s";
        bar.style.left = "-350px";
        hiddenIcon.style.display = "none";
        shownIcon.style.display = "block";
    }
}


