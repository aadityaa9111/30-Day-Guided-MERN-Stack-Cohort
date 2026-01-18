"use strict";

// 1. Loop from 1 to 50 and print "even" for even numbers
for (let number = 1; number <= 50; number++) {
    if (number % 2 === 0) {
        console.log(number, "even");
    } else {
        console.log(number);
    }
}

// 2. Array of numbers and function to return only even numbers
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getEvenNumbers = (numbers) => {
    return numbers.filter((num) => num % 2 === 0);
};

console.log("Even numbers:", getEvenNumbers(numbersArray));

// 3. Student object
const student = {
    name: "Aditya",
    age: 21,
    skills: ["HTML", "CSS", "JavaScript"]
};

// 4. Add a new skill
student.skills.push("React");

// 5. Print all keys and values of the object
for (const key in student) {
    if (student.hasOwnProperty(key)) {
        console.log(`${key}:`, student[key]);
    }
}
