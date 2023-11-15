const baseURL = "https://andrewjhalisky.github.io/wdd230/";
const linksURL = "https://andrewjhalisky.github.io/wdd230/data/links.json";
const cards = document.querySelector('#cards');

const displayLinks = lessons => {
    lessons.forEach(lesson => {
        let linksection = document.createElement('section');

        lesson.links.forEach(link => {
            let list = document.createElement('li');
            let title = document.createElement('p');
            let webLink = document.createElement('a');
            title.textContent = `${link.title}: `;
            webLink.textContent = `${link.url}`;
            linksection.appendChild(title);
            linksection.appendChild(webLink);
            linksection.appendChild(list);
        });
        cards.appendChild(linksection);
    });
}

async function getLinks(){
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
};
getLinks();