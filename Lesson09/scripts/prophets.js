const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url)
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}
getProphetData(); 
const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards');

    prophets.forEach((prophet) => {
    
        let card =  document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthday = document.createElement('p');
        let birthplace = document.createElement('p');

        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        birthday.textContent = `Birthdate: ${prophet.birthdate}`;
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} `);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340'); 
        portrait.setAttribute('height', '440');

        card.appendChild(h2);
        card.appendChild(portrait);
        card.appendChild(birthday);
        card.appendChild(birthplace);

        cards.appendChild(card);
    }
)}
