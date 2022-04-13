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

    document.getElementById("Tslider").step = stepSize < 200 ? 1 / stepSize : 0.005;
    document.getElementById("TsliderTextValue").step = stepSize < 100 ? 1 / stepSize : 0.01;

    ctx.fillStyle = BACKGROUNDCOLOR;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    createControlPoints(4);

    drawCurve(stepSize, T);

    controlPoints.forEach(point => {
        drawCircles(point);
    });

    selectedPoint = outboundsPoint;

}

init();