/**
 * Call by value -> passing a value as a parameter in a function
 * function sum(num){
 *      console.log(num * 10);
 * }
 * 
 * sum(10); //100
 * 
 * Call by reference -> passing an object as a paramter in a function
 * 
 */

let user = {
    name: 'Girinath',
    age: 23,
    salary: 10,
    city: 'Chennai'
};

function getUserDetails(userObj) {
    // console.log(userObj.name, userObj.age, userObj.salary, userObj.city);
    for (let e in userObj) {
        console.log(userObj[e]);
    }
}

getUserDetails(user);

getUserDetails({
    company: 'TCS',
    shift: 'General shift'
})

/* let arr = [1, 2, 3, 4, 5, 6, 7];
for (let e in arr) {
    console.log(arr[e]);
} */

