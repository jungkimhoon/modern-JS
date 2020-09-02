'use strict';

//Q1. make a String out of an array
{
    const fruits = ['apple', 'bannana', 'orange'];
    console.log(fruits.toString());
    const arr = fruits.join(', and ');
    console.log(arr);
}

//Q2. make an array out of a string
{
    const fruits = '1, 2, 3, 4';
    const arr = fruits.split(',');
    console.log(arr);
}

//Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const arr = array.reverse();
    console.log(arr.toString());
}

//Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const arr = array.slice(2, array.length);
   console.log(arr);
   //  const result = array.splice(0, 2);
   //  console.log(result);
    console.log(array);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 39, false, 80),
    new Student('C', 49, true, 90),
    new Student('D', 59, true, 66),
    new Student('E', 69, true, 50)
];
// Q5. find a student with the score 90
        // for(let student of students){
            // if(student.score == 90)
            //     console.log(student);
        // }
{
    // const result = students.find(function (student) {
    //     return student.score === 90;
    // });

    const result = students.find((student) => student.score === 90);

    console.log(result)
}

// Q6. make an array of enrolled students
{
    const arr = students.filter((student) => student.enrolled);
    console.log(arr);
}

//  Q7. make an array containing only the student's scores
{
    const arr = students.map((student) => student.score*4);
    console.log(arr);
}

//  Q8. check if there is a student with the score lower than 50
{
    console.clear();
    const arr = students.some((student) => student.score < 50);
    console.log(arr);

    const arr1 = students.every((student) => student.score < 50);
    console.log(arr1);
}

console.clear();
//  Q9. compute students' average score
{
    const arr = students.reduce((prev, curr) => {
        console.log('-----');
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    }, 0);
}

//  Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const arr = students
        .map((students) => students.score)
        .filter((score) => score >= 50)
        .toString();
    console.log(arr);
}

//  Bonus sort in ascending order
{
    const arr = students.map((student) => (student.score))
        .sort((a, b) => a - b)
        .join();
    console.log(arr);

}