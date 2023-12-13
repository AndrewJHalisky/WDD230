const url = "https://andrewjhalisky.github.io/wdd230/finalproject/data/prices.json";
//1:
const rental1 = document.querySelector(".rental1");
const maxcap1 = document.querySelector(".maxcap1");
const halfres1 = document.querySelector(".halfres1");
const fullres1 = document.querySelector(".fullres1");
const halfwkin1 = document.querySelector(".halfwkin1");
const fullwkin1 = document.querySelector(".fullwkin1");
//2:
const rental2 = document.querySelector(".rental2");
const maxcap2 = document.querySelector(".maxcap2");
const halfres2 = document.querySelector(".halfres2");
const fullres2 = document.querySelector(".fullres2");
const halfwkin2 = document.querySelector(".halfwkin2");
const fullwkin2 = document.querySelector(".fullwkin2");
//3:
const rental3 = document.querySelector(".rental3");
const maxcap3 = document.querySelector(".maxcap3");
const halfres3 = document.querySelector(".halfres3");
const fullres3 = document.querySelector(".fullres3");
const halfwkin3 = document.querySelector(".halfwkin3");
const fullwkin3 = document.querySelector(".fullwkin3");
//4:
const rental4 = document.querySelector(".rental4");
const maxcap4 = document.querySelector(".maxcap4");
const halfres4 = document.querySelector(".halfres4");
const fullres4 = document.querySelector(".fullres4");
const halfwkin4 = document.querySelector(".halfwkin4")
const fullwkin4 = document.querySelector(".fullwkin4");
//5:
const rental5 = document.querySelector(".rental5");
const maxcap5 = document.querySelector(".maxcap5");
const halfres5 = document.querySelector(".halfres5");
const fullres5 = document.querySelector(".fullres5");
const halfwkin5 = document.querySelector(".halfwkin5");
const fullwkin5 = document.querySelector(".fullwkin5");
//6:
const rental6 = document.querySelector(".rental6");
const maxcap6 = document.querySelector(".maxcap6");
const halfres6 = document.querySelector(".halfres6");
const fullres6 = document.querySelector(".fullres6");
const halfwkin6 = document.querySelector(".halfwkin6")
const fullwkin6 = document.querySelector(".fullwkin6");

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
            halfdayres1.textContent = `${data.pricing[0].reservation[0].halfday}`;
            fulldayres1.textContent = `${data.pricing[0].reservation[0].fullday}`;
            halfdaywkin1.textContent = `${data.pricing[0].walkin[0].halfday}`;
            fulldaywkin1.textContent = `${data.pricing[0].walkin[0].fullday}`;

            rental1.appendChild(title1);
            maxcap1.appendChild(capacity1);
            halfres1.appendChild(halfdayres1);
            fullres1.appendChild(fulldayres1);
            halfwkin1.appendChild(halfdaywkin1);
            fullwkin1.appendChild(fulldaywkin1);

            let title2 = document.createElement("td");
            let capacity2 = document.createElement("td");
            let halfdayres2 = document.createElement("td");
            let fulldayres2 = document.createElement("td");
            let halfdaywkin2 = document.createElement("td");
            let fulldaywkin2 = document.createElement("td");

            title2.textContent = `${data.pricing[1].type}`;
            capacity2.textContent = `${data.pricing[1].capacity}`;
            halfdayres2.textContent = `${data.pricing[1].reservation[0].halfday}`;
            fulldayres2.textContent = `${data.pricing[1].reservation[0].fullday}`;
            halfdaywkin2.textContent = `${data.pricing[1].walkin[0].halfday}`;
            fulldaywkin2.textContent = `${data.pricing[1].walkin[0].fullday}`;

            rental2.appendChild(title2);
            maxcap2.appendChild(capacity2);
            halfres2.appendChild(halfdayres2);
            fullres2.appendChild(fulldayres2);
            halfwkin2.appendChild(halfdaywkin2);
            fullwkin2.appendChild(fulldaywkin2);

            let title3 = document.createElement("td");
            let capacity3 = document.createElement("td");
            let halfdayres3 = document.createElement("td");
            let fulldayres3 = document.createElement("td");
            let halfdaywkin3 = document.createElement("td");
            let fulldaywkin3 = document.createElement("td");

            title3.textContent = `${data.pricing[2].type}`;
            capacity3.textContent = `${data.pricing[2].capacity}`;
            halfdayres3.textContent = `${data.pricing[2].reservation[0].halfday}`;
            fulldayres3.textContent = `${data.pricing[2].reservation[0].fullday}`;
            halfdaywkin3.textContent = `${data.pricing[2].walkin[0].halfday}`;
            fulldaywkin3.textContent = `${data.pricing[2].walkin[0].fullday}`;

            rental3.appendChild(title3);
            maxcap3.appendChild(capacity3);
            halfres3.appendChild(halfdayres3);
            fullres3.appendChild(fulldayres3);
            halfwkin3.appendChild(halfdaywkin3);
            fullwkin3.appendChild(fulldaywkin3);

            let title4 = document.createElement("td");
            let capacity4 = document.createElement("td");
            let halfdayres4 = document.createElement("td");
            let fulldayres4 = document.createElement("td");
            let halfdaywkin4 = document.createElement("td");
            let fulldaywkin4 = document.createElement("td");

            title4.textContent = `${data.pricing[3].type}`;
            capacity4.textContent = `${data.pricing[3].capacity}`;
            halfdayres4.textContent = `${data.pricing[3].reservation[0].halfday}`;
            fulldayres4.textContent = `${data.pricing[3].reservation[0].fullday}`;
            halfdaywkin4.textContent = `${data.pricing[3].walkin[0].halfday}`;
            fulldaywkin4.textContent = `${data.pricing[3].walkin[0].fullday}`;

            rental4.appendChild(title4);
            maxcap4.appendChild(capacity4);
            halfres4.appendChild(halfdayres4);
            fullres4.appendChild(fulldayres4);
            halfwkin4.appendChild(halfdaywkin4);
            fullwkin4.appendChild(fulldaywkin4);

            let title5 = document.createElement("td");
            let capacity5 = document.createElement("td");
            let halfdayres5 = document.createElement("td");
            let fulldayres5 = document.createElement("td");
            let halfdaywkin5 = document.createElement("td");
            let fulldaywkin5 = document.createElement("td");

            title5.textContent = `${data.pricing[4].type}`;
            capacity5.textContent = `${data.pricing[4].capacity}`;
            halfdayres5.textContent = `${data.pricing[4].reservation[0].halfday}`;
            fulldayres5.textContent = `${data.pricing[4].reservation[0].fullday}`;
            halfdaywkin5.textContent = `${data.pricing[4].walkin[0].halfday}`;
            fulldaywkin5.textContent = `${data.pricing[4].walkin[0].fullday}`;    

            rental5.appendChild(title5);
            maxcap5.appendChild(capacity5);
            halfres5.appendChild(halfdayres5);
            fullres5.appendChild(fulldayres5);
            halfwkin5.appendChild(halfdaywkin5);
            fullwkin5.appendChild(fulldaywkin5);

            let title6 = document.createElement("td");
            let capacity6 = document.createElement("td");
            let halfdayres6 = document.createElement("td");
            let fulldayres6 = document.createElement("td");
            let halfdaywkin6 = document.createElement("td");
            let fulldaywkin6 = document.createElement("td");

            title6.textContent = `${data.pricing[5].type}`;
            capacity6.textContent = `${data.pricing[5].capacity}`;
            halfdayres6.textContent = `${data.pricing[5].reservation[0].halfday}`;
            fulldayres6.textContent = `${data.pricing[5].reservation[0].fullday}`;
            halfdaywkin6.textContent = `${data.pricing[5].walkin[0].halfday}`;
            fulldaywkin6.textContent = `${data.pricing[5].walkin[0].fullday}`;    

            rental6.appendChild(title6);
            maxcap6.appendChild(capacity6);
            halfres6.appendChild(halfdayres6);
            fullres6.appendChild(fulldayres6);
            halfwkin6.appendChild(halfdaywkin6);
            fullwkin6.appendChild(fulldaywkin6);
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