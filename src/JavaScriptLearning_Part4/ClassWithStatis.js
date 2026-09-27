class Student {

    name;
    age;
    static TrainerName = 'Naveen';// static variable name

    //constructor can only have non static parameter
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //actions
    coding() {
        console.log(this.name, 'is coding...');
    }

    learning = function () {
        console.log(this.name, 'is reading...');
    }

    //static function
    static gettingOffer(name) {
        console.log(name, 'should get an offer...');
    }

}


//object will never hold any static variables or methods
let std1 = new Student('Girinath', 23);
console.log(std1.name, std1.age, Student.TrainerName);

std1.coding();
std1.learning();

Student.gettingOffer('Girinath');
console.log(Student.TrainerName);