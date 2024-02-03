
var bird = document.getElementById('bird');

bird.style.left = '100px';
bird.style.top = '20%';
var dx = 1;
var dy = 1;

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

    // y = y.slice(0, -1);
    // y = Number(y) 

    // if (y > 100) {
    //     var count2  = 0;
    //     const aaa = setInterval(() => {
    //         count2 += 1;
    //         document.write("Game Over");
    //         if (count2 > 200) {
    //             location.reload();
    //         }
    //         setTimeout(() => {
                
    //         }, );
    //     }, 20);
    // }else if (y < 0) {
    //     var count2  = 0;
    //     const aab = setInterval(() => {
    //         count2 += 1;
    //         document.write("Game Over");
    //         if (count2 > 200) {
    //             location.reload();
    //             clearInterval(aab)
    //         }
    //     }, 20);
    // }
    // y = y + "%";

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

m1.style.left = '25%';
m2.style.left = '50%';
m3.style.left = '75%';
m4.style.left = '100%';

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

    xx1 = xx1.slice(0, -1);
    xx2 = xx2.slice(0, -1);
    xx3 = xx3.slice(0, -1);
    xx4 = xx4.slice(0, -1);

    xx1 = Number(xx1) - dx;
    xx2 = Number(xx2) - dx;
    xx3 = Number(xx3) - dx;
    xx4 = Number(xx4) - dx;

    xx1 = xx1 + "%";
    xx2 = xx2 + "%";
    xx3 = xx3 + "%";
    xx4 = xx4 + "%";

    m1.style.left = xx1;
    m2.style.left = xx2;
    m3.style.left = xx3;
    m4.style.left = xx4;

    if (Number(xx1.slice(0, -1)) < -5) {
        console.log(xx1.slice(0, -1))
        xx1 = '100%';
        m1.style.left = xx1;

        let height1 = Math.round(Math.random() * 3) + 1;

        m1.style.height = heights[height1];

        score += 1;
    }
    if (Number(xx2.slice(0, -1)) < -5) {
        console.log(xx2.slice(0, -1))
        xx2 = '100%';
        m2.style.left = xx2;

        let height1 = Math.round(Math.random() * 3) + 1;

        m2.style.height = heights[height1];

        score += 1;
    }
    if (Number(xx3.slice(0, -1)) < -5) {
        console.log(xx3.slice(0, -1))
        xx3 = '100%';
        m3.style.left = xx3;

        let height1 = Math.round(Math.random() * 3) + 1;

        m3.style.height = heights[height1];

        score += 1;
    }
    if (Number(xx4.slice(0, -1)) < -5) {
        console.log(xx4.slice(0, -1))
        xx4 = '100%';
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


setInterval(bird_movement, 250);
setInterval(mountains, 75);