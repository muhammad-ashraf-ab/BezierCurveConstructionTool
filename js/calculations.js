function scalePoint(point) {
    point.x = point.x * canvasWidth / oldWidth;
    point.y = point.y * canvasHeight / oldHeight;
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function interpolatePoint(first, second, u) {
    return new Point((second.x - first.x) * u + first.x, (second.y - first.y) * u + first.y);
}

function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}

function equalTo(first, second) {
    return (Math.abs(first - second) < 0.001)
}

function choosePoint(x, y) {
    let pDist = [];

    for (let i = 0; i < controlPoints.length; ++i) {
        pDist[i] = calculateDistance(x, y, controlPoints[i].x, controlPoints[i].y);
    }

    const min = Math.min(...pDist);
    const index = pDist.indexOf(min);

    if (min < CIRCLESIZE * 1.25) {
        selectedPoint = controlPoints[index];
    }
}

function clearArray(array) {
    while (array.length) {
      array.pop();
    }
}
