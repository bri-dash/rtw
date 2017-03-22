
function Flowers (x, y, img) {
    this.x = x;
    this.y = y;
    this.img = img;
    
    this.display = function () {
        imageMode(CENTER);
        image(img, this.x, this.y, 100, 100);
    }

 }
