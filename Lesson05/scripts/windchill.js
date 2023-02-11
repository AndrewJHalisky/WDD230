let windspeed = 7
let temperature = 46

if (temperature <= 50 && windspeed >= 3){
    let windchill = 35.74 + (0.6215 * temperature) - (35.75 * (windspeed**0.16)) + (0.4275 * temperature*(windspeed**0.16))
    console.log(windchill);
    document.querySelector("#current-weather").textContent=windchill.toFixed(0);
};

document.querySelector('#speed').textContent = windspeed;
document.querySelector('#temp').textContent = temperature;