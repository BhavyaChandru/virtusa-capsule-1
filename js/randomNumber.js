const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter minimum number: ", function(min) {

    input.question("Enter maximum number: ", function(max) {

        min = Number(min);
        max = Number(max);

        if (min > max) {
            console.log("Minimum should be less than maximum.");
        } else {

            let randomNumber =
                Math.floor(Math.random() * (max - min + 1)) + min;

            console.log("Random Number: " + randomNumber);
        }

        input.close();
    });
});