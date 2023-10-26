document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = new Date(document.lastModified);

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation')
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const visitsDisplay = document.querySelector('.visits');

// getItem loads the data or the times the user visited the website.
// setItem saves the data or the times the user visited the website.
let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
}
else {
    visitsDisplay.textContent = `Welcome! This is your first time visiting the home page.`;
}
// ++ increases the number of times the website was visited.
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);
