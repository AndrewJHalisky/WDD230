let temp = parseFloat(document.querySelector('#temp').textContent);
let wSpeed = parseFloat(document.querySelector('#wSpeed').textContent);
document.getElementById("temp").innerHTML = temp;
document.getElementById("windChill").innerHTML = windChill;

if (temp <= 50, wSpeed > 3) {
    let windChill = (35.7 + (0.6215 * temp)) - (35.75 * Math.pow(wSpeed, 0.16)) + (0.4275 * temp * Math.pow(wSpeed, 0.16));
    let num = windChill
    let rnd = num.toFixed(1)
    document.querySelector("#windChill").innerHTML = rnd;
}
else {
    windChill = "N/A";
}