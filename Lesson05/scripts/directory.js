const url = 'https://run.mocky.io/v3/cfd126b7-72df-470b-b08b-4d80d3dee3a4';

async function getBusinessData() {
    const response = await fetch(url)
    const data = await response.json();
    displayData(data.businesses);
}

getBusinessData(); 
const displayData = (businesses) => {
    const cards = document.querySelector('div.cards');

    businesses.forEach((business) => {
    
        let card =  document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let address = document.createElement('p');
        let phonenumber = document.createElement('p');
        let description = document.createElement('p');

        h2.textContent = `${business.name}`;
        address.textContent = `Address: ${business.address}`;
        phonenumber.textContent = `Phone number: ${business.phonenumber}`;
        description.textContent = `Description: ${business.description}`;
        image.setAttribute('src', business.imageurl);
        image.setAttribute('alt', `Logo for ${business.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '250'); 
        image.setAttribute('height', '80')

        card.appendChild(h2);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phonenumber);
        card.appendChild(description);

        cards.appendChild(card);
    }
)};