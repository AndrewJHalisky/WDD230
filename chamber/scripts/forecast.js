const forecasturl = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.17921&lon=-75.04345&&units=imperial&exclude=daily&appid=b53e334657077c85a2b7c51973b22f75';

async function forecastFetch(){
    try{
        const response = await fetch(forecasturl);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data.forecastList);
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

const displayForecast = forecastList => {
    const cards = document.querySelector(".3day-forecast");
    forecastList.forEach(forecast => {

        let card = document.createElement('section');
        let date = document.createElement('p');
        let dayTemp = document.createElement('p');
        let dayDesc = document.createElement('p');
        date.textContent = `${forecast.list.main.date}`;
        dayTemp.textContent = `${forecast.list.main.temp}`;
        dayDesc.textContent = `${forecast.list.weather.description}`
        card.appendChild(date);
        card.appendChild(dayTemp);
        card.appendChild(dayDesc);
        cards.appendChild(card);
    });
}