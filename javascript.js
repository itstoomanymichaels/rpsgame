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

function ewf(computerChoice, playerChoice) {
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