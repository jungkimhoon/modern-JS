'use strict'
// object-oriented programming
// class: template
// object: instance of a class
// Javascript classes
//   - introduced in ES6
//   - syntactical sugar over prototype-based inheritance

    // 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log(`${this.name} : hello!`);
    }
}

const kim = new Person('kim', 27);

console.log(kim.name);
console.log(kim.age);
kim.speak();


    // 2. getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value){
        if(value < 0){
            throw Error('age can not be negative');
        }
        this._age = value;
    }
}

const user1 = new User('kim', 'jung', -1);
console.log(user1.age);

    //3. Fields (public, private)
    //TOO soon!
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);
