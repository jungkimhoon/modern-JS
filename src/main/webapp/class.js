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

const user1 = new User('kim', 'jung', 20);
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

    //4. static properties and methods
    //Too soon
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher); //들어오는 데이터에 상관없을때
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher();

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape{
    draw(){
        super.draw();
        console.log('스');
    }
    getArea() {
        return(this.width * this.height / 2);
    }

    toString(){
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

    //6. class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
