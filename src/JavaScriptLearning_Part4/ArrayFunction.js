/*
Array Function:
1. Stored in a square bracket []
2. Lowest index-0; Highest index - arr.length-1
3. Stroed in heap memory
*/


// 1. Push -> add an element to the end of the array and returns the new length
let arr = [10, 20, 30, 40, 50];
console.log(arr.length); // 5
console.log(arr); // [ 10, 20, 30, 40, 50 ]
console.log('----------------');
let newLength = arr.push(60); // push() method returns the new length 
console.log(arr.length); // 6
console.log(newLength); // 6
console.log(arr); // [ 10, 20, 30, 40, 50, 60 ]

//2. pop -> removes the last element and returns the same
let arr2 = [10, 20, 30, 40, 50];
let popArr2 = arr2.pop();
console.log(popArr2); // 50
console.log(arr2); // [ 10, 20, 30, 40 ]
console.log(arr2.length); // 4


// 3. unshift -> adds element to the beginning and returns the new length
let arr3 = [10, 20, 30, 40, 50];
console.log(arr3); // [ 10, 20, 30, 40, 50 ]
let unshiftLenght = arr3.unshift(100); // returns the length of the element
console.log(unshiftLenght); // 6
console.log(arr3); // [ 100, 10, 20, 30, 40, 50 ]


// 4. shift -> removes the first element and returns the same
let arr4 = [100, 10, 20, 30, 40, 50];
console.log(arr4); // [ 100, 10, 20, 30, 40, 50 ]
let shiftedArray = arr4.shift(); // returns the removed element -> 100
console.log(shiftedArray); // 100
console.log(arr4); // [ 10, 20, 30, 40, 50 ]


// 5. splice() -> add, remove, replace anywhere in the array and returns the deleted items
// splice(startingIndex, deleteCount, replaceValue)
let cart1 = ['iphone', 'macbook', 'samsung', 'airpod'];
console.log(cart1); // [ 'iphone', 'macbook', 'samsung', 'airpod' ]
let splicedItems = cart1.splice(0, 2, 'pixel'); // start from 0 -> delete 2 items from that -> replace pixel to those 2 items
console.log(splicedItems); // [ 'iphone', 'macbook' ]
console.log(cart1); // [ 'pixel', 'samsung', 'airpod' ]


let cart2 = ['iphone', 'macbook', 'samsung', 'airpod'];
let returnedEle = cart2.splice(1, 0, 'gopro');
console.log(cart2); // [ 'iphone', 'gopro', 'macbook', 'samsung', 'airpod' ]
console.log(returnedEle); // []


let cart3 = ['iphone', 'macbook', 'samsung', 'airpod'];
let cart3Return = cart3.splice(1, 3, 'canon');
console.log(cart3Return); // [ 'macbook', 'samsung', 'airpod' ]
console.log(cart3); // [ 'iphone', 'canon' ]


let cart4 = ['iphone', 'macbook', 'samsung', 'airpod'];
cart4.splice(0, 1, 'keyboard', 'canon');
console.log(cart4); // [ 'keyboard', 'canon', 'macbook', 'samsung', 'airpod' ]


let cart5 = ['iphone', 'macbook', 'samsung', 'airpod'];
cart5.splice(2, 2);
console.log(cart5); // [ 'iphone', 'macbook' ]

// 6. slice() -> returns a portion of the array
let fruits = ['apple', 'banana', 'cherry', 'orange'];
let slicedFruits = fruits.slice(1, 3); // 1 to n-1
console.log(slicedFruits); // [ 'banana', 'cherry' ]

let fruits2 = ['apple', 'banana', 'cherry', 'orange'];
let slicedFruits2 = fruits2.slice(-2);
console.log(slicedFruits2); // [ 'cherry', 'orange' ]

// 7. reverse()
let color = ['red', 'green', 'blue', 'black'];
color.reverse();
console.log(color); // [ 'black', 'blue', 'green', 'red' ]


// 8. indexOf()
let vehicle = ['bike', 'bus', 'car', 'train', 'bus'];
let n1 = vehicle.indexOf('bus');
console.log(n1);
let n2 = vehicle.indexOf('bus', n1 + 1);
console.log(n2);

// 9. includes();
let city = ['chennai', 'kochi', 'banglore', 'hydrabad'];
let isPresent = city.includes('chennai');
console.log(isPresent);


// 10. joins
let lang = ['Java', 'JS', 'TS', 'Python'];
let newLang = lang.join(' | ');
let newLang2 = lang.join(' - ');
console.log(newLang);
console.log(newLang2);

// 11. toString()
let stringLang = lang.toString();
console.log(stringLang);

// 12. at() -> from starting: 0,1,2,3,... and from last: -1,-2,-3,-4...
let atLang = lang.at(0);
let atLang2 = lang.at(2);
let atLang3 = lang.at(-5);
console.log(atLang); // Java
console.log(atLang2); // TS
console.log(atLang3); // undefined

//13. forEach():
let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
month.forEach((ele) => {
    console.log(ele.toUpperCase());
});

let num = [1, 2, 3, 4, 5];
num.forEach((ele) => {
    console.log(ele ** 2); // 1, 4, 9, 16, 25
});


let prod = ['watch', 'phone', 'shoe', 'laptop', 'phone', 'books', 'phone'];
let count = 0;
let product = 'phone';
prod.forEach((ele) => {
    if (ele === product) {
        // console.log(index); // 1, 4, 6
        count++;
    }
});
console.log(`Count of ${product} is: ${count}`);


