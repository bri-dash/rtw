

var shapes = [];


/* function preload() {
    /*
    for (var i = 0; i <= 4; i++){
        flowerimgs[i] = loadImage("images/flower" + i + ".png"); 
    }
    */


function setup() {
    var myCanvas = createCanvas(600, 450);
          myCanvas.parent('sketch');
}

function mousePressed() {
    var shapeType;
    var radios = document.getElementsByName('shape');
    for(var i = 0, length = radios.length; i < length; i++){
        if(radios[i].checked){
            shapeType = radios[i].value;
        }
    }

    var color = document.getElementById('color').value;
    var h, w, x3, y3;
    if(shapeType == 'triangle'){
        var margin = 50;
        w = floor(random(mouseX - margin, mouseX + margin));
        h = floor(random(mouseY - margin, mouseY + margin));
        x3 = floor(random(mouseX - margin, mouseX + margin));
        y3 = floor(random(mouseY - margin, mouseY + margin));
    }else{
        h = random(10, 70);
        w = random(10, 70);
        x3 = 0;
        y3 = 0;
    }
    var s = new Shape(mouseX, mouseY, shapeType, h, w, x3, y3, color);
    shapes.push(s);

    socket.emit('newshape', {
        'x':mouseX,
        'y':mouseY,
        'shape':shapeType,
        'h':h,
        'w':w,
        'x3':x3,
        'y3':y3,
        'color':color
    });
}

function draw() {
    background(0);
    for (var i = shapes.length-1; i >= 0; i--) {
        shapes[i].display(); 
    }

}


function addShape(data){
    var s = new Shape(data.x, data.y, data.shape, data.h, data.w, data.x3, data.y3, data.color);
    shapes.push(s);
}



