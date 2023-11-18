const url = "https://andrewjhalisky.github.io/wdd230/chamber/data/members.json";
const gridbutton = document.querySelector(".grid");
const listbutton = document.querySelector(".list");
const displaygrid = document.querySelector(".gridmembers");
const displaylist = document.querySelector(".listmembers");

async function getBusinesses() {
    const response = await fetch(url);
    const data = await response.json();
    displayLinks(data.businesses);
    displayList(data.businesses);
};
getBusinesses();

gridbutton.addEventListener("click", () => {
    displaylist.style.display = "none";
    displaygrid.style.display = "grid";
});

listbutton.addEventListener("click", () => {
    displaylist.style.display = "block";
    displaygrid.style.display = "none";
});

const displayLinks = businesses => {
    const cards = document.querySelector(".gridmembers");

    businesses.forEach(business => {
        let card = document.createElement('section');
        let busiTitle = document.createElement('h3');
        let website = document.createElement('a');
        let info = document.createElement('p');
        let membLevel = document.createElement('p');
        let space = document.createElement('br');
        let desc = document.createElement('p');
        let image = document.createElement('img');

        busiTitle.textContent = `${business.name}`;
        image.setAttribute('src', business.imageurl);
        image.setAttribute('alt', `${busiTitle}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '260');
        image.setAttribute('height', '240');
        website.textContent = `${business.websiteurl}`;
        info.textContent = `${business.address} | ${business.phonenumber}`;
        membLevel.textContent = `Membership Level: ${business.membershiplevel}`;
        desc.textContent = `${business.description}`;

        card.appendChild(busiTitle);
        card.appendChild(image);
        card.appendChild(space);
        card.appendChild(website);
        card.appendChild(info);
        card.appendChild(space);
        card.appendChild(membLevel);
        card.appendChild(space);
        card.appendChild(desc);
        cards.appendChild(card);
    });
}
const displayList = businesses => {
    const cards = document.querySelector(".listmembers");
    businesses.forEach(business => {

        let card = document.createElement('section');
        let busiTitle = document.createElement('h3');
        let listLine = document.createElement('p');
        let website = document.createElement('a');
        // let info = document.createElement('p');
        // let membLevel = document.createElement('p');
        let desc = document.createElement('p');

        busiTitle.textContent = `${business.name}`;
        website.textContent = `${business.websiteurl}`;
        // info.textContent = `${business.address} | ${business.phonenumber}`;
        // membLevel.textContent = `Membership Level: ${business.membershiplevel}`;
        listLine.textContent = `${business.address} | ${business.phonenumber} | Membership Level: ${business.membershiplevel}`;
        desc.textContent = `${business.description}`;

        card.appendChild(busiTitle);
        card.appendChild(website);
        card.appendChild(listLine);
        card.appendChild(desc);
        cards.appendChild(card);
    });
}