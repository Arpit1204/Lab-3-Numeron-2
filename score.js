// Iteration 8: Making scoreboard functional

document.getElementById('score-board').innerHTML = localStorage.getItem('score');


var playAgain =  document.getElementById('play-again-button');

playAgain.onclick =() =>{
   window.location.href = "./game.html";
}