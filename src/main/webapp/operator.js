//1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals:
..
1 + 2 = ${1+2}`);

// 2. Numeric operators
console.log(1+1);

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;

x += y;
x -= y;
x *= y;
x /= y;

console.log(10 < 6);
console.log(10 <= 6);
console.log(10 >= 6);
console.log(10 > 6);

const value1 = true;
const value2 = 4<2;

// 6. Logical operators : ||, &&, !
// heavy한 operation일 수록 뒤로 배치
console.log(`or: ${value1 || value2 || check()}`);

console.log(`or: ${value1 && value2 && check()}`);

function check(){
    for(let i=0; i<10; i++){
        //wasting time
        console.log('');
    }
    return true;
}

console.log(!value1)


// 7. Equlity
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strick equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const kim1 = {name: 'kim'};
const kim2 = {name: 'kim'};
const kim3 = kim1;
console.log(kim1 == kim2);
console.log(kim1 == kim2);
console.log(kim1 === kim3);

//  8. Conditional operators : if
// if, else if, else
const name = 'kim';
if(name === 'kim'){
    console.log('hi, kim');
}else if(name === 'coder'){
    console.log('you are coder');
}else{
    console.log('who are you');
}

console.log(name === 'coder' ? 'yes' : 'no');


// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch(browser){
    case 'IE':
        console.log('go away');
        break;
    case 'chrome':
    case 'Firefox':
        console.log('i love you');
        break;
    default:
        console.log('same all!');
        break;
}

// 11.Loops
// while loop, while the condition is truthy,
// body code is executed,
let i = 3;
while(i>0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

//sout even number 0 to 10
for (let i = 0; i <= 10; i++) {
    if(i%2 == 0) console.log(`i : ${i}`);
}

//sout 0to10 till 8
for (let i = 0; i <= 10; i++) {
    if(i==8) break;
    console.log(`i : ${i}`);
}


