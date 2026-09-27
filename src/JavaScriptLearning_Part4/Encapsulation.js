

// encapsulation: hiding the class properties/methods using private:


class EmployeeInfo {
    name;
    age;
    #salary; // # -> private variable

    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.#salary = salary;
    }

    //public setter
    setSalary(salary) {
        this.#salary = salary;
    }

    //public getter
    getSalary() {
        return this.#salary;
    }
}

let e1 = new EmployeeInfo('Girinath', 23, 10.5); // POST call
console.log(e1.name, e1.age, e1.getSalary()); // Girinath 23 10.5 -> GET call

e1.setSalary(11.8); // setter method is used to update private components -> PUT call
console.log(e1.name, e1.age, e1.getSalary()); // Girinath 23 11.8 

e1.age = 24; // we can normally update public variables
// e1.#salary = 12.5 // SyntaxError: Private field '#salary' must be declared in an enclosing class
console.log(e1.name, e1.age, e1.getSalary()); // Girinath 24 11.8


/*
why do you want salary inside constructor and setter both method?
- to initialize first we need constructor, to update we need setter methods
*/

// How do you achieve encapsulation without getter and setter
class Browser {

    launchBrowser() {
        console.log('launching browser...');
        this.#checkBrowserVersion();
        this.#checkInternalUpdate();
        this.#checkOSversion();
        console.log('Browser Launched successfully...');
    }

    #checkOSversion() {
        console.log('Check OS compatibility...');
    }

    #checkBrowserVersion() {
        console.log('Check browser version...');
    }

    #checkInternalUpdate() {
        console.log('Check internal browser compatibility...');
    }
}

let obj = new Browser();
obj.launchBrowser();
// obj.checkBrowser(); // TypeError: obj.checkBrowser is not a function
