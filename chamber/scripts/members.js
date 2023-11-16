const url = "https://andrewjhalisky.github.io/wdd230/chamber/data/members.json";
const gridbutton = document.querySelector(".grid");
const listbutton = document.querySelector(".list");
const display = document.querySelector(".members");

async function getBusinesses() {
    const response = await fetch(url);
    const data = await response.json();
    displayLinks(data.businesses);
};
getBusinesses();

const displayLinks = businesses => {
    businesses.forEach(business => {
        let card = document.createElement('section');
        let busiTitle = document.createElement('h3');
        let website = document.createElement('a');
        let info = document.createElement('p');
        let membLevel = document.createElement('p');
        let desc = document.createElement('p');
        let image = document.createElement('img');

        busiTitle.textContent = `${business.name}`;
        image.setAttribute('src', business.imageurl);
        image.setAttribute('alt', `${busiTitle}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '260');
        image.setAttribute('height', '240');
        website.textContent = `${business.websiteurl}`;
        info.textContent = `${business.address} ${business.phonenumber}`;
        membLevel.textContent = `${business.membershiplevel}`;
        desc.textContent = `${business.description}`;

        card.appendChild(busiTitle);
        card.appendChild(image);
        card.appendChild(website);
        card.appendChild(info);
        card.appendChild(membLevel);
        card.appendChild(desc);
        display.appendChild(card);
    });

    // What I should get:
    gridbutton.addEventListener("click", () => {
        display.classList.add("grid");
        display.classList.remove("list");
    });

    listbutton.addEventListener("click", showList);

    function showList() {
        display.classList.add("list");
        display.classList.remove("grid");
    };
    // Keeps saying cannot display properties of null
}