let x = 0; 
let y = 0;
let speed = 3; 

let on = false;

function setup(){

    createCanvas(600, 400);
}

function draw(){

    background(0,191,255);
    
   
    fill('green');
    ellipse(x, y, 100, 100);
    
    // appleOne = new Apple(x, 40, 30, 30);
    // appleOne.shape();
   

    if( x > width){
        speed = -3;
    }
    x = x + speed;
    y = y + speed;

    rect(mouseX, 300, 100, 100)
    noCursor();
    
}

// class Apple {
//     constructor(x, y, d){
//         this.x = x,
//         this.y = y,
//         this.d = d
//     }
//     shape(){
//         fill(220,20,60)
//         ellipse(this.x, this.y, this.y * 2);
//     }
//     move(){
//         this.y = this.y + 6;
//         drop2.y = drop2.y + 2;
//     }
// }