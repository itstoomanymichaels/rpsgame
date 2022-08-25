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


getComputerChoice();
playerSelection();