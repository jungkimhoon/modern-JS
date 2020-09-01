'use strice';

//  Array

//  1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//  Index position
const fruits = ['❤', '🤦‍'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length-1]);

console.clear();
//  3.Looping over an array
// print all fruits
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

console.log('1111111111111111');
fruits.forEach(function (fruits, index, array) {
    console.log(fruits, index, array)
});

console.log('2222222222222222');
fruits.forEach((fruit,index) => {
    console.log(fruit, index);
});

console.log('3333333333333333');
fruits.forEach((he) => console.log(he));

//  4. Addtion, deletion, copy
//  push, pop
fruits.push('😘','💕', '😁');
console.log(fruits);

fruits.pop();
console.log(fruits);

//  unshift: add an item to the beginning
fruits.unshift('1','2');
console.log(fruits);

fruits.shift();
// fruits.pop();
console.log(fruits);

fruits.unshift('1',);
//  note!! shift, unshift are slower than pop, push
//  splice: remove an item by index position
fruits.push('🐱‍', '🐉', '🐱', '‍👓');
console.log(fruits);
fruits.splice(1,1,'ㅋㅋ','ㅎㅎ');
console.log(fruits);

const fruits2 = ['new', 'nu'];
const concatFruits = fruits.concat(fruits2);
console.log(concatFruits);

//  5.  Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('new'));
console.log(fruits.indexOf('🐉'));
console.log(fruits.includes('new'));

//  lastIndexOf
console.clear();
fruits.push('🐉')
console.log(fruits.indexOf('🐉'));
console.log(fruits.lastIndexOf('🐉'));

console.clear();
console.log(fruits);
console.log(fruits.toString());
console.log(fruits.toLocaleString());
console.log(fruits.join(' '));
console.log(fruits.reverse());