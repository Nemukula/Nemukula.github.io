//I wiil need jquery

// var s = "<p>hello</p>";

// $(document).ready(function(){
//     $("#02").append(s);
//   });  

var head = document.getElementById('01');

head.style.position = 'absolute';
head.style.top = '450px';
head.style.left = '0px';

var y = head.style.top;
var x = head.style.left;

// console.log(x, y);
dx = 1;
dy = 0;

var body = [];
body.push(head)

setInterval(() => {
    for (let i = 1; i < length.body; i++) {
        body[0];
    }
    x = x.slice(0, -2);
    y = y.slice(0, -2);
    // console.log(y);

    if (y > 490) {
        y = 0
    }
    if (y < 0) {
        x = 489
    }
    if (x > 490) {
        x = 0
    }
    if (x < 0) {
        x = 489
    }

    x = Number(x) + Number(dx);
    y = Number(y) + Number(dy);

    x = x + 'px'
    y = y + 'px'

    head.style.top = y;
    head.style.left = x;
}, 8);

document.onkeydown = function(event){
    switch(event.keyCode) {
        case 37: // left arrow
        dx = -1;
        dy = 0;
        break;
        case 40:
        dy = 1;
        dx = 0;
        break;
        case 38:
            dy = -1;
            dx = 0;
            break;
        case 39:
            dx = 1;
            dy = 0;
            break;
    }
};