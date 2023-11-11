const baseURL = "https://github.com/AndrewJHalisky.github.io/wdd230/";
const linksURL = "https://github.com/AndrewJHalisky.github.io/wdd230/data/links.json";

async function getLinks(){
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
};
getLinks();

const displayLinks = (data) => {
    
}