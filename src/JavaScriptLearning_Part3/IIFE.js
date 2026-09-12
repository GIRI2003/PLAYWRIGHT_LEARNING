
// IIFE -> Immediately Invoked Function Expression
// syntax: (function)();

(function () {
    console.log('Hello world...');
})();

(() => {
    console.log('Hello Arrow Function...');
})();

(function (name) {
    console.log('My name is', name);
})('Girinath');

((mark1, mark2) => {
    console.log('Total marks:', (mark1 + mark2));
})(50, 25);

let userDetails = { name: 'Girinath', age: 23, skills: 'Playwright', city: 'Chennai' };

((user) => {
    for (let e in user) {
        console.log(user[e]);
    }
})(userDetails);

/* ------------------------------- */

let myname = (function (x, y) {
    return x + y;
})(100, 200);

console.log(myname);

/* ------------------------------- */

/**
 * This is an IIFE function to launch browser
 * @param {string} browserName
 * @returns {boolean}
 */
let flag = ((browserName) => {
    switch (browserName.toLowerCase().trim()) {
        case 'chrome':
            console.log('launch chrome...');
            return true;
        case 'firefox':
            console.log('launch ff...');
            return true;
        case 'edge':
            console.log('launch edge...');
            return true;
        case 'safari':
            console.log('launch safari...');
            return true;
        default:
            console.log('Invalid');
            return false;
    }
})(' IR ');

flag ? console.log('launch URL...') : console.log('Browser not launched');