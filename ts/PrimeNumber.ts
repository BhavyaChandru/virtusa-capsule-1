function isPrime(number: number): boolean {
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

let number: number = 17;

let result: boolean = isPrime(number);

if (result) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}