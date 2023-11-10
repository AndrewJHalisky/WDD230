document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;
const today = new Date();
// Date:
let day = today.getDate();
let month = today.toLocaleString('default', { month: 'short' });
let year = today.getFullYear();
let currentDate = `${month} ${day}, ${year}`;
// Time:
let hours = today.getHours();
let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
let newformat = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
let currentTime = `${hours}:${minutes} ${newformat}`;

const displayDate = document.querySelector('#date');
const displayTime = document.querySelector('#time');
displayDate.innerHTML = currentDate;
displayTime.innerHTML = currentTime;

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

document.getElementById("timestamp").value = Date();
console.log("#timestamp");