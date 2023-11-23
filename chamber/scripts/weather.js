const currentTemp = document.querySelector('#current-temp');
const futureTemp = document.querySelector('#future-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const weatherurl = 'https://api.openweathermap.org/data/2.5/weather?lat=40.17921&lon=-75.04345&&units=imperial&exclude=daily&appid=b53e334657077c85a2b7c51973b22f75';
const forecasturl = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.17921&lon=-75.04345&&units=imperial&exclude=daily&appid=b53e334657077c85a2b7c51973b22f75';
const dayTime = document.querySelector('.days');

async function weatherFetch() {
    try {
        const response = await fetch(weatherurl);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        }
        else {
            throw Error(await response.text())
        }
    }
    catch (error) {
        console.log(error);
    }
}
weatherFetch();

async function forecastFetch() {
    try {
        const response = await fetch(forecasturl)
        const data = await response.json();
        if (response.ok) {
            let date1 = document.createElement('p');
            let desc1 = document.createElement('p');
            let temp1 = document.createElement('p');
            let space1 = document.createElement('p');
            date1.textContent = `Nov ${data.list[3].dt_txt.slice(8, 10)}`;
            desc1.textContent = `${data.list[3].weather[0].description}`;
            temp1.textContent = `${data.list[3].main.temp} F`;
            space1.textContent = `=================`;
            dayTime.appendChild(date1);
            dayTime.appendChild(temp1);
            dayTime.appendChild(desc1);
            dayTime.appendChild(space1);

            let date2 = document.createElement('p');
            let desc2 = document.createElement('p');
            let temp2 = document.createElement('p');
            let space2 = document.createElement('p');
            date2.textContent = `Nov ${data.list[11].dt_txt.slice(8, 10)}`;
            desc2.textContent = `${data.list[11].weather[0].description}`;
            temp2.textContent = `${data.list[11].main.temp} F`;
            space2.textContent = `=================`;
            dayTime.appendChild(date2);
            dayTime.appendChild(temp2);
            dayTime.appendChild(desc2);
            dayTime.appendChild(space2);

            let date3 = document.createElement('p');
            let desc3 = document.createElement('p');
            let temp3 = document.createElement('p');
            date3.textContent = `Nov ${data.list[19].dt_txt.slice(8, 10)}`;
            desc3.textContent = `${data.list[19].weather[0].description}`;
            temp3.textContent = `${data.list[19].main.temp} F`;
            dayTime.appendChild(date3);
            dayTime.appendChild(temp3);
            dayTime.appendChild(desc3);
        }
        else {
            throw Error(await response.text())
        }
    }
    catch (error) {
        console.log(error);
    }
}
forecastFetch();


function displayWeather(data) {
    currentTemp.innerHTML = `${data.main.temp} &deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description.toUpperCase();
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = (desc);
}