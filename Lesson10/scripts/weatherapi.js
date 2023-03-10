const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'http://api.openweathermap.org/data/2.5/weather?id=5861897&&units=imperial&appid=3f3c3ffbf2f4178899941f2ab1887aa1';

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

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description.toLowerCase();
    const capDesc = desc.split("").map(word => {
        let firstLetter = word.charAt(0).toUpperCase();
        return `${firstLetter} ${word.slice(1)}`;
    }).join("");

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = (capDesc);
}