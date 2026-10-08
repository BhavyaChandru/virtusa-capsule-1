function countOccurrences(
    numbers: number[],
    target: number
): number {

    let count: number = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            count++;
        }
    }

    return count;
}

let numbers: number[] = [10, 20, 10, 30, 10, 40, 10];

let target: number = 10;

let result: number = countOccurrences(numbers, target);

console.log("Array: " + numbers);
console.log("Element: " + target);
console.log("Occurrences: " + result);