let rock = document.querySelector('#rock');

rock.addEventListener('click', computerChoiceR);

let paper = document.querySelector('#paper');

paper.addEventListener('click', computerChoiceP);

let scissors = document.querySelector('#scissors');

scissors.addEventListener('click', computerChoiceS);

let humanScore = 0;
let computerScore = 0;


function computerChoiceR() {
  let compnumb = Math.random();
  if (compnumb <= 0.3) {
     alert('You Tied! Computer also selected Rock. Try again.')}
    else if (compnumb > 0.3 && compnumb <= .6) {
     alert('You lose! Computer selected Paper.');
     computerScore ++;
   }
    else {
     alert('YAY! You win! Computer selected Scissors.')
     humanScore ++;
    };
   console.log(`User Score = ${humanScore} vs Computer Score = ${computerScore}`);
    };
  
function computerChoiceP() {
      let compnumb = Math.random();
      if (compnumb <= 0.3) {
         alert('You Tied! Computer also selected Paper. Try again.')}
        else if (compnumb > 0.3 && compnumb <= .6) {
         alert('You lose! Computer selected Scissors.');
         computerScore ++;}
        else {
         alert('YAY! You win! Computer selected Rock.');
         humanScore ++;
        };
   console.log(`User Score = ${humanScore} vs Computer Score = ${computerScore}`);
    
        };
function computerChoiceS() {
          let compnumb = Math.random();
          if (compnumb <= 0.3) {
             alert('You Tied! Computer also selected Scissors. Try again.')}
            else if (compnumb > 0.3 && compnumb <= .6) {
             alert('You lose! Computer selected Rock.');
            computerScore ++;
         }
            else {
             alert('YAY! You win! Computer selected Paper.');
             humanScore ++;
            };
   console.log(`User Score = ${humanScore} vs Computer Score = ${computerScore}`);
        
            };

let score = [`${humanScore},${computerScore}`];