/*------------------------------------------------------
Arrow function: Modern way of anonymous function
syntax: (parameter) => {code logic}  
how to write: no function name, no function keyword
*/

let print = () => {
    console.log(`I'm Arrow Function`);
}
print();

/**
 * This is a simple hello name function
 * @param {string} name 
 */
let myname = (name) => {
    console.log('Hello', name);

}
myname('Girinath');

/**
 * This is an arrow function to add two numbers
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
let additon = (a, b) => {
    console.log('Adding two numbers...');
    let sum = a + b;
    return sum;
}
let result = additon(10, 20);
console.log(result);

/*------------------------------------------------------*/

let multi = (num1, num2) => {
    let multi = num1 * num2;
    return multi;
}
let result1 = multi(10, 20);
console.log(result1);

/*------------------------------------------------------*/

let getName = () => 'Girinath';

let getMyName = getName();
console.log(getMyName);

/*------------------------------------------------------*/
/**
 * This arrow function is to click an element in a webpage
 * @param {string} element 
 */
let clickElement = (element) => {
    console.log('check the', element, 'isVisible');
    console.log('check the', element, 'isClickable');
    console.log('Clicking on the element...', element);
    return true;
}
clickElement('loginButton');

/*------------------------------------------------------*/
/**
 * This is an arrow function to launch browser
 * @param {string} browserName 
 */
let launchBrowser = (browserName) => {

    switch (browserName.toLowerCase().trim()) {
        case 'chrome':
            console.log('Launching Chrome...');
            return true;
        case 'firefox':
            console.log('Launching Firefox...');
            return true;
        case 'edge':
            console.log('Launching Edge...');
            return true;
        case 'safari':
            console.log('Launching Safari...');
            return true;
        default:
            console.log('Invalid browser, please enter a valid browser...');
            return false;
    }
}
let browName = 'EDGE '
let flag = launchBrowser(browName);
if (flag) {
    console.log('Browser launched successfully...');
} else {
    console.log('Browser not launched....');
}

/*------------------------------------------------------*/

let convertedName = (convertName) => convertName.toLowerCase();
let convName = convertedName('CHROME EDGE FIREFOX SAFARI');
console.log(convName);

// if arrow function has only one parameter, then no need to write () itself

let convertedName1 = convertName1 => convertName1.toLowerCase();
let convName1 = convertedName1('CHROME EDGE FIREFOX SAFARI');
console.log(convName1);

// if arrow function has 0 parameter, then need to write ()...
let learning = () => 'Girinath'
console.log(learning());

// if arrow function has more than 1 parameters, then need to write ()...
let sum = (num1, num2) => num1 + num2;
let result2 = sum(10, 20);
console.log(result2);


// Arrow function with objects

let sum1 = (num1, num2) => num1 + num2;

let user = {
    name: 'Girinath',
    age: 23,
    salary: 10,
    isActive: true
}

let userObj = (userObj1) => {

    // console.log(user.name, user.age,user.salary, user.isActive);

    for (let e in userObj1) {
        console.log(e, '=', userObj1[e]);
    }
    return sum1(250, 300);
}

let addition = userObj(user);
console.log(addition);