function sliderUpdateT(value) {
    T = value;
    let slider = document.getElementById("Tslider");
    let sliderText = document.getElementById("TsliderTextValue");

    slider.value = T;
    sliderText.value = T;
    redraw();
}

function sliderUpdateStep(value) {
    let oldCurrentValue = document.getElementById("Tslider").value;

    stepSize = value;
    let slider = document.getElementById("stepSlider");
    let sliderText = document.getElementById("stepSliderTextValue");

    slider.value = stepSize;
    sliderText.value = stepSize;

    let Tslider = document.getElementById("Tslider");
    let TsliderTextValue = document.getElementById("TsliderTextValue");
    T = Math.round(oldCurrentValue * stepSize) * (1 / stepSize);

    Tslider.step = stepSize < 100 ? T : 0.01;
    TsliderTextValue.step = stepSize < 100 ? T : 0.01;

    Tslider.value = T;
    TsliderTextValue.value = T;

    // The following two lines are there to fix a bug caused by computational errors
    Tslider.max = 1 + EPSILON;
    TsliderTextValue.max = 1 + EPSILON;

    redraw();
}

function updateControlPoints(value) {
    createControlPoints(value);
    redraw();
}

function resizeCanvas() {
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
    scaleCanvas();
}
window.addEventListener('resize', resizeCanvas, false);

function downListener(event) {
    var eventx, eventy;
    moved = true;
    if (event.type == "touchstart") {
        eventx = event.touches[0].clientX;
        eventy = event.touches[0].clientY;
    } else {
        eventx = event.clientX;
        eventy = event.clientY;
    }
    choosePoint(eventx, eventy);
}
document.addEventListener('mousedown', downListener);
document.addEventListener('touchstart', downListener);

function moveListener(event) {
    if (moved) {
        movePoint(event);
    }
}
document.addEventListener('mousemove', moveListener);
document.addEventListener('touchmove', moveListener);

function upListener(event) {
     moved = false;
     selectedPoint = outboundsPoint;
}
document.addEventListener('mouseup', upListener);
document.addEventListener('touchend', upListener);
