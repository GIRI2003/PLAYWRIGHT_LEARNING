// Callback function -> calling a function by passing another function as a parameter

/* --------Passing function with function/expression name----------- */
function testing(callback) {
    console.log('Hello...');
    callback();
}

// creating a print function
function normalFunction() {
    console.log('Hello World printed... using print function');
}

// calling the testing function and passing print function as a parameter
testing(normalFunction);

// Calling testing function using anonymous function
let anonymousFunction = function () {
    console.log('Printing Anonymous function using expression name');
}
testing(anonymousFunction);

// calling testing function using arrow function as a parameter
let arrowFunction = () => {
    console.log('Printing Arrow Function using expression name');
}
testing(arrowFunction);

/* -----------Passing function directly--------------- */

function automation(callback) {
    console.log('Hello Automation...');
    callback();
    console.log('---------');
}

automation(function normalFunc() {
    console.log('printing with normal function');
})

automation(function () {
    console.log('printing with anonymous function');
})

automation(() => {
    console.log('Printing with arrow function directly');
})

/* ----Passing a paramter in callback function using expression name-------- */

let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;

function calculator(callback, a, b) {
    console.log('Calculating....');
    let result = callback(a, b);
    return result;
};

let result = calculator(add, 10, 20);
console.log(result);

/* ----Passing a paramter in callback function directly----- */

function printing(callback, x, y) {
    console.log('Hello function...');
    let result = callback(x, y);
    console.log(result);
}

printing((num1, num2) => num1 + num2, 100, 200);

printing(function (num1, num2) {
    return num1 - num2;
}, 100, 200);


/* ----Passing multiple functions as a paramter in callback function ----- */

function laptop(callback1, callback2, num) {
    console.log('Starting....');
    callback1(num);
    callback2(num);
}

let coding = (num) => {
    console.log('Coding with..', num);
}

let writing = (num) => {
    console.log('writing with...', num);
}

laptop(coding, writing, 100);

/* ------------------------------------ */
function getUserDetails(callback, userObj) {
    console.log('Fetching details...');
    callback(userObj);
}

getUserDetails((user) => {
    console.log('user details are,', user);
}, { name: 'Girinath', age: 23 });


/* ------------------------------------ */

function get() {
    console.log('Get API');
};

function put() {
    console.log('Put API');
};

function post() {
    console.log('Post API');
};

function deleteApi() {
    console.log('delete API');
};


function performAPIAction(callback) {
    callback();
};

performAPIAction(get);