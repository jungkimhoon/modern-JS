'use strict';

//  Objects
//  one of the JavaScript's data types
//  a collection of related data and/or functionality.
//  Nearly all objects in JavaScript are instances of Object
//  object = { key : value };

// 1.Literal and properties
const name = 'kim';
const age = 4;
print(name, age);

const obj1 = {};    // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}


const kim = { name : 'kim', age : 4 };
print(kim);

kim.hasJob = false;
console.log(kim.hasJob);

delete kim.hasJob;
console.log(kim.hasJob);

//  2. Computed properties
console.log(kim.name);      // using dot
console.log(kim['name']);   // computer properties (always String type)
kim['hasJob'] = false;
console.log(kim.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(kim, 'name');
printValue(kim, 'age');

//  3. Property value shorthand
const person1 = { name: 'bob1', age: 21};
const person2 = { name: 'bob2', age: 22};
const person3 = { name: 'bob3', age: 23};
const person4 = { name: 'bob4', age: 24};
const person5 = new Person('kim', 26);
console.log(person5)

//  4. Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

//  5. in operator: property existance check( key in obj )
console.log('name' in kim);
console.log('age' in kim);
console.log('random' in kim);
console.log(kim.random);


//  6. for..in vs for..of
//  for (key in obj)
console.clear();
for (let key in kim){
    console.log(key)
}

//  for (value of iterable)
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
for (let value of array) {
    console.log(value);
}

//  7. cloning
// Object.assing(dest, [obj1, obj2, obj3 ... ])
const user = {name: 'kim', age: '20'};
const user2 = user;
console.log(user === user2);
user2.name = 'coder';
console.log(user);
console.log(user === user2);

//  old way
const user3 = {};
for(let key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);
console.log(user3 === user)

//  new way
const user4 = Object.assign({}, user);
console.log(user4);

const fruit1 = {color : 'red'};
const fruit2 = {color : 'red', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);