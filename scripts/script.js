
window.addEventListener('load', () => { 
        registerSW();
    }
)

async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('../sw.js');
            console.log("Yayyyy! SW registarted");
        } catch (e) {
            console.log("SW registration failed");
        }
      }
}