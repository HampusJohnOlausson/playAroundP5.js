function setup(){

    const canvas = createCanvas(innerWidth, innerHeight);

    const x = (windowWidth - width) / 2;
    const y = (windowHeight - height) / 2;
    
    canvas.position(x, y);
}

function draw(){

    background(0,191,255);
    appleOne = new Apple(100, 100, 20, 20);
    
    // rect(100, 100, 20,20);
    //  fill(0,255,127);
    
}

class Apple {
    constructor(x, y, d){
        this.x = x,
        this.y = y,
        this.d = d
    }
    shape(){
        fill(220,20,60)
        ellipse(this.x, this.y, this.y * 2);
    }
}