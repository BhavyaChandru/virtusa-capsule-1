"use strict";
function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
let number = 17;
let result = isPrime(number);
if (result) {
    console.log(number + " is a prime number.");
}
else {
    console.log(number + " is not a prime number.");
}
