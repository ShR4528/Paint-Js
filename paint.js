const canvas = document.getElementById('jsCanvas');

let painting = false;

function stopPainting(event) {
    painting = false;
}

function onMouseMove(event) {
    x = event.offsetX;
    y = event.offsetY;
}
function onMouseDown(event) {
    painting = true;
}
function onMouseUp(event) {
    stopPainting();

}
if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('mouseleave', stopPainting);
}