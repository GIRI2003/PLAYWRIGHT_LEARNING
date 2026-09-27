
/*
class: Blueprint/template for the objects
Class: animal; Object: Dog, Cat, Cow, etc...

Object: A physical entity -> variables(properties) + methods(actions) 

Class: human, Object: myBody, reference variable: myName
variables: eyes, hand, legs, ect.., 
methods: I can walk, code, drive...
*/


class Employee {

    //1. Class variables or global variable: let, var, const are not allowed

    name;
    age;
    salary;
    dept;
    isActice;

    //2. constructor: it will help us to create a object of a class and initilize a class variables
    //It will be called when the object is created 'new Employee()'
    //Overloading is not possible for constructor, multiple constructor is not allowed
    //constructor will not return anything
    //constructor has no name... we should write constructor(){}

    constructor(name, age, salary, dept, isActice) {
        // this keyword is used to initilize the global..
        //this.globalVariable = localVariablbe
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.dept = dept;
        this.isActice = isActice;
    }


    //3. Actions -> methods, never write a function keyword inside class

    // normal function:
    coding() {
        console.log(this.name, 'is coding..');
    }

    //anonymous function
    running = function () {
        console.log(this.name, 'is running...');
        this.coding();
    }

    //arrow function
    walking = () => {
        console.log(this.name, 'can walk..');
    }

    //async function: normal
    async reading() {
        console.log(this.name, 'can read books...');
    }

}


//creating an object: so class gave us a template and we are creating an object using some values and accessing methods inside of a class
let e1 = new Employee('Girinath', 23, 10.5, 'testing', true);
console.log(e1.name, e1.age, e1.salary, e1.dept, e1.isActice);
e1.running();
e1.walking();
await e1.reading();

let emp2 = new Employee('Rohith', 19, 5.5, 'ECE', false);
console.log(emp2.name, emp2.age, emp2.salary, emp2.dept, emp2.isActice);
emp2.running();
emp2.walking();
await emp2.reading();


export { Employee };
