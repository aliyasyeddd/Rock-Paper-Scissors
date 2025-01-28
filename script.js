
console.log("Lets play a game");

//Computer Choice
function getComputerChoice() {;
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0){
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors" ;
  }
}

console.log("Computer Choice:",getComputerChoice());

//Human Choice
function getHumanChoice() {
  let userInput = prompt("Enter your choice (rock, paper, or scissors):");
  //console.log(userInput);
  let userChoice = userInput.toLowerCase();

  while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
      userChoice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
  }

  return userChoice;
}

console.log("Human choice:", getHumanChoice());


 //player score variables

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  // humanChoice = getHumanChoice().toLowerCase();
  // computerChoice = getComputerChoice().toLowerCase();
  console.log(getHumanChoice());

  if (humanChoice === computerChoice) {
    return "IT'S A TIE";
  } else if (humanChoice === "rock" && computerChoice === "scissors" || 
    humanChoice === "scissors" && computerChoice === "paper" ||
     humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      console.log(`you win!, ${humanChoice} beats ${computerChoice}`);
     } else {
      computerScore++;
      console.log(`you loose!, ${computerChoice} beats ${humanChoice}`)
     }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));



