document.write("Last modified on" + " " +document.lastModified);

const currentDate = new Date();

const fulldate = new Intl.DateTimeFormat("en-UK", {
    dateStyle: "full"
}).format(currentDate);

document.querySelector('#date').textContent = fulldate;
document.querySelector('#year').textContent = currentDate.getFullYear();