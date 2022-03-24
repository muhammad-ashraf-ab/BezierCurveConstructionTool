function sliderUpdateT(value){
    T = value;
    let slider = document.getElementById("Tslider");
    let sliderText = document.getElementById("TsliderTextValue");

    slider.value = T;
    sliderText.value = T;
    redraw();
}

function resizeCanvas() {
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
    redraw();
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
