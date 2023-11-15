const baseURL = "https://andrewjhalisky.github.io/wdd230/";
const linksURL = "https://andrewjhalisky.github.io/wdd230/data/links.json";
const cards = document.querySelector('#cards');

const displayLinks = lessons => {
    lessons.forEach(lesson => {
        let linksection = document.createElement('section');
        let list = document.createElement('li');    
        linksection.appendChild(list);
        lesson.links.forEach(link => {
            let webLink = document.createElement('a');
            webLink.textContent = `${link.title} | `;
            linksection.appendChild(webLink);
            webLink.setAttribute("href", link.url);
        });
        cards.appendChild(linksection);
        list.textContent = `Lesson ${lesson.lesson}: `;
    });
}

async function getLinks(){
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
};
getLinks();