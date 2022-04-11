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
const NOOFNODES = 4;
const EPSILON = 0.0000001;

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const controlPoints = [];
const points = [];
var selectedPoint;
var previousPoint;
const outboundsPoint = new Point(0, 0);

var T = 1;
var stepSize = 50;

var moved = false;

