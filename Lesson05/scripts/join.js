const re = new RegExp("ab+c");

const firstName = document.querySelector('form[name="first_name"]');
const lastName = document.querySelector('form[name="last_name"]');
const userEmail = document.querySelector('form[name="email"]');
const phoneNumber = document.querySelector('form[name="phone_number"]');
const userBusiness = document.querySelector('form[name="business"]');
const memberLevel = document.querySelector('form[name="membership"]');
const businDescrpt = document.querySelector('form[name="description"]');

function join() {
    if (firstName != null && lastName != null && userEmail != null && phoneNumber != null && 
        userBusiness != null && memberLevel != null && businDescrpt != null){
        window.location.href = "../thankyou.html";
    }
}