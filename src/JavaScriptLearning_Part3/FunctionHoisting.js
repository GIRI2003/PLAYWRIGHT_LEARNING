// Hoisting -> Calling the function/variable even before creating

console.log(a); //Cannot access 'a' before initialization
let a = 100;

let b = 200;
console.log(b); // 200

/*-------------------------------------------------------*/

create();//It will work in case of function

function create() {
    console.log('Create a variable');
}

/*-------------------------------------------------------*/

sel(); //Cannot access 'sel' before initialization

let sel = function select() {
    console.log('Selct a dropdown');
}

