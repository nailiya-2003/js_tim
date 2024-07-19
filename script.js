const prompt = require("prompt-sync")()
console.log("Welcome to our computer quiz!")
let correctAnswer = 0;
let totalScore = 3;
const answer1 = prompt("What is main brain of computer?");
const correctAnswer1 = "CPU";
if (answer1.toUpperCase() === correctAnswer1) {
console.log('You got it right!')
correctAnswer++;
} else {
    console.log('You got it wrong...')
}
const answer2 = prompt("What is the better: 3090ti or 4060?");
const correctAnswer2 = "3090ti";
if (answer2.toLowerCase() === correctAnswer2) {
console.log('You got it right!');
correctAnswer++;
} else {
    console.log('You got it wrong...')
}
const answer3 = prompt("What is the recommend RAM oF 2023?");
const correctAnswer3 = "16GB";
if (answer3.toUpperCase() ===  correctAnswer3) {
console.log('You got it right!')
correctAnswer++;
} else {
    console.log('You got it wrong...')
}
let percent = Math.round((correctAnswer / totalScore) * 100);

console.log("You've got,", percent.toString()+"%");