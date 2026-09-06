/**
 * Function chain- a function calling another function 
 */

function login() {
    console.log('Login into application');
    search();
}

function search() {
    console.log('Search a particular product');
    addToCart();
}

function addToCart() {
    console.log('add the product to cart');
    logout();
}

function logout() {
    console.log('Logout from the application');

    /* calling login function will state stackoverflow error */
    // login(); // Maximum call stack size exceeded
}

/* Calling the login function */
login();

// ----------------------------------------------------------------

