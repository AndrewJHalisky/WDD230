const url = "https://andrewjhalisky.github.io/wdd230/chamber/data/members.json"

const displayLinks = (businesses) => {
    businesses.forEach((business))
}

async function getLinks(){
    const response = await fetch(url);
    const data = await response.json();
    displayLinks(data.lessons);
};
getLinks();