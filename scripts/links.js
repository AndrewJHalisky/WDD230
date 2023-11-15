const baseURL = "https://andrewjhalisky.github.io/wdd230/";
const linksURL = "https://andrewjhalisky.github.io/wdd230/data/links.json";
const cards = document.querySelector('#cards');

const displayLinks = lessons => {
    lessons.forEach(lesson => {
        let linksection = document.createElement('section');
        let link = document.createElement('p');

        link.innerHTML = `${lesson.links}`;

        linksection.appendChild(link);
        cards.appendChild(linksection);
    });
}

async function getLinks(){
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
};
getLinks();