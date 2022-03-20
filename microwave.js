img = "";



function preload() {
    img = loadImage('microwave.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Microwave", 60, 100);
    noFill();
    stroke("#FF0000");
    rect(55, 85, 550, 230);
}

function back() {
    window.location = "index.html";
}