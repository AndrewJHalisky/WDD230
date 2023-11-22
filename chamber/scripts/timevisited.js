// milliseconds to days
const visitsDisplay = document.querySelector('#days');
const msToDays = 84600000;

// display elements
let lastVisit = localStorage.getItem("lastVisit");
let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

// processing
if (lastVisit != 0) {
    let timeBetween = Math.floor((Date.now() - lastVisit) / msToDays);
    console.log(timeBetween);
    if (timeBetween < 1) {
        visitsDisplay.innerHTML = `Back so soon! Awesome!`
    }
    else {
        visitsDisplay.innerHTML = `You last visited this page ${timeBetween} day(s) ago.`
    }
}
else {
    visitsDisplay.innerHTML = `Welcome! Let us know if you have any questions.`
}
localStorage.setItem('lastVisit', Date.now());