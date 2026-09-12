
// JSON: JavaScript Object Notation

let user = {
    name: 'Giri',
    age: 23,
    salary: 8.5,
    isActive: true,
    city: 'Chennai'
}

console.log(user);//{ name: 'Giri', age: 23, salary: 8.5, isActive: true, city: 'Chennai' }
console.log(typeof user);//object

// JS Object to JSON string: -> Serialization or Marshelling

let jsonUser = JSON.stringify(user, null, 2)//2 represents 2dots in console output

console.log(jsonUser);//{"name":"Giri","age":23,"salary":8.5,"isActive":true,"city":"Chennai"}
console.log(typeof jsonUser);//string

// JSON string to JavaScript Objects
