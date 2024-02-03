
var left = document.getElementById('left');
var right = document.getElementById('right');
var ball = document.getElementById('ball');

ball.style.top = '200px';
ball.style.left = '200px';
left.style.top = '200px';
right.style.top = '200px';
var score_L = 0;
var score_R = 0;

var Ly = '200px';
var Ry = '200px';

/////Movements

document.addEventListener('keydown', function(event) {
    // Check which key was pressed by examining the event object
    switch (event.key) {
        case 'a':
            Ly = left.style.top;
            ///spilt Ly
            Ly = Ly.slice(0, -2);
            //console.log(Ly);
            if (Ly >= 10) {
                Ly = Number(Ly) - 10;
            }
            //console.log(Ly);
            left.style.top = Ly + 'px';
            break;
        case 'z':
            Ly = left.style.top;
            ///spilt Ly
            Ly = Ly.slice(0, -2);
            //console.log(Ly);
            if (Ly < 400) {
                Ly = Number(Ly) + 10;
            }
            //console.log(Ly);
            left.style.top = Ly + 'px';
            break;
        case 'k':
            Ry = right.style.top;
            ///spilt Ly
            Ry = Ry.slice(0, -2);
            if (Ry >= 10) {
                Ry = Number(Ry) - 10;
            }
            right.style.top = Ry + 'px';
            break;
        case 'm':
            Ry = right.style.top;
            ///spilt Ly
            Ry = Ry.slice(0, -2);
            if (Ry < 400) {
                Ry = Number(Ry) + 10;
            }
            right.style.top = Ry + 'px';
            break;
    }
});


///Ball

var dx;
var dy;
dy = 1;
dx = 1;

function startCount() {
    var count = 0;
    setInterval(() => {
        By = ball.style.top;
        By = By.slice(0, -2);
        Bx = ball.style.left;
        Bx = Bx.slice(0, -2);
        if (By >= 490) {
            dy = dy*-1;
        }
        if (By <= 0) {
            dy = dy*-1;
        }

        if (Bx >= 650) {
            if ((By + 20 > Ry) & (By < Ry + 100)) {
                console.log("I hit it");
            } else {
                score_L += 1;
                document.getElementById('score').innerHTML = "Left: "+(score_L) +" || "+(score_R)+" :Right";
            }
            Bx = 340;
            By = 245;
            dx = dx*-1;
        }
        if (Bx <= 70) {
            if ((By + 20 > Ly) & (By < Ly + 100)) {
                console.log("I hit it");
            } else {
                score_R += 1;
                document.getElementById('score').innerHTML = "Left: "+(score_L) +" || "+(score_R)+" :Right";
            }
            Bx = 350;
            By = 240;
            dx = dx*-1;
        }
        // console.log(Bx, By, Ly, Ry);
        By = Number(By) + dy;
        Bx = Number(Bx) + dx;

        ball.style.top = By + 'px';
        ball.style.left = Bx + 'px';

    }, 1);
}

startCount();
