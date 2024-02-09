var bird = document.getElementById('bird');
var container = document.getElementById('container');
bird.style.left = '100px';
bird.style.top = '100px';
var dx = 5;
var dy = 5;

var x = bird.style.left;
var y = bird.style.top;

var score = 0;
var dx = 1;
var count = 0;

document.addEventListener('keydown', (event) => {
    ///Function
    if (event.keyCode == 40) {
        y = y.slice(0, -2)
        y = Number(y) + 25;
        y = y + "px";
        bird.style.top  = y;

    } else if (event.keyCode == 38) {
        y = y.slice(0, -2)
        y = Number(y) - 25;
        y = y + "px";
        bird.style.top  = y;
    }

    

});

var m1 = document.getElementById('01');
var m2 = document.getElementById('02');
var m3 = document.getElementById('03');
var m4 = document.getElementById('04');

m1.style.position = 'absolute';
m2.style.position = 'absolute';
m3.style.position = 'absolute';
m4.style.position = 'absolute';

m1.style.bottom = '0px';
m2.style.bottom = '0px';
m3.style.bottom = '0px';
m4.style.top = '0px';

m1.style.left = (window.screen.width*0.8)*0.25 + 'px';
m2.style.left = (window.screen.width*0.8)*0.5 + 'px';
m3.style.left = (window.screen.width*0.8)*0.75 + 'px';
m4.style.left = (window.screen.width*0.8) + 'px';

var xx1 = m1.style.left;
var xx2 = m2.style.left;
var xx3 = m3.style.left;
var xx4 = m4.style.left;

m1.style.height = '150px';
m2.style.height = '250px';
m3.style.height = '210px';
m4.style.height = '100px';

const heights = ['25px', '265px', '140px', '350px'];

function mountains() {

    xx1 = xx1.slice(0, -2);
    xx2 = xx2.slice(0, -2);
    xx3 = xx3.slice(0, -2);
    xx4 = xx4.slice(0, -2);

    xx1 = Number(xx1) - 10;
    xx2 = Number(xx2) - 10;
    xx3 = Number(xx3) - 10;
    xx4 = Number(xx4) - 10;

    xx1 = xx1 + "px";
    xx2 = xx2 + "px";
    xx3 = xx3 + "px";
    xx4 = xx4 + "px";

    m1.style.left = xx1;
    m2.style.left = xx2;
    m3.style.left = xx3;
    m4.style.left = xx4;

    if (Number(xx1.slice(0, -2)) < 0) {
        xx1 = window.screen.width*0.8 + 'px';
        m1.style.left = xx1;

        let height1 = Math.round(Math.random() * 3) + 1;

        m1.style.height = heights[height1];

        score += 1;
    }
    if (Number(xx2.slice(0, -2)) < -5) {
        xx2 = window.screen.width*0.8 + 'px';
        m2.style.left = xx2;

        let height1 = Math.round(Math.random() * 3) + 1;

        m2.style.height = heights[height1];

        score += 1;
    }
    if (Number(xx3.slice(0, -2)) < -5) {
        xx3 = window.screen.width*0.8 + 'px';
        m3.style.left = xx3;

        let height1 = Math.round(Math.random() * 3) + 1;

        m3.style.height = heights[height1];

        score += 1;
    }
    if (Number(xx4.slice(0, -2)) < -5) {
        xx4 = window.screen.width*0.8 + 'px';
        m4.style.left = xx4;

        let height1 = Math.round(Math.random() * 3) + 1;

        m4.style.height = heights[height1];

        score += 1;
    }

    document.getElementById('score').innerHTML = score;

    count += 1;
    if (count % 100000 == 0) {
        dx += 1
    }

}

function bird_movement() {
    y = y.slice(0, -2)
    y = Number(y) + 15;
    y = y + "px";
    bird.style.top  = y;

}

/////////////////MAIN FUNCTION//////////////////MAIN FUNCTION///////////////MAIN FUNCTION////////

var count33 = 0;
setInterval(() => {
    if (count33 % 3 == 0) {
        bird_movement()
    }
    mountains()

    y = y.slice(0, -2);
    y = Number(y) 
    //console.log(y, window.screen.height, 'YS');

    /////////////////////////////////BIRD BOUNDARIES//////////////////BIRD BOUNDARIES//////////////////////////////
    if (y >= (window.screen.height*0.6)) {
        setTimeout(() => {container.style.backgroundColor = 'red'}, 500)
        setTimeout(() => {
            document.write(`<h1>YOU LOSS</h1><h1>Score: ${score}</h1>!!`)
        }, 1500)
        setTimeout(() => {
            location.reload()
        }, 3000);

    }
    if (y < 0) {
        setTimeout(() => {container.style.backgroundColor = 'red'}, 500)
        setTimeout(() => {
            document.write(`<h1>YOU LOSS</h1><h1>Score: ${score}</h1>!!`)
        }, 1500)
        setTimeout(() => {
            location.reload()
        }, 3000);
    }

    ///////////////COLLUTIONS///////////////////////////COLLUTIONS//////////////////////////
    if (Number((xx2.slice(0, -2) > 95) && (xx2.slice(0, -2) < 135)) && ((window.screen.height*0.65 - Number(m1.style.height.slice(0, -2))) < y)) {
        setTimeout(() => {container.style.backgroundColor = 'red'}, 500)
        setTimeout(() => {
            document.write(`<h1>YOU LOSS</h1><h1>Score: ${score}</h1>!!`)
        }, 1500)
        setTimeout(() => {
            location.reload()
        }, 3000);
    }
    if (Number((xx2.slice(0, -2) > 95) && (xx2.slice(0, -2) < 135)) && ((window.screen.height*0.65 - Number(m2.style.height.slice(0, -2))) < y)) {
        setTimeout(() => {container.style.backgroundColor = 'red'}, 500)
        setTimeout(() => {
            document.write(`<h1>YOU LOSS</h1><h1>Score: ${score}</h1>!!`)
        }, 1500)
        setTimeout(() => {
            location.reload()
        }, 3000);
    }
    if (Number((xx2.slice(0, -2) > 95) && (xx2.slice(0, -2) < 135)) && ((window.screen.height*0.65 - Number(m3.style.height.slice(0, -2))) < y)) {
        setTimeout(() => {container.style.backgroundColor = 'red'}, 500)
        setTimeout(() => {
            document.write(`<h1>YOU LOSS</h1><h1>Score: ${score}</h1>!!`)
        }, 1500)
        setTimeout(() => {
            location.reload()
        }, 3000);
    }
    if (Number((xx4.slice(0, -2)) == 100) && (Number(m4.style.height.slice(0, -2)) > y)) {
        setTimeout(() => {container.style.backgroundColor = 'red'}, 500)
        setTimeout(() => {
            document.write(`<h1>YOU LOSS</h1><h1>Score: ${score}</h1>!!`)
        }, 1500)
        setTimeout(() => {
            location.reload()
        }, 3000);
    }

    y = y + "px";
    count33 += 1;}
    ,75)
