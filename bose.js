img = "";



function preload() {
    img = loadImage('bose.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bose Headphones", 30, 45);
    noFill();
    stroke("#FF0000");
    rect(25, 30, 595, 365 );
}

function back() {
    window.location = "index.html";
}