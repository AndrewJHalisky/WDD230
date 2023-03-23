const re = new RegExp("ab+c");

const firstName = document.querySelector('form[name="first_name"]');
const lastName = document.querySelector('form[name="last_name"]');
const userEmail = document.querySelector('form[name="email"]');
const businDescrpt = document.querySelector('form[name="message"]');

function join() {
    if (firstName != null && lastName != null && userEmail != null && businDescrpt != null){
        window.location.href = "../thankyou.html";
    }
}