// Task 1.1: Create a function filterEvenNumbers that uses filter() to return only even numbers


// Task 1.2: Create a function doubleNumbers that uses map() to double each number


// Task 1.3: Create a function sumArray that uses reduce() to sum all numbers


// Task 2.1: Create a function createCounter that returns a function incrementing a counter


// Task 2.2: Create a function createMultiplier that returns a function multiplying by a given number


// Task 3.1: Create an async function fetchUserData that returns { id: 1, name: "John Doe" } after 100ms


// Task 3.2: Create an async function processData that waits 50ms then returns number * 2


// Task 4.1: Create a class Person with constructor(name, age) and method introduce()


// Task 4.2: Create a class Rectangle with constructor(width, height) and method getArea()


// Task 5.1: Create a function getFirstAndLast that uses destructuring to return {first, last}


// Export all functions and classes for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        filterEvenNumbers,
        doubleNumbers,
        sumArray,
        createCounter,
        createMultiplier,
        fetchUserData,
        processData,
        Person,
        Rectangle,
        getFirstAndLast
    };
}
