/*

Creating a clone of an object 
1. Shallow copy -> using spread operator -> {...objVariable}, not recommeded for nested obejcts
2. Deep copy -> structuredClone()

*/

let user = {
    name: 'Giri',
    age: 23,
    salary: 8.5,
    isActive: true,
    city: 'Chennai',

    address: {
        roomNum: 101,
        flatName: 'Prestige Apparments',
        city: 'Chennai',
        pincode: 5000021
    }
}

/* using spread operator -> {...objVariable}, not recommeded for nested obejcts */

let myUser = { ...user }

console.log(user);
console.log(myUser);

console.log('--------------');

myUser.age = 26;

console.log(user); // age -> 23
console.log(myUser); // age -> 26

console.log('--------------');

myUser.address.city = 'Banglore'

console.log(user); // city -> Banglore
console.log(myUser); // city -> Banglore, thats why shallow copy is not recommended for nested objects

/* ------------------------------------------------------ */

let customer = {
    name: 'Giri',
    age: 23,
    salary: 8.5,
    isActive: true,
    city: 'Chennai',

    address: {
        roomNum: 101,
        flatName: 'Prestige Apparments',
        city: 'Chennai',
        pincode: 5000021
    }
}

let myCustomer = structuredClone(customer)
console.log(customer);
console.log(myCustomer);

console.log('------------');

myCustomer.address.city = 'Banglore'

console.log(customer);// city: chennai
console.log(myCustomer);// city: banglore

/* Better to use sturctedClone() whenever object copy required */

