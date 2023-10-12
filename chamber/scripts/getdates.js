document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = new Date(document.lastModified);

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation')
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const modeButton = document.querySelector('#mode');
const body = document.querySelector('body');
const main = document.querySelector('main');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

modeButton.addEventListener("click", function () {
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