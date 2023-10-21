var temp = 60
var wSpeed = 17

if (temp <= 50, wSpeed > 3) {
    var windChill = (35.7 + (0.6215 * temp)) - (35.75 * Math.pow(wSpeed, 0.16)) + (0.4275 * temp * Math.pow(wSpeed, 0.16));
    var windChill = Math.round(windChill);
    document.getElementById("temp").innerHTML = temp;
    document.getElementById("windChill").innerHTML = windChill;
}

else {
    console.log("N/A");
}