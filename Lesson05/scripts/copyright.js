function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
}

const mainnav = document.querySelector('.primaryNav');
const hambutton = document.querySelector('#menu');

document.write("Last modified on" + " " +document.lastModified);
hambutton.addEventListener('click', () => {mainnav.classList.toggle('open')}, false);
 
const currentDate = new Date();

const fulldate = new Intl.DateTimeFormat("en-UK", {
    dateStyle: "full"
}).format(currentDate);

let weekDay = currentDate.getDay();
    if (weekDay !=0 && weekDay <= 3){
        document.querySelector(".event").style.display = "block";
        document.querySelector(".no-events").style.display = "none";
    }
    else {
        document.querySelector(".event").style.display = "none";
        document.querySelector(".no-events").style.display = "block";
    }
let weekDate = now.getDay();

document.querySelector('#date').textContent = fulldate;
document.querySelector('#year').textContent = currentDate.getFullYear();

// document.querySelector(".banner_close").addEventListener("click",function(){this.closest(".banner").style.display = "none";})

// if (weekDate !=0 && weekDate <=3){
//     document.querySelector(".banner").style.display = "flex";
// }