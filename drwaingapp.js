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
