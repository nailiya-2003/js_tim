const prompt = require("prompt-sync")();

const answer = prompt("would you go play with me? (y/n)");
if (answer.toLowerCase() === "y") {
    const answer2 = prompt("please input the first act: (left/right)")
    if (answer2 === "left") {
        console.log ("you lose your point");
    }
    else if (answer2 === "right") {
        const answer3 = prompt("oh great! check the button: (check) or quit(q)");
        if (answer3 === "check") {
            console.log ("Awesome!! you won 3000 points gold");
        } else if (answer3 === "q") {
            console.log("bye");
            
        } 
    }
} else {
    console.log("bye");
}