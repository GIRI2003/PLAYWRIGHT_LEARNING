/**
 * Function can be named in Javascript
 */

//Simple function
function named(name) {
    console.log(name);
}

named('Girinath');

//named Expression function

let getData = function getUserDataFromDashboardPage(username) {
    console.log('Dashboard user data:', username);
    return 100;
}

let getInfo = getData('Girinath');
console.log(getInfo);
// getUserDataFromDashboardPage('Rohith'); // getUserDataFromDashboardPage is not defined

let click = function click_on_the_sign_in_button_using_css_selector() {
    console.log('Click on the element');
}

click();

/*-------------------------------------------------------*/

// Hoisting is not allowed in FunctionExpression

create(); // Cannot access 'create' before initialization

let create = function createVariable() {
    console.log('Variable is created...');
}