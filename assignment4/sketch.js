

var flowers = [];
var flowerimgs = [];

function preload() {
    for (var i = 0; i <= 4; i++){
        flowerimgs[i] = loadImage("images/flower" + i + ".png"); 
    }
}

function setup() {
    cnv = createCanvas(windowWidth, windowHeight);   
}

function mousePressed() {
    var r = floor(random(0, flowerimgs.length));
    var f = new Flowers(mouseX, mouseY, flowerimgs[r]);
    flowers.push(f);
        socket.emit('newflower', {
        'x':mouseX,
        'y':mouseY,
        'index':r
    });
}

function draw() {
    background(0);
    for (var i = flowers.length-1; i >= 0; i--) {
        flowers[i].display(); 
    }

}


function addExternalFlower(data){
    var f = new Flowers(data.x, data.y, flowerimgs[data.index]);
    flowers.push(f);
}



