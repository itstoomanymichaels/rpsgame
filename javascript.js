function getComputerChoice() {
    let choice = Math.ceil(Math.random() * 3);
    if (choice === 1) {
        return "earth";
    } else if (choice === 2) {
        return "water";
    } else {
        return "fire";
    }
}

function playerSelection() {
    let choice = prompt("Which element do you choose?").toLowerCase();
    if (choice !== "earth" && choice !== "water" && choice !== "fire") {
        console.log("Not a valid choice! Stop cheating!");
    } else {
        return choice;
    }
}

function playRound() {
    const computer = getComputerChoice();
    const player = playerSelection();
    if (computer === "fire") {
        switch (player) {
            case "earth":
                console.log("You lose! Fire beats earth.");
                break;
            case "fire":
                console.log("It's a draw!");
                break;
            case "water":
                console.log("You win! Water beats fire.");
                break;
        }
    } else if (computer === "earth") {
        switch (player) {
            case "earth":
                console.log("It's a draw!");
                break;
            case "fire":
                console.log("You win! Fire beats earth.");
                break;
            case "water":
                console.log("You lose! Earth beats water.");
                break;
        }
    } else {
        switch (player) {
            case "earth":
                console.log("You win! Earth beats water.");
                break;
            case "fire":
                console.log("You lose! Water beats fire.");
                break;
            case "water":
                console.log("It's a draw!");
                break;
        }
    }
}

playRound();
/*
function game() {
    let playerw = 0;
    let computerw = 0;
    for (let i = 0; i < 5; i++) {
        let winner = playRound();
        if (winner.contains("win")) {
            playerw += 1;
        } else if (winner.contains("lose")) {
            computerw += 1;
        }
    }
    if (playerw > computerw) {
        console.log("Congrats! You won the game!");
    } else if (playerw < compueterw) {
        console.log("Shucks, you lost! That's too bad.");
    } else {
        console.log("It's a draw! Great choices from both sides!");
    }
}

game();
*/