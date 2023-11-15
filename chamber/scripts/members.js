const url = 

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

const displayLinks = (businesses) => {
    businesses.forEach((business))
}

async function getLinks(){
    const response = await fetch(url);
    const data = await response.json();
    displayLinks(data.lessons);
};
getLinks();