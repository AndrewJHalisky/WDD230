var
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

months[date.getMonth()]; // "February"
days[date.getDay()]; // "Saturday"

const date = new Date();

document.querySelector('#date').textContent = currentDate.getFullYear();