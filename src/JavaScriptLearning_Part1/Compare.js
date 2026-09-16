/* 
Comparing two values
Difference between "==" and "==="
"==" -> loose equality
"===" -> Strict/hard equality 
*/

console.log(10 == 10);// ture  
console.log("10" == 10);// true (Loose equality, just checks the value not datatypes)
console.log("100" == 100);// true

console.log("10" === 10); //false
console.log(10 === 10); //true

console.log("10.00" == 10); //true
console.log("10.00" === 10); //false

console.log("string" == "String");
console.log("string" === 'string');
console.log("String" === "string");

//datatype and value should match under "===" then only it will give true

/* --------------------------------------------------- */

let a = 0.1;
let b = 0.2;
let c = 0.3;

console.log(a + b); //0.30000000000000004
console.log((a + b) == c); //false

/*  */

