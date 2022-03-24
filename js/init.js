function init() {
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    canvasWidth = canvas.width;
    canvasHeight = canvas.height;

    canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

    oldWidth = canvasWidth;
    oldHeight = canvasHeight;

    for (item of document.getElementsByClassName("sliderTextValue")) {
        item.style.background = BACKGROUNDCOLOR;
    }

    document.getElementById("Tslider").step = STEPSIZE < 200 ? 1 / STEPSIZE : 0.005;
    document.getElementById("TsliderTextValue").step = STEPSIZE < 100 ? 1 / STEPSIZE : 0.01;

    ctx.fillStyle = BACKGROUNDCOLOR;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // p1 = new Point(getRandomNumber(100, canvas.width / 2), getRandomNumber(canvas.height / 2, canvas.height - 100));
    // p2 = new Point(getRandomNumber(100, canvas.width / 2), getRandomNumber(100, canvas.height / 2));
    // p3 = new Point(getRandomNumber(canvas.width / 2, canvas.width - 100), getRandomNumber(100, canvas.height / 2));
    // p4 = new Point(getRandomNumber(canvas.width / 2, canvas.width - 100), getRandomNumber(canvas.height / 2, canvas.height - 100));

    // controlPoints.push(new Point(getRandomNumber(100, canvas.width / 2), getRandomNumber(canvas.height / 2, canvas.height - 100)));
    // controlPoints.push(new Point(getRandomNumber(100, canvas.width / 2), getRandomNumber(100, canvas.height / 2)));
    // controlPoints.push(new Point(getRandomNumber(canvas.width / 2, canvas.width - 100), getRandomNumber(100, canvas.height / 2)));
    // controlPoints.push(new Point(getRandomNumber(canvas.width / 2, canvas.width - 100), getRandomNumber(canvas.height / 2, canvas.height - 100)));

    for (let i = 0; i < NOOFNODES; ++i) {
        controlPoints.push(new Point(getRandomNumber(100, canvasWidth - 100), getRandomNumber(100, canvasHeight - 100)))
    }

    // points.push(controlPoints);

    selectedPoint = outboundsPoint;

    drawCurve(STEPSIZE, T);

    // drawCircles(p1);
    // drawCircles(p2);
    // drawCircles(p3);
    // drawCircles(p4);

    controlPoints.forEach(point => {
        drawCircles(point);
    });
}

init();