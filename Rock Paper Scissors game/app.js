let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    // console.log("game was draw");
    msg.innerText = "Game Draw. Play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Win!");
        msg.innerText = 'You Win! Your ${userChoice} beats ${computerChoice}';
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        // console.log("You Lose");
        msg.innerText = 'You Lose ${computerChoice} beats Your ${userChoice}';
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    //Generate computer choice - this is called modular.
    const computerChoice = genComputerChoice();
    // console.log("computer choice = ", computerChoice);

    if(userChoice === computerChoice) {
        // draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //paper, scissors
            userWin = computerChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock, scissors
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = computerChoice === "rock" ?  false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});
// in this basically sare choices se hum ek ek individual choice div nikal rhe hai toh har individual div hmare pass aa jayega infact iss individual div ko yahan par console.log krke print bhi kar sakte hai.