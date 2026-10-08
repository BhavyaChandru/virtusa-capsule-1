"use strict";
function countOccurrences(numbers, target) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            count++;
        }
    }
    return count;
}
let numbers = [10, 20, 10, 30, 10, 40, 10];
let target = 10;
let result = countOccurrences(numbers, target);
console.log("Array: " + numbers);
console.log("Element: " + target);
console.log("Occurrences: " + result);
