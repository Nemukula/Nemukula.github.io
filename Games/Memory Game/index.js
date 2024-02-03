////////////////////
///////////////////
/////////////////// Memory Game

let a = document.getElementById('card1');
let b = document.getElementById('card2');
let c = document.getElementById('card3');
let d = document.getElementById('card4');
let e = document.getElementById('card5');
let f = document.getElementById('card6');
let g = document.getElementById('card7');
let h = document.getElementById('card8');
let i = document.getElementById('card9');
let j = document.getElementById('card10');
let k = document.getElementById('card11');
let l = document.getElementById('card12');
let m = document.getElementById('card13');
let n = document.getElementById('card14');
let o = document.getElementById('card15');
let p = document.getElementById('card16');


document.getElementById("card1").addEventListener('click', myfunction);
document.getElementById("card2").addEventListener('click', myfunction);
document.getElementById("card3").addEventListener('click', myfunction);
document.getElementById("card4").addEventListener('click', myfunction);
document.getElementById("card5").addEventListener('click', myfunction);
document.getElementById("card6").addEventListener('click', myfunction);
document.getElementById("card7").addEventListener('click', myfunction);
document.getElementById("card8").addEventListener('click', myfunction);
document.getElementById("card9").addEventListener('click', myfunction);
document.getElementById("card10").addEventListener('click', myfunction);
document.getElementById("card11").addEventListener('click', myfunction);
document.getElementById("card12").addEventListener('click', myfunction);
document.getElementById("card13").addEventListener('click', myfunction);
document.getElementById("card14").addEventListener('click', myfunction);
document.getElementById("card15").addEventListener('click', myfunction);
document.getElementById("card16").addEventListener('click', myfunction);

var playing = [];

var turn = 0

function myfunction (event) {
    const clicked = event.target;

    //clicked.style.backgroundColor = 'Blue';

    playing.push(clicked)

    if (playing.length >= '2') {
        if (playing[0].style.backgroundColor == playing[1].style.backgroundColor) {
            playing = [];
        } else {
            const myTimeout = setTimeout(reloading, 300);
        }
    }

}

var Colors = ['red', 'red', 'orange', 'orange', 'pink', 'pink',  'blue', 'blue', 'yellow', 'yellow', 'black', 'black', 'green', 'green', 'brown', 'brown'];
let Colors2 = [];
var numbers = []
for(let i = 0; i < 100; i++) {
    var x = Math.round(Math.random() * 15);
    if (numbers.includes(x)) {
        console.log('IN');
    } else {
        console.log("Out");
        numbers.push(x);
    }
}

// console.log(numbers)

for(let i = 0; i < numbers.length; i++) {
    Colors2.push(Colors[numbers[i]]);
}
console.log(Colors2)


function card11(x) {
    a.style.backgroundColor = Colors2[1];
}
function card12(x) {
    b.style.backgroundColor = Colors2[2];
}
function card13(x) {
    c.style.backgroundColor = Colors2[3];
}
function card14(x) {
    d.style.backgroundColor = Colors2[4];
}
function card15(x) {
    e.style.backgroundColor = Colors2[5];
}
function card16(x) {
    f.style.backgroundColor = Colors2[6];
}
function card17(x) {
    g.style.backgroundColor = Colors2[7];
}
function card18(x) {
    h.style.backgroundColor = Colors2[8];
}
function card19(x) {
    i.style.backgroundColor = Colors2[9];
}
function card20(x) {
    j.style.backgroundColor = Colors2[10];
}
function card21(x) {
    k.style.backgroundColor = Colors2[11];
}
function card22(x) {
    l.style.backgroundColor = Colors2[12];
}
function card23(x) {
    m.style.backgroundColor = Colors2[13];
}
function card24(x) {
    n.style.backgroundColor = Colors2[14];
}
function card25(x) {
    o.style.backgroundColor = Colors2[15];
}
function card26(x) {
    p.style.backgroundColor = Colors2[0];
}

function reloading() {
    playing[0].style.backgroundColor = 'white';
    playing[1].style.backgroundColor = 'white';
    playing = [];
}

function reloading2() {
    location.reload();
}