// map - transform every element of the given array
// returns new array with the same length

let num = [1, 2, 3, 4, 5];

let multipliedByTwo = num.map((e) => {
    return e * 2;
});

console.log(multipliedByTwo);
// multipliedNum.forEach(e => console.log(e))

let emp = ['Arun', 'Balu', 'Chandru', 'Divya'];
let upperCaseEmp = emp.map((e) => {
    return e.toUpperCase();
})
upperCaseEmp.forEach(e => console.log(e));


// 2. Filter -> filtering out some data according to our requirement
// It will return the array with the same length or decreased length

let num1 = [10, 25, 30, 45, 50, 65, 90];
let greaterNum1 = num1.filter((e) => {
    return e > 30;
});
console.log(greaterNum1);


let evenNum = num1.filter((e) => {
    return e % 2 == 0;
});
console.log(evenNum);

let stdList = ['Arun', 'Balu', 'Chandru', 'Divya'];
let stdListFiltered = stdList.filter((e) => {
    let filteredName = e.length < 6;
    return filteredName;
});
console.log(stdListFiltered);


let stdList2 = ['Arun auto', 'Balu', 'Chandru auto', 'Divya'];
let studContainsAuto = stdList2.filter((e) => {
    return e.includes('auto');
});
console.log(studContainsAuto);

/*
 1. filter out the products that starts with apple
 2. again filter 'iphn' is present
 3. output should be 'apple iphone', not 'apple iphn' 
*/
let myProduct = ['apple macbook', 'apple iphn', 'samsung galaxy', 'canon', 'apple air'];
let fltProduct = myProduct
    .filter(e => e.startsWith('apple'))
    .filter(e => e.includes('iphn'))
    .map(e => e.replace('iphn', 'iphone'));

console.log(fltProduct);


// 3. reduce() -> combine everything into one single value:
let myNumber = [10, 20, 30, 40, 50];
let total = myNumber.reduce((sum, n) => sum + n, 0);
console.log(total);


let myAppleProduct = ['apple_macbook', 'apple_iphn', 'samsung_galaxy'];
let upgradedAppleProduct = myAppleProduct.reduce((add, name) => add + name + ', ', 'Girinath: ');
console.log(upgradedAppleProduct);

let ass1 = [15, 22, 37, 45, 60, 73, 85, 90];
let newValue = ass1
    .filter(e => e % 5 == 0) // 15, 45, 60, 85, 90
    .filter(e => e % 2 == 0) // 60, 90
    .map(e => e * 2) // 120, 180
    .reduce((sum, num) => sum + num, 0); // 300

console.log(newValue);