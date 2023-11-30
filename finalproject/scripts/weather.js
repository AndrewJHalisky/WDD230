const todayTemp = document.querySelector('#todays-temp');
const tomorrowTemp = document.querySelector('#tmrw-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('figcaption');
const weatherurl = 'https://api.openweathermap.org/data/2.5/weather?lat=20.50812&lon=-86.92639&&units=imperial&exclude=daily&appid=1e5248c4357544a8ca14d4fb042af5e5';
const forecasturl = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.50812&lon=-86.92639&&units=imperial&exclude=daily&appid=1e5248c4357544a8ca14d4fb042af5e5'

async function weatherFetch(){
    try {
        const response = await fetch(weatherurl);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        }
        else{
            throw Error(await response.text());
        }
    }
    catch (error){
        console.log(error);
    }
}
weatherFetch();

function displayWeather(data) {
    todayTemp.innerHTML = `${data.main.temp} &deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description.toUpperCase();
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherDesc.textContent = (desc);
}