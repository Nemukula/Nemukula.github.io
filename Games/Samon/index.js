var a = document.getElementById('01');
var b = document.getElementById('02');
var c = document.getElementById('03');
var d = document.getElementById('04');
var e = document.getElementById('05');
var f = document.getElementById('06');
var g = document.getElementById('07');
var h = document.getElementById('08');

function Starting_the_Game() {
    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'none';
    e.style.display = 'none';
    f.style.display = 'none';
    g.style.display = 'none';
    h.style.display = 'none';
}

var counting = document.getElementById('starting');

var start= 0;
const aa = setInterval(() => {
    Starting_the_Game()
    counting.innerHTML = `<h1 style='font-size:200%;text-align:center'>Starting<br>${5-start}<h1>`
    if (start > 4) {
        a.style.display = 'inline';
        b.style.display = 'inline';
        c.style.display = 'inline';
        d.style.display = 'inline';

        counting.innerHTML = '';
        clearInterval(aa);
    }
    start += 1;
}, 1200);


///////////////////////PLAYING////////////////PLAYING/////////////////////////////////PLAYING////////////////////////

//////////////////MAIN FUNCTION///////////////////MAIN FUNCTION//////////////////MAIN FUNCTION//////////////////////
setTimeout(() => {
    
}, 1200*8);