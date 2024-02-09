
var player = document.getElementById('01');
var Opponent = document.getElementById('02');
var counting = 0;
var player_option;
var Computer_option;


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

function Computer_Guess() {
    x = Math.round(Math.random() * 2);
    
    // player.innerHTML = plays[x];
    Opponent.innerHTML = plays[x]
    if ( x == 0) {
        document.getElementById('Computer').style.backgroundColor = 'brown';
        Computer_option = 0
    }
    if ( x == 1) {
        document.getElementById('Computer').style.backgroundColor = 'white';
        Computer_option = 1
    }
    if ( x == 2) {
        document.getElementById('Computer').style.backgroundColor = 'blue';
        Computer_option = 2
    }
    
}

function rock() {

    player.innerHTML = "<div style='height:370px;background-color:brown;'>ROCK</div>";
    player_option = 0;
}
function paper() {
    player.innerHTML = "<div style='height:370px;background-color:white;'>Paper</div>";
    player_option = 1;
}
function Scissor() {
    player.innerHTML = "<div style='height:370px;background-color:blue;'>Scissor</div>";
    player_option = 2;
}

var Outcomes = setTimeout(() => {

    if (Computer_option == player_option) {
        document.write = "<h1>DRAWWWWWWWW!!!</h1>"
    }
    if ((Computer_option == 0) && (player_option == 1)) {
        document.write = "<h1>Player WINNNNNNNN!!!!</h1>"
    }
    if ((Computer_option == 0) && (player_option == 2)) {
        document.write = "<h1>Computer WINNNNNNNN!!!!</h1>"
    }
    if ((Computer_option == 1) && (player_option == 0)) {
        document.write = "<h1>Computer WINNNNNNNN!!!!</h1>"
    }
    if ((Computer_option == 1) && (player_option == 2)) {
        document.write = "<h1>Player WINNNNNNNN!!!!</h1>"
    }
    if ((Computer_option == 2) && (player_option == 0)) {
        document.write = "<h1>Player WINNNNNNNN!!!!</h1>"
    }
    if ((Computer_option == 2) && (player_option == 1)) {
        document.write = "<h1>Computer WINNNNNNNN!!!!</h1>"
    }
    setTimeout(() => {
        location.reload
    }, 3000);
    
}, 1500);

/////////////////MAIN FUNCTION /////////////////////////MAIN FUNCTION/////////////////////////////////////////
var count33 = 5;
var aa = setInterval(() => {
    document.getElementById('counting').innerHTML = `<h1 style="font-size: 250%;">${count33}</h1>`;
    count33 -= 1;

    if (count33 <= 0) {
        Computer_Guess()
        Outcomes
        clearInterval(aa)
    }
}, 750);
