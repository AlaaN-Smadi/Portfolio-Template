'use strict';



//  Get bar elements 
let slideBarState = false
let btn = document.getElementById('bar_btn');
let bar = document.getElementById('bar');
let shownIcon = document.getElementById('show');
let hiddenIcon = document.getElementById('hide');


btn.addEventListener('click', showBar)

// function to apply effects to slide bar and button 
function showBar() {
    slideBarState = !slideBarState
    if (slideBarState) {
        bar.style.left = "0";
        bar.style.animationName = "bar_Slide_Show";
        bar.style.animationDuration = "1s";

        btn.style.left = "300px";
        btn.style.animationName = "btn_Slide_Show";
        btn.style.animationDuration = "1s";
        shownIcon.style.display = "none";
        hiddenIcon.style.display = "block";
    } else {
        bar.style.animationName = "bar_Slide_Hide";
        bar.style.animationDuration = "1s";
        bar.style.left = "-300px";

        btn.style.animationName = "btn_Slide_Hide";
        btn.style.animationDuration = "1s";
        btn.style.left = "0";

        hiddenIcon.style.display = "none";
        shownIcon.style.display = "block";
    }
}


// Render Bar Data 
let feild_Ele = document.getElementsByClassName('head_OF_Feilds');
let bar_Ele = document.getElementsByClassName('bar_Ele');

for(let i=0;i<bar_Ele.length;i++){
    let bar_Items = document.createElement('div');
    bar_Items.setAttribute('class', 'bar_Items');

    let aTag = document.createElement('a');
    aTag.setAttribute('href', `#${bar_Ele[i].id}`)
    aTag.textContent = feild_Ele[i].innerHTML;
    bar_Items.appendChild(aTag);

    bar.appendChild(bar_Items);
}
