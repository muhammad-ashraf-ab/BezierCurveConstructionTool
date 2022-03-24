function init() {
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    canvasWidth = canvas.width;
    canvasHeight = canvas.height;

    canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

    oldWidth = canvasWidth;
    oldHeight = canvasHeight;

    ctx.fillStyle = BACKGROUNDCOLOR;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    p1 = new Point(getRandomNumber(100, canvas.width / 2), getRandomNumber(canvas.height / 2, canvas.height - 100));
    p2 = new Point(getRandomNumber(100, canvas.width / 2), getRandomNumber(100, canvas.height / 2));
    p3 = new Point(getRandomNumber(canvas.width / 2, canvas.width - 100), getRandomNumber(100, canvas.height / 2));
    p4 = new Point(getRandomNumber(canvas.width / 2, canvas.width - 100), getRandomNumber(canvas.height / 2, canvas.height - 100));

    for (item of document.getElementsByClassName("sliderTextValue")) {
        item.style.background = BACKGROUNDCOLOR;
    }

    selectedPoint = outboundsPoint;

    drawCurve(200, T);

    drawCircles(p1);
    drawCircles(p2);
    drawCircles(p3);
    drawCircles(p4);
}

init();