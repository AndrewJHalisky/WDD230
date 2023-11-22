const today = new Date();
// Date:
let day = today.getDate();
let month = today.toLocaleString('default', { month: 'short' });
let year = today.getFullYear();
let currentDate = `${month} ${day}, ${year}`;
// Time:
let hours = today.getHours();
let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
let newformat = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
let currentTime = `${hours}:${minutes} ${newformat}`;

const displayDate = document.querySelector('#date');
const displayTime = document.querySelector('#time');
displayDate.innerHTML = currentDate;
displayTime.innerHTML = currentTime;