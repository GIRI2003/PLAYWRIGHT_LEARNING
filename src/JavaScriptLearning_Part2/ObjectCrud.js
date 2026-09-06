/**
 * JS allows to make CRUD operations in object using create, read, update, and delete 
 */

let user = {
    name: 'Girinath',
    gender: 'M',
    isActive: true,
    salary: 10.5,
    mobile: '9876543210'
};

/* Reading field in object */
console.log(user);
console.log('----------------');

/* Update a field in object */
user.salary = 12;
console.log(user.salary);
console.log(user);
console.log('-----------');

/* Deleting a field in object */
delete user.isActive;
console.log(user);
console.log('-----------');

/* Adding a field in object */
user.email = 'girinath@gmail.com'
console.log(user);
console.log('--------------');

