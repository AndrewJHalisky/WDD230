const today = new Date();

let weekDay = today.getDay();
if (weekDay != 0 && weekDay <= 3) {
    document.querySelector(".events").style.display = "block";
    document.querySelector(".no-events").style.display = "none";
}
else {
    document.querySelector(".events").style.display = "none";
    document.querySelector(".no-events").style.display = "block";
}