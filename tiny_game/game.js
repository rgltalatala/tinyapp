// initial state for the game
px = py = 10; // initial pos of snake
gs = ts = 20; // initial pos of head
ax = ay = 15; // initial pos of apple

// only values manipulated by our keys (directional keys)
xv = yv = 0; // extra variable for later use

body = []; // body of snake {x: px, y: py}
segments = 5; // snake tail

const game = () => {
    px += xv;
    py += yv; 

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#2ED9EB";

    if (px < 0){
        px = ts - 1;
    };

    if (px > ts - 1) {
        px = 0;
    }
    
    if (py < 0){
        py = ts - 1;
    };

    if (py > ts - 1) {
        py = 0;
    }

    for (let i = 0; i < body.length; i++){
        ctx.fillRect(body[i].x * gs, body[i].y * gs, gs - 2, gs - 2);
        if (body[i].x === px && body[i].y === py){
            segments = 5;
        }
    }

    body.push({x: px, y: py})

    while (body.length > segments){
        body.shift();
    }

    // eating
    if (ax === px && ay === py){
        segments++
        ax = Math.floor(Math.random() * ts);
        ay = Math.floor(Math.random() * ts);
    }

    ctx.fillStyle = "#FF0000";
    ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
}

// controls our d-pad
const keyDown = e => {
    switch(e.keyCode) {
        case(65):
            xv = -1;
            yv = 0
            break;
        case(87):
            xv = 0;
            yv = -1
            break;
        case(68):
            xv = 1;
            yv = 0
            break;
        case(83):
            xv = 0;
            yv = 1;
            break;
    }
}

const init = () => {
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
    document.addEventListener('keydown', keyDown);
    setInterval(game, 1000/15)
}

// window.onload = init();

document.addEventListener("DOMContentLoaded", init) // same as above