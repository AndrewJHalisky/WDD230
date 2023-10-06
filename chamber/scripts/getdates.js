document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = new Date(document.lastModified);

// Will use these later on in the project: 

// const hamButton = document.querySelector('#menu');
// const navigation = document.querySelector('.navigation')
// hamButton.addEventListener('click', () => {
//     navigation.classList.toggle('open');
//     hamButton.classList.toggle('open');
// });