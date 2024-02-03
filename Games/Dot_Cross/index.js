
/*

function card11() {
    var x = document.getElementById("card1");
    x.style.backgroundColor = 'red'
}
function card12() {
    var x = document.getElementById("card2");
    x.style.backgroundColor = 'red'
}
function card13() {
    var x = document.getElementById("card3");
    x.style.backgroundColor = 'red'
}
function card14() {
    var x = document.getElementById("card4");
    x.style.backgroundColor = 'red'
}
function card15() {
    var x = document.getElementById("card5");
    x.style.backgroundColor = 'red'
}
function card16() {
    var x = document.getElementById("card6");
    x.style.backgroundColor = 'red'
}
function card17() {
    var x = document.getElementById("card7");
    x.style.backgroundColor = 'red'
}
function card18() {
    var x = document.getElementById("card8");
    x.style.backgroundColor = 'red'
}
function card19() {
    var x = document.getElementById("card9");
    x.style.backgroundColor = 'red'
}

*/

var aa = document.getElementById('card1');
var ab = document.getElementById('card2');
var ac = document.getElementById('card3');
var ad = document.getElementById('card4');
var ae = document.getElementById('card5');
var af = document.getElementById('card6');
var ag = document.getElementById('card7');
var ah = document.getElementById('card8');
var ai = document.getElementById('card9');


document.getElementById('card1').addEventListener('click', myfunction);
document.getElementById('card2').addEventListener('click', myfunction);
document.getElementById('card3').addEventListener('click', myfunction);
document.getElementById('card4').addEventListener('click', myfunction);
document.getElementById('card5').addEventListener('click', myfunction);
document.getElementById('card6').addEventListener('click', myfunction);
document.getElementById('card7').addEventListener('click', myfunction);
document.getElementById('card8').addEventListener('click', myfunction);
document.getElementById('card9').addEventListener('click', myfunction);

aa.style.backgroundColor = 'white';
ab.style.backgroundColor = 'white';
ac.style.backgroundColor = 'white';
ad.style.backgroundColor = 'white';
ae.style.backgroundColor = 'white';
af.style.backgroundColor = 'white';
ag.style.backgroundColor = 'white';
ah.style.backgroundColor = 'white';
ai.style.backgroundColor = 'white';

turn = 0
var clicked;
function myfunction(event) {
    clicked = event.target;
    turn += 1;
    if (turn % 2 == 0){
        clicked.style.backgroundColor ='red';
    } else {
        clicked.style.backgroundColor='blue';
    }

    // setTimeout(document.write("hello"), 750000)
    verify();

    console.log(aa.style.backgroundColor);
    console.log(ac.style.backgroundColor);
    console.log(ad.style.backgroundColor)
    //verify()

    var player = document.getElementById('player');
    player.innerHTML = "Player "+((turn % 2)+1)+" turn";

}
var counter1 = 0;
function verify() {
    if (((aa.style.backgroundColor === ab.style.backgroundColor) & (ab.style.backgroundColor === ac.style.backgroundColor)) & (ac.style.backgroundColor != 'white')) {
        if (counter1 == 1) {
            location.reload()
        }
        counter1 += 1;
        if (turn % 2 == 0){
            document.body.style.backgroundColor = "red"
        } else {
            document.body.style.backgroundColor = "blue"
        }
        
    }else if (((aa.style.backgroundColor === ae.style.backgroundColor) & (ae.style.backgroundColor === ai.style.backgroundColor)) & (ai.style.backgroundColor != 'white')) {
        if (counter1 == 1) {
            location.reload()
        }
        counter1 += 1;
        if (turn % 2 == 0){
            document.body.style.backgroundColor = "red"
        } else {
            document.body.style.backgroundColor = "blue"
        }
    }else if (((aa.style.backgroundColor === ad.style.backgroundColor) & (ad.style.backgroundColor === ag.style.backgroundColor)) & (ag.style.backgroundColor != 'white')) {
        if (counter1 == 1) {
            location.reload()
        }
        counter1 += 1;
        if (turn % 2 == 0){
            document.body.style.backgroundColor = "red"
        } else {
            document.body.style.backgroundColor = "blue"
        }
    }else if (((ab.style.backgroundColor === ae.style.backgroundColor) & (ae.style.backgroundColor === ah.style.backgroundColor)) & (ah.style.backgroundColor != 'white')) {
        if (counter1 == 1) {
            location.reload()
        }
        counter1 += 1;
        if (turn % 2 == 0){
            document.body.style.backgroundColor = "red"
        } else {
            document.body.style.backgroundColor = "blue"
        }
    }else if (((ac.style.backgroundColor === af.style.backgroundColor) & (af.style.backgroundColor === ai.style.backgroundColor)) & (ai.style.backgroundColor != 'white')) {
        if (counter1 == 1) {
            location.reload()
        }
        counter1 += 1;
        if (turn % 2 == 0){
            document.body.style.backgroundColor = "red"
        } else {
            document.body.style.backgroundColor = "blue"
        }
    }else if (((ad.style.backgroundColor === ae.style.backgroundColor) & (ae.style.backgroundColor === af.style.backgroundColor)) & (af.style.backgroundColor != 'white')) {
        if (counter1 == 1) {
            location.reload()
        }
        counter1 += 1;
        if (turn % 2 == 0){
            document.body.style.backgroundColor = "red"
        } else {
            document.body.style.backgroundColor = "blue"
        }
    }else if (((ag.style.backgroundColor === ah.style.backgroundColor) & (ah.style.backgroundColor === ai.style.backgroundColor)) & (ai.style.backgroundColor != 'white')) {
        if (counter1 == 1) {
            location.reload()
        }
        counter1 += 1;
        if (turn % 2 == 0){
            document.body.style.backgroundColor = "red"
        } else {
            document.body.style.backgroundColor = "blue"
        }
    }else if (((ag.style.backgroundColor === ae.style.backgroundColor) & (ae.style.backgroundColor === ac.style.backgroundColor)) & (ac.style.backgroundColor != 'white')) {
        if (counter1 == 1) {
            location.reload()
        }
        counter1 += 1;
        if (turn % 2 == 0){
            document.body.style.backgroundColor = "red"
        } else {
            document.body.style.backgroundColor = "blue"
        }
    } 
}

function loading() {
    location.reload();
}