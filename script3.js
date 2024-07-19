const prompt = require("prompt-sync")();
let wins = 0;
let losses = 0;
let ties = 0;
while (true) {
    const playerChoice = prompt("Enter rock, paper or scissors (or q to quit): ");
    if (playerChoice.toLocaleLowerCase() === "q") {
        break;
    }
    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        console.log("Enter the valid playerChoice");
        continue;
    }
    const choiceIndex = Math.round(Math.random() * 2);
    const choices = ["rock", "scissors", "paper"];
    const computerChoice = choices[choiceIndex];
    console.log("Your computer chose: ", computerChoice)
    console.log(computerChoice);
    if (computerChoice === playerChoice) {
         ties++;
         console.log("Draw!")
    }
    else if (computerChoice === "rock" && playerChoice === "paper",
             computerChoice === "paper" && playerChoice === "scissors",
             computerChoice === "scissors" && playerChoice === "rock"
    ) {
            console.log("You won!");
            wins++;
    } else {
           console.log("you lost!")
           losses++;
    }
}
console.log("Your wins:", wins, "losses:", losses, "and draws:", ties);