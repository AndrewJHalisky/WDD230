document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = new Date(document.lastModified)

// Date:
const date = new Date();
let day = date.getDate();
let month = date.toLocaleString('default', {month: 'short'});
let year = date.getFullYear();
let currentDate = `${month} ${day}, ${year}`;
// Time:
let hours = date.getHours();
let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
let newformat = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
let currentTime = `${hours}:${minutes} ${newformat}`

// milliseconds to days
const visitsDisplay = document.querySelector('#days');
const msToDays = 84600000;

// display elements
let today = Date.now();
let lastVisit = localStorage.getItem("lastVisit");
let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

// processing
if (lastVisit) {
    let timeBetween = Math.floor((today - lastVisit) / (1000 * 60 * 60 * 24));
    visitsDisplay.innerHTML = `You last visited this page ${timeBetween} day(s) ago.`
} 
else if (today) {
    visitsDisplay.innerHTML = `Back so soon! Awesome!`
}
else {
    visitsDisplay.innerHTML = `Welcome! Let us know if you have any questions.`
}
localStorage.setItem('lastVisit', today);

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const modeButton = document.querySelector('#mode');
const body = document.querySelector('body');
const main = document.querySelector('main');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

modeButton.addEventListener("click", function() {
    if (modeButton.textContent.includes("🌛")) {
        body.style.background = "#000";
        footer.style.background = "#000";
        header.style.color = "#fff";
        footer.style.color = "#fff"
        modeButton.textContent = "🌞";
    }
    else {
        body.style.background = "#fff";
        footer.style.background = "#fff";
        header.style.color = "#000";
        main.style.color = "#000";
        footer.style.color = "#000";
        modeButton.textContent = "🌛";
    }
});