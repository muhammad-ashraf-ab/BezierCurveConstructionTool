const canvas = document.getElementById(`canvas`);
const ctx = canvas.getContext(`2d`);
var canvasWidth;
var canvasHeight;
var canvasData;
var oldWidth;
var oldHeight;

const BACKGROUNDCOLOR = `rgb(40, 40, 40)`;
const CONSTRUCTIONLINECOLOR = `rgb(0, 0, 0)`;
const CIRCLESIZE = 7;

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

var p1, p2, p3, p4, selectedPoint, previousPoint;
const outboundsPoint = new Point(0, 0);

var T = 1;

var moved = false;

