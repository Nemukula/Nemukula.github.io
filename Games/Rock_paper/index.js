
var player = document.getElementById('01');
var Opponent = document.getElementById('02');


player.style.fontSize = "250%";
Opponent.style.fontSize = "250%";

// var R = document.getElementById('001');
// var P = document.getElementById('002');
// var S = document.getElementById('003');

// P.style.backgroundColor = 'white';
// R.style.backgroundColor = 'brown';
// P.style.backgroundColor = 'blue';

var plays = ['Rock', 'Paper', 'Scissor'];

var count = Math.round(Math.random()*10);

function running() {
    x = Math.round(Math.random() * 2);
    
    // player.innerHTML = plays[x];
    Opponent.innerHTML = plays[x]
    
}

function rock() {
    player.innerHTML = "<div style='height:370px;background-color:brown;'>ROCK</div>";
    running();
}
function paper() {
    player.innerHTML = "<div style='height:370px;background-color:white;'>Paper</div>";
    running();
}
function Scissor() {
    player.innerHTML = "<div style='height:370px;background-color:blue;'>Scissor</div>";
    running();
}

