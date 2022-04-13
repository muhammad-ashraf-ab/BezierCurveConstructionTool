function drawPoint(u, stroke = `black`, width = 1) {
    var pointsToInterpolate = controlPoints;
    points.push(pointsToInterpolate);

    while (pointsToInterpolate.length != 1) {
        var interpolatedPoints = [];
        for (let i = 0; i < pointsToInterpolate.length - 1; ++i) {
            interpolatedPoints.push(interpolatePoint(pointsToInterpolate[i], pointsToInterpolate[i + 1], u));
        }
        points.push(interpolatedPoints);
        pointsToInterpolate = interpolatedPoints;
    }

    if (equalTo(u, T)) {
        for (let i = 1; i < points.length - 1; ++i) {
            for (let j = 0; j < points[i].length - 1; ++j) {
                drawLine(points[i][j], points[i][j + 1], CONSTRUCTIONLINECOLOR, 2);
            }
        }
    }

    drawLine(previousPoint, points[points.length - 1][0], stroke, width);
    previousPoint = points[points.length - 1][0];
    clearArray(points);
}

function drawCircles(point) {
    ctx.fillStyle = `gray`;
    ctx.strokeStyle = `black`;
    ctx.lineWidth = CIRCLESIZE * 0.15;
    ctx.beginPath();
    ctx.arc(point.x, point.y, CIRCLESIZE, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

function drawLine(start, end, stroke = `black`, width = 1) {
    if (stroke) {
        ctx.strokeStyle = stroke;
    }

    if (width) {
        ctx.lineWidth = width;
    }

    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
}

function drawCurve(steps = 200, t = 1, stroke = `black`, width = 1) {
    for (let i = 0; i < controlPoints.length - 1; ++i) {
        drawLine(controlPoints[i], controlPoints[i + 1], stroke, 2);
    }

    previousPoint = controlPoints[0];

    var t0 = 0;
    var u = 1 / steps;
    while (t0 - EPSILON <= t) {
        drawPoint(t0, stroke, 3);
        t0 += u;
    }

    while (t0 - EPSILON <= 1) {
        drawPoint(t0, `rgba(150, 150, 150, 0.3)`, 1);
        t0 += u;
    }
}

function movePoint(event) {
    var bounds = event.target.getBoundingClientRect();
    
    let eventx, eventy;

    if (event.type == "touchstart" || event.type == "touchmove" || event.type == "touchend") {
        eventx = event.touches[0].clientX;
        eventy = event.touches[0].clientY;
    } else {
        eventx = event.clientX;
        eventy = event.clientY;
    }

    selectedPoint.x = eventx - bounds.left - scrollX;
    selectedPoint.y = eventy - bounds.top - scrollY;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    redraw();
}

function createControlPoints(noOfCtrlPts) {
    clearArray(controlPoints);

    for (let i = 0; i < noOfCtrlPts; ++i) {
        controlPoints.push(new Point(getRandomNumber(100, canvasWidth - 100), getRandomNumber(100, canvasHeight - 100)))
    }
}

function scaleCanvas() {
    controlPoints.forEach(point => {
        scalePoint(point);
    });

    oldWidth = canvasWidth;
    oldHeight = canvasHeight;

    redraw();
}

function redraw() {
    ctx.fillStyle = BACKGROUNDCOLOR;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    drawCurve(stepSize, T);

    controlPoints.forEach(point => {
        drawCircles(point);
    });

    clearArray(points);
    points.push(controlPoints);
}
