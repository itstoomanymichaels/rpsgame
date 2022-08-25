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
        throw new TypeError("Not a valid choice! Stop cheating!");
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
                return "You lose! Fire beats earth.";
                break;
            case "fire":
                return "It's a draw!";
                break;
            case "water":
                return "You win! Water beats fire.";
                break;
        }
    } else if (computer === "earth") {
        switch (player) {
            case "earth":
                return "It's a draw!";
                break;
            case "fire":
                return "You win! Fire beats earth.";
                break;
            case "water":
                return "You lose! Earth beats water.";
                break;
        }
    } else {
        switch (player) {
            case "earth":
                return "You win! Earth beats water.";
                break;
            case "fire":
                return "You lose! Water beats fire.";
                break;
            case "water":
                return "It's a draw!";
                break;
        }
    }
}

function game() {
    let playerw = 0;
    let computerw = 0;
    for (let i = 0; i < 5; i++) {
        let winner = playRound();
        if (winner.includes("win")) {
            playerw += 1;
            console.log(winner);
        } else if (winner.includes("lose")) {
            computerw += 1;
            console.log(winner);
        } else {
            console.log(winner);
        }
    }
    if (playerw > computerw) {
        console.log(`Congrats! You won the game! The score was
        ${playerw} - ${computerw}.`);
    } else if (playerw < computerw) {
        console.log(`Shucks, you lost! That's too bad. The score was
        ${playerw} - ${computerw}.`);
    } else {
        console.log(`It's a draw! Great choices from both sides! The score was
        ${playerw} - ${computerw}.`);
    }
}
game();
