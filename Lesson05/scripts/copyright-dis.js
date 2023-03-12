function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
}

const mainnav = document.querySelector('.primaryNav');
const hambutton = document.querySelector('#menu');

document.write("Last modified on" + " " +document.lastModified);
hambutton.addEventListener('click', () => {mainnav.classList.toggle('open')}, false);
 
const currentDate = new Date();

const fulldate = new Intl.DateTimeFormat("en-UK", {
    dateStyle: "full"
}).format(currentDate);

const visitsDisplay = document.querySelector("#visits")

let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !=0){
    visitsDisplay.textContent = numVisits;
    } else {
    visitsDisplay.textContent = `This is your first visit!`;
}
numVisits++
localStorage.setItem("visits-ls", numVisits)
todayDisplay.textContent = Date.now();

document.querySelector('#date').textContent = fulldate;
document.querySelector('#year').textContent = currentDate.getFullYear();