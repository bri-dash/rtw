
var bubbles = [];
var flowers = [];

function preload() {
    for (var i = 0; i< 3; i++){
        flowers[i] = loadImage("images/flower" + i + ".png"); 
    }
	    flowers[0] = loadImage("images/flower0.png")
	    flowers[1] = loadImage("images/flower1.png");
	    flowers[2] = loadImage("images/flower2.png");
	    flowers[3] = loadImage("images/flower3.png");
	    flowers[4] = loadImage("images/flower4.png");
}

function setup() {
    cnv = createCanvas(windowWidth, windowHeight);   
    }

function mousePressed() {
    var r = floor(random(0, flowers.length));
    var b = new Bubble(mouseX, mouseY, flowers[r]);
    bubbles.push(b);
}

function draw() {
    background(0);

    for (var i = bubbles.length-1; i >= 0; i--) {
        bubbles[i].update();
        bubbles[i].display(); 
    }
}