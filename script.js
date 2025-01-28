console.log("Lets play a game");

//Computer Choice
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// console.log("Computer Choice:", getComputerChoice());

//Human Choice
let userInput = prompt(
  "Enter your choice (rock, paper, or scissors):"
).toLowerCase();
function getHumanChoice() {
  while (
    userInput !== "rock" &&
    userInput !== "paper" &&
    userInput !== "scissors"
  ) {
    userInput = prompt(
      "Invalid choice. Please enter rock, paper, or scissors:"
    ).toLowerCase();
  }

  return userInput;
}

// console.log("Human choice:", getHumanChoice());

//player score variables

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice().toLowerCase();
  computerChoice = getComputerChoice().toLowerCase();
  

  if (humanChoice === computerChoice) {
    return "IT'S A TIE";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(`you win!, ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`you loose!, ${computerChoice} beats ${humanChoice}`);
    humanScore++;
  }

  return humanScore, computerScore;
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);
// console.log(`Scores -> Human: ${humanScore}, Computer: ${computerScore}`);



//play game

function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Scores after round -> Human: ${humanScore}, Computer: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("Congratulations! You are the overall winner!");
  } else if (humanScore < computerScore) {
    console.log("Better luck next time!!");
  } else{
    console.log("it's a draw");
  }
}
playGame();

