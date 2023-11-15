const url = "https://andrewjhalisky.github.io/wdd230/chamber/data/members.json";
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

const displayLinks = businesses => {
    businesses.forEach(business => {
        let card = document.createElement('section');
        let busiTitle = document.createElement('h3');
        let website = document.createElement('a');
        let image = document.createElement('img');
        let info = document.createElement('p');
        let membLevel = document.createElement('p');
        let desc = document.createElement('p');

        busiTitle.textContent = `${business.name}`;
        image.setAttribute('src', business.image);
        image.setAttribute('alt', busiTitle);
        image.setAttribute('loading', 'lazy');
        
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
}

async function getBusinesses() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.businesses)
    displayLinks(data.businesses);
};


getBusinesses();