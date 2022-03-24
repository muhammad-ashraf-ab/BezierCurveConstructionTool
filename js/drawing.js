function drawPixel (point, stroke = `black`, width = 1) {
    // ctx.fillRect(point.x, point.y, 1, 1);
    drawLine(previousPoint, point, stroke, width);
    previousPoint = point;
}

function drawPoint(u, stroke = `black`, width = 1) {
            
    let p12 = interpolatePoint(p1, p2, u);
    let p23 = interpolatePoint(p2, p3, u);
    let p34 = interpolatePoint(p3, p4, u);

    let p123 = interpolatePoint(p12, p23, u);
    let p234 = interpolatePoint(p23, p34, u);

    let p1234 = interpolatePoint(p123, p234, u);

    if (equalTo(u, T)) {
        drawLine(p12, p23, CONSTRUCTIONLINECOLOR, 2);
        drawLine(p23, p34, CONSTRUCTIONLINECOLOR, 2);
        drawLine(p123, p234, CONSTRUCTIONLINECOLOR, 2);

    }
    drawPixel(p1234, stroke, width);
}

function drawCircles(point) {
    ctx.fillStyle = `black`;
    ctx.beginPath();
    ctx.arc(point.x, point.y, CIRCLESIZE, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = `gray`;
    ctx.beginPath();
    ctx.arc(point.x, point.y, CIRCLESIZE * 0.85, 0, 2 * Math.PI);
    ctx.fill();
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
    drawLine(p1, p2, stroke, 2);
    drawLine(p2, p3, stroke, 2);
    drawLine(p3, p4, stroke, 2);

    previousPoint = p1;

    var t0 = 0;
    var u = 1 / steps;
    while (t0 <= t) {
        drawPoint(t0, stroke, 3);
        t0 += u;
    }

    while (t0 <= 1) {
        drawPoint(t0, `rgb(150, 150, 150)`, 1);
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

function redraw() {
    scalePoint(p1);
    scalePoint(p2);
    scalePoint(p3);
    scalePoint(p4);

    ctx.fillStyle = BACKGROUNDCOLOR;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    drawCurve(200, T);

    drawCircles(p1);
    drawCircles(p2);
    drawCircles(p3);
    drawCircles(p4);

    oldWidth = canvasWidth;
    oldHeight = canvasHeight;
}
