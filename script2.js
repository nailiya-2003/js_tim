const prompt = require("prompt-sync")()
const target = 10 + Math.round(Math.random() * 90);
console.log(target)
let guesses = 0;


while(true) {
    guesses++;
const guess = Number(prompt("Enter number between 0-100: "));
if (guess > target) {
    console.log("Your guess is too high");
} else if (guess < target){
    console.log("Your guess is too low");
} else {
    console.log("Your guessed it!");
    break;
}
}
console.log("You guessed the number in", guesses, "tries!")