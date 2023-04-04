var eggs = 0;
var fork, chickenPuncher, chickenStabber, Prestige;

var eggsText = document.getElementsByClassName('eggsText');
eggsText.innerHTML = eggs;

fork = 1;
Prestige = 1;
var Quack = new Audio('Quack.mp3');

function giveEggs() {
  eggs += 1 * fork * Prestige;
  Quack.play();
  console.log('adding');
  var eggsText = document.getElementsByClassName('eggsText');
  eggsText.innerHTML = eggs;
}
console.log('Working');
