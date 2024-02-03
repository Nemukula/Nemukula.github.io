
var Car = document.getElementById('Car');
var L1 = document.getElementById('L1');
var L2 = document.getElementById('L2');
var L3 = document.getElementById('L3');
var L4 = document.getElementById('L4');
var L5 = document.getElementById('L5');
var L6 = document.getElementById('L6');
var L7 = document.getElementById('L7');
var L8 = document.getElementById('L8');
var L9 = document.getElementById('L9');
var L10 = document.getElementById('L10');
var L11 = document.getElementById('L11');
var L12 = document.getElementById('L12');
var Score = document.getElementById('score');

Car.style.left = '120px';
var Cx = Car.style.left;
Car.style.top = "320px";
Cx = "120px";
var Cy = Car.style.top;
var object = document.getElementById('object');
object.style.left = '18px'
object.style.top = '1px'
var Ox = object.style.left;
var Oy = object.style.top;
var count22 = 0;
var score = 0;

function obj() {
    //Obstacles/rocks movements
    //console.log(Oy, Ox);
    Oy = Oy.slice(0, -2);
    Oy = parseInt(Oy)+2

    if (Oy > 350) {
        Oy = 0;
        Ox = Math.round( Math.random() * 3 ) * 90 +  30 + "px";
        console.log(Ox);
        object.style.left = Ox
        score += 1;
    }



    object.style.top = Oy + 'px'
    
    Oy = object.style.top

    Score.innerText = "Score: "+score;
}

document.addEventListener('keydown', function(event) {
    // Check if the pressed key is 'A', 'B', or 'V'
    if (event.key === 'ArrowLeft') {
        if (Car.style.left != '30px') {
            Cx = Car.style.left;
            Cx = Cx.slice(0, -2);
            Cx = parseInt(Cx) - 90;
            Cx = Cx + "px";
            Car.style.left = Cx;
        }
        
    }
    if (event.key === 'ArrowRight') {
        if (Car.style.left != '300px') {
            Cx = Car.style.left;
            Cx = Cx.slice(0, -2);
            Cx = parseInt(Cx) + 90;
            Cx = Cx + "px";
            Car.style.left = Cx;
        }
    }
});

L1.style.top = '10px'
L2.style.top = '110px'
L3.style.top = '210px'
L4.style.top = '310px'
L5.style.top = '10px'
L6.style.top = '110px'
L7.style.top = '210px'
L8.style.top = '310px'
L9.style.top = '10px'
L10.style.top = '110px'
L11.style.top = '210px'
L12.style.top = '310px'

setInterval(function move() {

    var L21 = L1.style.top.slice(0, -2);
    var L22 = L2.style.top.slice(0, -2);
    var L23 = L3.style.top.slice(0, -2);
    var L24 = L4.style.top.slice(0, -2);
    var L25 = L5.style.top.slice(0, -2);
    var L26 = L6.style.top.slice(0, -2);
    var L27 = L7.style.top.slice(0, -2);
    var L28 = L8.style.top.slice(0, -2);
    var L29 = L9.style.top.slice(0, -2);
    var L30 = L10.style.top.slice(0, -2);
    var L31 = L11.style.top.slice(0, -2);
    var L32 = L12.style.top.slice(0, -2);

    L21 = Number(L21) + 1
    L22 = Number(L22) + 1
    L23 = Number(L23) + 1
    L24 = Number(L24) + 1
    L25 = Number(L25) + 1
    L26 = Number(L26) + 1
    L27 = Number(L27) + 1
    L28 = Number(L28) + 1
    L29 = Number(L29) + 1
    L30 = Number(L30) + 1
    L31 = Number(L31) + 1
    L32 = Number(L32) + 1
    obj()
    obj()

    if (L21 > 390) {
        L21 = 0
    }
    if (L22 > 390) {
        L22 = 0
    }
    if (L23 > 390) {
        L23 = 0
    }
    if (L24 > 390) {
        L24 = 0
    }
    if (L25 > 390) {
        L25 = 0
    }
    if (L26 > 390) {
        L26 = 0
    }
    if (L27 > 390) {
        L27 = 0
    }
    if (L28 > 390) {
        L28 = 0
    }
    if (L29 > 390) {
        L29 = 0
    }
    if (L30 > 390) {
        L30 = 0
    }
    if (L31 > 390) {
        L31 = 0
    }
    if (L32 > 390) {
        L32 = 0
    }
    L1.style.top = L21 + 'px';
    L2.style.top = L22 + 'px'
    L3.style.top = L23 + 'px';
    L4.style.top = L24 + 'px'
    L5.style.top = L25 + 'px'
    L6.style.top = L26 + 'px'
    L7.style.top = L27 + 'px'
    L8.style.top = L28 + 'px'
    L9.style.top = L29 + 'px'
    L10.style.top= L30 + 'px'
    L11.style.top= L31 + 'px'
    L12.style.top= L32 + 'px'

    L21 = L21 + 'px';
    L22 = L22 + 'px'
    L23 = L23 + 'px';
    L24 = L24 + 'px'
    L25 = L25 + 'px'
    L26 = L26 + 'px'
    L27 = L27 + 'px'
    L28 = L28 + 'px'
    L29 = L29 + 'px'
    L30 = L30 + 'px'
    L31 = L31 + 'px'
    L32 = L32 + 'px'

    ///////Checking collision
    Oy = Oy.slice(0, -2);
    Ox = Ox.slice(0, -2);
    console.log(Cx, "My_Cx")
    Cx = Cx.slice(0, -2);
    if (Oy > 320) {
        console.log(Ox, "Ox", ":", Cx, "Cx")
        if (Ox == Cx) {
            document.write("<div style='text-align:center'>YOU LOSS!!</div>");
            count22 ++;
            if (count22 > 5) {
                location.reload();
            }

        }
    }
    Ox = Ox + "px";
    Oy = Oy + "px";
    Cx = Cx + "px";

}, 10)