const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

async function apiFetch(){
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error (await response.text());
        } 
    }
    catch (error) {
            console.log(error);
    }
}
apiFetch();

async function getFlavorData() {
    const response = await fetch(url)
    const data = await response.json();
    displayData(data.flavors);
}
getFlavorData();

const displayData = (url) => {
    const flavors = document.querySelector('options')

    url.forEach((flavor) => {

        let info = document.createElement('section');
        let h3 = document.createElement('h3');
        let name = document.createElement('p');
        let genus = document.createElement('p');
        let family = document.createElement('p');

        h3.textContent = `${flavor.name}`;
        name.textContent = `Name: ${flavor.name}`;
        genus.textContent = `Genus: ${flavor.genus}`;
        family.textContent = `Family: ${flavor.family}`;

        info.appendChild(h3);
        info.appendChild(name);
        info.appendChild(genus);
        info.appendChild(family);

        flavors.appendChild(info);
    }
    
)};
displayData();



