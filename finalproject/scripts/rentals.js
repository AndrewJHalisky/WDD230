const url = "https://andrewjhalisky.github.io/wdd230/finalproject/data/prices.json";
const chartPrices = document.querySelector(".chart");

async function getRentals() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json(); 
            let title1 = document.createElement("td");
            let capacity1 = document.createElement("td");
            let halfdayres1 = document.createElement("td");
            let fulldayres1 = document.createElement("td");
            let halfdaywkin1 = document.createElement("td");
            let fulldaywkin1 = document.createElement("td");
    
            title1.textContent = `${data.pricing[0].type}`;
            capacity1.textContent = `${data.pricing[0].capacity}`;
            halfdayres1.textContent = `${data.pricing[0].reservation.halfday}`;
            fulldayres1.textContent = `${data.pricing[0].reservation.fullday}`;
            halfdaywkin1.textContent = `${data.pricing[0].walkin.halfday}`;
            fulldaywkin1.textContent = `${data.pricing[0].walkin.fullday}`;
            
            chartPrices.appendChild(data.title1);
            chartPrices.appendChild(data.capacity1);
            chartPrices.appendChild(data.halfdayres1);
            chartPrices.appendChild(data.fulldayres1);
            chartPrices.appendChild(data.halfdaywkin1);
            chartPrices.appendChild(data.fulldaywkin1);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error){
        console.log(error);
    }
}
getRentals();

// const displayRentals = pricing => {
//     pricing.forEach(prices => {
//         let title1 = document.createElement("td");
//         let capacity1 = document.createElement("td");
//         let halfdayres1 = document.createElement("td");
//         let fulldayres1 = document.createElement("td");
//         let halfdaywkin1 = document.createElement("td");
//         let fulldaywkin1 = document.createElement("td");

//         title1.textContent = `${pricing.type}`;
//         capacity1.textContent = `${pricing.capacity}`;
//         halfdayres1.textContent = `${pricing.reservation.halfday}`;
//         fulldayres1.textContent = `${pricing.reservation.fullday}`;
//         halfdaywkin1.textContent = `${pricing.walkin.halfday}`;
//         fulldaywkin1.textContent = `${pricing.walkin.fullday}`;
        
//         chartPrices.appendChild(prices.title1);
//         chartPrices.appendChild(prices.capacity1);
//         chartPrices.appendChild(prices.halfdayres1);
//         chartPrices.appendChild(prices.fulldayres1);
//         chartPrices.appendChild(prices.halfdaywkin1);
//         chartPrices.appendChild(prices.fulldaywkin1);
//     });
// }