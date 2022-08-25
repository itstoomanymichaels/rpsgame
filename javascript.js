function getComputerChoice() {
    let choice = Math.ceil(Math.random() * 3);
    if (choice === 1) {
        console.log("Earth!");
    } else if (choice === 2) {
        console.log("Water!");
    } else {
        console.log("Fire!");
    }
}

getComputerChoice();