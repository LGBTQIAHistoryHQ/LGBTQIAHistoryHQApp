/* Adding service worker */

window.addEventListener('load', () => { 
        registerSW();
        refreshDisplay();
    }
)

const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register(
          './../sw.js',
          {
            scope: './../',
          }
        );
        if (registration.installing) {
          console.log('Service worker installing');
        } else if (registration.waiting) {
          console.log('Service worker installed');
        } else if (registration.active) {
          console.log('Service worker active');
        }
      } catch (error) {
        console.error(`Registration failed with ${error}`);
      }
    }
  };
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