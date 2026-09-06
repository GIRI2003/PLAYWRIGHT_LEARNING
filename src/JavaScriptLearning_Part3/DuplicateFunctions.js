/**
 * JS doesn't support any kind of function overloading.
 * It executes the latest function available in the file/class
 */



function login() {
    console.log('Login');
}

function login(username) {
    console.log('login using:', username);
}

function login(username, password) {
    console.log('login using:', username, password);
}

login(); // login using: undefined undefined
login('girinath', '12345'); // login using: girinath 12345

/* --------------------------------------------- */

