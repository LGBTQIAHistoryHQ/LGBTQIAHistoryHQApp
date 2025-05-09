/* Adding service worker */

window.addEventListener('load', () => { 
        registerSW();
        refreshDisplay();
    }
)

async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('../sw.js');
            console.log("Yayyyy! SW registarted");
        } catch (e) {
            console.error("Error Name:", e.name); // Returns the name of the error (e.g., "Error", "TypeError")
            console.error("Error Message:", e.message); // Returns the error message
            console.error("Error Stack:", e.stack); // Returns the stack trace, if available
        }
      }
}

/* Checking if lessons have been begun */
var AIDSActivism = document.getElementById("AIDSActivism");
var progressTracker = document.getElementById("PT3");
var lessonsBegun = [];
reset();

AIDSActivism.onclick = function(){
    /* Updating lessonsBegun */
    updateLessonsBegun();
    lessonsBegun[3] = true;
    localStorage.setItem("begun", JSON.stringify(lessonsBegun));
    refreshDisplay();
}

function refreshDisplay() {
    updateLessonsBegun();

    for (let i = 0; i < lessonsBegun.length; i++) {
        if (lessonsBegun[i] === true) {
            progressTracker.innerHTML = "Begun";
        }
    }
}

function updateLessonsBegun() {
    if(localStorage.getItem("begun") === null) {
        console.log("lessonsBegun = null");
        lessonsBegun = [false, false, false, false, false];
        localStorage.setItem("begun", JSON.stringify(lessonsBegun));
    }
    else {
        lessonsBegun = JSON.parse(localStorage.getItem("begun"));
    }
    console.log(lessonsBegun);
}

function reset() {
    localStorage.clear();
}