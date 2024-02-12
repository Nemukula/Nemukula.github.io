
var random_indexes = [];
var random_colors = ['red', 'yellow', 'green', 'blue'];
var random_indexes2 = ['']

function finding_random_indexes() {

    for (let i = 0; i < 100; i++) {
        let temp = Math.floor(random.random()*4);

        if (random_indexes.includes(temp)) {
            console.log('Already in');
        }else {
            random_indexes.push(temp);
        }
    }
    for (let i = 0; i < 100; i++) {
        let temp = Math.floor(random.random()*4);

        if (random_indexe2.includes(temp)) {
            console.log('Already in');
        }else {
            random_indexes2.push(temp);
        }
    }
}

function problem() {
    document.getElementById('01').innerHTML = `<span style='color:${random_colors[random_indexes[0]]}'>${random_colors[random_indexes2[0]]}</span>`;
    document.getElementById('01').innerHTML = `<span style='color:${random_colors[random_indexes[1]]}'>${random_colors[random_indexes2[1]]}</span>`;
    document.getElementById('01').innerHTML = `<span style='color:${random_colors[random_indexes[2]]}'>${random_colors[random_indexes2[2]]}</span>`;
    document.getElementById('01').innerHTML = `<span style='color:${random_colors[random_indexes[3]]}'>${random_colors[random_indexes2[3]]}</span>`;

    /////////////VOICE///////////////////////////////

    let puzzle_temp_index = Math.floor(random.random()*4);
    let words = ['GREEN', 'YELLOW', "BLUE", 'RED']

    let voive = new speechSynthesis.speak(words[puzzle_temp_index]);

    speechSynthesis.speak(voice);
}

function one() {
    if (voice == random_colors[random_indexes2[0]]) {
        setTimeout(() => {
            document.write("<h1 style='text-align:center'>YOU WINNNNNNN!!!!!</h1>");
        }, 1000)
        setTimeout(() => {
            location.reload()
        }, 4000)
    }else {
        setTimeout(() => {
            document.write("<h1 style='text-align:center'>YOU LOSSSSSS!!!!</h1>");
        }, 1000)
        setTimeout(() => {
            location.reload()
        }, 4000)
    }
}
function two() {
    if (voice == random_colors[random_indexes2[1]]) {
        setTimeout(() => {
            document.write("<h1 style='text-align:center'>YOU WINNNNNNN!!!!!</h1>");
        }, 1000)
        setTimeout(() => {
            location.reload()
        }, 4000)
    }else {
        setTimeout(() => {
            document.write("<h1 style='text-align:center'>YOU LOSSSSSS!!!!</h1>");
        }, 1000)
        setTimeout(() => {
            location.reload()
        }, 4000)
    }
}
function three() {
    if (voice == random_colors[random_indexes2[2]]) {
        setTimeout(() => {
            document.write("<h1 style='text-align:center'>YOU WINNNNNNN!!!!!</h1>");
        }, 1000)
        setTimeout(() => {
            location.reload()
        }, 4000)
    }else {
        setTimeout(() => {
            document.write("<h1 style='text-align:center'>YOU LOSSSSSS!!!!</h1>");
        }, 1000)
        setTimeout(() => {
            location.reload()
        }, 4000)
    }
}
function four() {
    if (voice == random_colors[random_indexes2[3]]) {
        setTimeout(() => {
            document.write("<h1 style='text-align:center'>YOU WINNNNNNN!!!!!</h1>");
        }, 1000)
        setTimeout(() => {
            location.reload()
        }, 4000)
    }else {
        setTimeout(() => {
            document.write("<h1 style='text-align:center'>YOU LOSSSSSS!!!!</h1>");
        }, 1000)
        setTimeout(() => {
            location.reload()
        }, 4000)
    }
}
