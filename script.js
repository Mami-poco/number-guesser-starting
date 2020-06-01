let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random()*10)
}

const compareGuesses = (humanGuess,comGuess,target) => {
  let humanDiff = Math.abs(target - humanGuess);
  let comDiff = Math.abs(target - comGuess);

  if(humanDiff<=comDiff){
    return true;
  }else {
    return false
  }
}

const updateScore = (string) => {
  if(string === "human"){
    return humanScore++
  }else {
    return computerScore++
  }
}

const advanceRound = () =>{
  return currentRoundNumber++
}