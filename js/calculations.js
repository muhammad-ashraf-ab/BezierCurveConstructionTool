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
    return (Math.abs(first - second) < 0.0001)
}

function choosePoint(x, y) {
    let pDist = [];
    pDist[0] = calculateDistance(x, y, p1.x, p1.y);
    pDist[1] = calculateDistance(x, y, p2.x, p2.y);
    pDist[2] = calculateDistance(x, y, p3.x, p3.y);
    pDist[3] = calculateDistance(x, y, p4.x, p4.y);

    const min = Math.min(...pDist);
    const index = pDist.indexOf(min);

    if (min < CIRCLESIZE * 1.25) {
        switch (index) {
            case 0:
                selectedPoint = p1;
                break;
                
            case 1:
                selectedPoint = p2;
                break;
                
            case 2:
                selectedPoint = p3;
                break;
                
            case 3:
                selectedPoint = p4;
                break;
        }
    }
}
