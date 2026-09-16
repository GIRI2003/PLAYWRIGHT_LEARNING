/**
 * Callback with wait -> SetTimeOut
 * calling a function by passing a function as a argument, but with a wait(5000) millisecond
 */


//will exectue piece of code after some milli seconds
setTimeout(() => {
    console.log('Hello World!!');
}, 5000);


/**
 * This is a function with callback, which waits for 4 seconds before executing
 * @param {Function} callback 
 */
function getData(callback) {
    console.log('Connecting and fetching data from DB');
    setTimeout(() => {
        callback();
    }, 4000)
}
//calling the getData() function
getData(() => {
    console.log('Data is fetched');
})


/**
 * Give user details after 5 seconds....
 * @param {Function} callback 
 */
function getUserDetail(callback) {
    console.log('Connecting and fetching user details from DB...');
    setTimeout(() => {
        let user = {
            id: 101,
            name: 'Girinath',
            role: 'sdet',
            city: 'Chennai'
        }
        callback(user);
    }, 3000);
};

getUserDetail((obj) => {
    console.log(obj.name);
    console.log(obj.role);
});




function getUserCreds(callback, userName, timeOuts) {
    console.log('Getting user Credentials...');
    setTimeout(function () {
        callback(userName);
    }, timeOuts)
}

let getUserName = (name) => {
    console.log('User name is', name);
}

getUserCreds(getUserName, 'Girinath', 3000);

