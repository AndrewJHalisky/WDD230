const futureTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.157&lon=-117.329&exclude=current,jourly,minutely,alerts&units=metric&&appid=b99d10b6ab20197160c88c598d534cb6';
async function apiFetch(){
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error (await response.text());
        }
    }
    catch (error) {
            console.log(error);
    }
}
apiFetch();

function displayResults(futureweatherData) {
    futureTemp.innerHTML = `<strong>${weatherData.list.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${futureweatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description.toLowerCase();
    const capDesc = desc.split("").map(word => {
        let firstLetter = word.charAt(0).toUpperCase();
        return `${firstLetter} ${word.slice(1)}`;
    }).join("");

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = (capDesc);
}

