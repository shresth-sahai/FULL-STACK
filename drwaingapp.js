<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Drawing App</title>
</head>

<body>
    <canvas id="canvas" width="800" height="700"></canvas>
    <div class="toolbox">
        <button id="decrease">-</button>
        <span id="size">10</span>
        <button id="increase">+</button>
        <input type="color" id="color">
        <button id="clear">X</button>
    </div>

    <script src="script.js"></script>
</body>

</html>


@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
    box-sizing: border-box;
}

body {
    background-color: #f5f5f5;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
}

canvas {
    border: 2px solid steelblue;
}

.toolbox {
    background-color: steelblue;
    border: 1px solid slateblue;
    display: flex;
    width: 804px;
    padding: 1rem;
}

.toolbox>* {
    background-color: #fff;
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    height: 50px;
    width: 50px;
    margin: 0.25rem;
    padding: 0.25rem;
    cursor: pointer;
}

.toolbox>*:last-child {
    margin-left: auto;
}

const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');
let size = 10;
let isPressed = false;
colorEl.value = 'blue';
let color = colorEl.value;
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});

document.addEventListener('mouseup', () => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawLine(x, y, x2, y2);
        // drawCircle(x2, y2);
        // drawRectangle(x, y, x2, y2);

        x = x2;
        y = y2;
    }
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

function drawRectangle(x1, y1, x2, y2) {
    const width = x2 - x1;
    const height = y2 - y1;
    ctx.beginPath();
    ctx.rect(x1, y1, width, height);
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke();
}

function updateSize() {
    sizeEl.innerText = size;
}

increaseBtn.addEventListener('click', () => {
    size += 10;
    if (size > 50) size = 50;
    updateSize();
});

decreaseBtn.addEventListener('click', () => {
    size -= 10;
    if (size < 10) size = 10;
    updateSize();
});

colorEl.addEventListener('change', (e) => {
    color = e.target.value;
});

// Clearing the canvas
clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));

