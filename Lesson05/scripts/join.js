const re = new RegExp("ab+c");

const firstName = document.querySelector('form[name="first_name"]');
const lastName = document.querySelector('form[name="last_name"]');
const userEmail = document.querySelector('form[name="email"]');
const phoneNumber = document.querySelector('form[name="phone_number"]');
const userBusiness = document.querySelector('form[name="business"]');
const memberLevel = document.querySelector('form[name="membership"]');

function join() {
    console.log('first_name');
    console.log('last_name');
    console.log('email');
    console.log('phone_number');
    console.log('business');
    console.log('membership');
}