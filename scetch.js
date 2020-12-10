function setup(){

    const canvas = createCanvas(innerWidth, innerHeight);

    const x = (windowWidth - width) / 2;
    const y = (windowHeight - height) / 2;

    canvas.position(x, y);
}

function draw(){

    background(0,191,255);
    fill('green');
    appleOne = new Apple(random(0, 700), 20, 20);
    appleOne.shape();
    
    fill(0,255,127);
    rect(0, 355, 560, 30);
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
    move(){
        this.y = this.y + 6;
        drop2.y = drop2.y + 2;
    }
}