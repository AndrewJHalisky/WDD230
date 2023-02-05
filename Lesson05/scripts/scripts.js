function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
}

const mainnav = document.querySelector('.primaryNav');
const hambutton = document.querySelector('#menu');

document.write("Last modified on" + " " +document.lastModified);
hambutton.addEventListener('click', () => {mainnav.classList.toggle('open')}, false);