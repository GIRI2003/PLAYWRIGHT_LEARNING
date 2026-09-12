
let user = {
    name: 'Girinath',
    age: 23,
    gender: 'M',
    city: 'Chennai'
}

// Destructing the object
let { age, city } = user;
console.log(age, city); // 23 Chennai
// console.log(age, city, gender); //ReferenceError: gender is not defined

let { userName, userCity } = user;
console.log(userName, userCity); // undefined undefined

let { Name, City } = user;
console.log(Name, City); // undefined undefined

/* Rename the variable using {name : firstName} */

let { name: firstName, city: myCity } = user;
console.log(firstName, myCity); // Girinath Chennai

/* ------Destructing using function------- */

let person = {
    name: 'Girinath',
    company: 'TCS',
    city: 'Chennai',
    age: 23,
    isActive: true
}

function getPersonDetails({ name, age, city }) {
    console.log(name, age, city);
}

getPersonDetails(person);

/* -------Destructing nested object-------- */

let nestedObj = {
    myName: 'Rohith',
    myGender: 'M',
    myAge: 23,
    myAddress: {
        street: 101,
        city: 'Chennai',
        country: 'India',
        location: {
            latitude: 21.45,
            longitude: 901.24
        }
    }
}

//Normal destructuring
let { myName, myAge } = nestedObj;
console.log(myName, myAge); // Rohith

// Destructuring nested object
let { myAddress: { country, street, location: { latitude, longitude } } } = nestedObj;
console.log(country, street);
console.log(latitude, longitude);

/* ----Destructuring arrays---- */

let student = {
    name: 'Girinath',
    age: 23,
    skills: ['playwright', 'Selenium']
}

let { stdName, stdAge, skills: [primarySkill, secondarySkill] } = student;
console.log(primarySkill);
// console.log(skills); // ReferenceError: skills is not defined
console.log(secondarySkill);