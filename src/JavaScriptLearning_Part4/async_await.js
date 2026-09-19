

//async with function -> will always and always returns a Promise

/* ---Normal Function------- */
async function printName() {
    console.log('Girinath');
}
printName(); // Girinath


/* -----Normal Return Function------ */
function getNumber() {
    return 100;
}
let myNum = getNumber();
console.log(myNum); // 100


/* -----Async function------- */
async function getNumber2() {
    return 100;
}
let myNum2 = getNumber2();
console.log(myNum2); // Promise { 100 }


/* -------Async function with .then() function------ */
async function getNumber3() {
    return 100;
}
getNumber3().then((num) => console.log(num)); // 100


/* ------Async function with await------ */
async function getNumber4() {
    return 100;
}
let num4 = await getNumber4();
console.log(num4); // 100


/* -----async-await with Anonymous function----- */
let getName = async function () {
    return 'Girinath';
}
let myName = await getName();
console.log(myName);


/* ------async-await with arrrow function------- */
let getRole = async () => {
    return 'Automation Engineer';
}
let myRole = await getRole();
console.log(myRole);


/**
 * async-await with arrrow function by passing arguments
 * @param {string} skill 
 * @param {string} skill2 
 * @param {string} skill3 
 * @returns 
 */
let getSkill = async (skill, skill2, skill3) => {
    let myString = `My Skills are ${skill}, ${skill2} and ${skill3}`;
    return myString;

}

let myskill = await getSkill('Playwright', 'JavaScript', 'TypeScript');
console.log(myskill);



