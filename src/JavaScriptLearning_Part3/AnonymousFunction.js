/**
 * Anonymous function -> function with no name, 
 */

//function with name: Normal function
function myName(name) {
    console.log('Hi, my name is', name);
}
myName('Girinath');

//function without name: Anonymous function
let myName2 = function (name) {
    console.log('Hi, my name is', name);
}
myName2('Rohith');

/*------------------------------------------------------*/

/**
 * This finction is to add the numbers and return the value
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
let sum = function (a, b) {
    return a + b;
}

let result = sum(10, 20);
console.log(result);

/*------------------------------------------------------*/
/**
 * This function is to launch browser
 * @param {string} browserName 
 */
let launchBrowser = function (browserName) {
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

let myBrowserName = ' CHROME '
let flag = launchBrowser(myBrowserName);
console.log(flag);
