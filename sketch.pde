//image called ooga"
var a = 280;
var direction = "up";
var startingSpeed = 20;
var speed = startingSpeed;
var resistance = 1;
var X = 10;
background(186, 44, 186);

fill(36, 166, 157);
ellipse(20, a, 20, 20);
fill(0, 0, 0);
text(speed, X+3, a+4);
//ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
draw = function() {
    frameRate(15);
    //------------------------
if(speed === 0){
    if(direction === "up"){
        direction = "down";
        speed = startingSpeed;
    }
    else if(direction === "down"){
        direction = "up";
        speed = startingSpeed;
    }
}
//--------------------------------//

    //background(255, 255, 255);
    stroke(0, 136, 255);
    line(0, 280, 400, 280);
    line(0, 261, 400, 261);
    line(0, 241, 400, 241);
    line(0, 221, 400, 221);
    line(0, 201, 400, 201);
    line(0, 181, 400, 181);

    fill(245, 220, 220);
    ellipse(X, a, 20, 20);
    fill(0, 0, 0);
    textSize(10);
    text(a-70, X-7, a+4);
    if(direction === "up"){
        a -= speed;
    }
    else if(direction === "down"){
        a += startingSpeed-speed;
    }
    speed -= resistance;
    X+=2;
};

mouseClicked = function(){
    println("hola");
    
};
