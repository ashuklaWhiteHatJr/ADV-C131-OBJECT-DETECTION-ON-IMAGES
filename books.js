img = "";



function preload() {
    img = loadImage('books.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Books", 10, 75);
    noFill();
    stroke("#FF0000");
    rect(5, 60, 630, 350 );
}

function back() {
    window.location = "index.html";
}