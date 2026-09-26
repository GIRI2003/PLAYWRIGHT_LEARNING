/*
1. export {a,b,c} --> import {a,b,c} from './Exports.js'
2. only one default function/variable can be exported and imported
3. default should not be the part of object destructuring
4. rename -> import {exportName as myName} from './Exports.js
5. import * as utils from './Exports.js'
*/

// Method 1 -> import nomally
/* 
import { a, myName1, myFunction1 } from '../JavaScriptLearning_Part4/Exports.js';

console.log(a);
console.log(myName1);
myFunction1();
 */

// Method 2 ->
// default import component should be written outside of the curly brackets, at the starting only...
// import code, { b, myRole as role, writing } from './Exports.js';

//import method 3 -> * as utils
import defaultFunction, * as ultis from './Exports.js';

console.log(ultis.b);
console.log(ultis.myRole);
ultis.writing();
defaultFunction('Playwright');
// console.log(PI);

