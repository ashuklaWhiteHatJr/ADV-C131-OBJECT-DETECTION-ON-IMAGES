img = "";



function preload() {
    img = loadImage('HP computer.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Computer", 12, 15);
    noFill();
    stroke("#FF0000");
    rect(2, 2, 635, 410);
}
function back() {
    window.location = "index.html";
}