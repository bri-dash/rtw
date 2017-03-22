
function Shape (x, y, shape, h, w, x3, y3, color) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.x3 = x3;
    this.y3 = y3;
    this.shape = shape;
    this.color = color;
    
    this.display = function () {
    	switch(this.shape){
    		case 'circle':
    			fill(this.color);
    			ellipse(this.x, this.y, this.w, this.h);
    			break;
    		case 'rectangle':
    			fill(this.color);
    			rect(this.x, this.y, this.w, this.h);
    			break;
    		case 'triangle':
    			//fill(this.color);
                stroke(this.color);
    			triangle(this.x, this.y, this.w, this.h, this.x3, this.y3);
    			break;		
    	}

    }

 }
