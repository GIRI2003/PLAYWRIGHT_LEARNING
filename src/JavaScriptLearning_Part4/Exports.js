// Export variables, functions from one file to another file for utility purpose

// Method 1 -> export each and every components
/* 
export let a = 10;
export let myName1 = 'Girinath';
export function myFunction1() {
    console.log('Hello World!!');
}
 */

// Method 2 -> export at last

let b = 20;
let myRole = 'Automation Engineer';
function writing() {
    console.log('I can write..');
}
export { b, myRole, writing };


// 3. default -> you can have only one default propety..

// default Function:
export default function coding(name) {
    console.log(name, 'Coding function...');
}

// Default Variable:
// let PI = 3.14;
// export default PI;