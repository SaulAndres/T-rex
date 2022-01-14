var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload (){
trex_running- loadAnimation("trex1.png", "trex3.png", "trex4.png")
trex_collided= loadAnimation("trex_collied.png");
groundImage= loadImage("ground2.png");
}

function setup(){
    createCanvas(600,200)
    
//crea sprite del t-rex
trex = createSprite(50,180,20,50);
trez.addAnimation("running", trex_running);

trex.scale = 0.5;
trex.x = 50

ground = createSprite(200,180,400,20);
ground.addImage("ground", groundImage);
ground.x = ground.widtg/2;

invisibleGround = createSprite(200,190,400,10);
invisibleGround.visible = false;

var r 

function draw() {
    background(220);

    ground.velocityY = -2;

    if(ground.x < 0){
    ground.x = ground.widtg/2;
}

if(keyDown("space")){
    trex.velocityY=-10;

}
trex.velocityY-trex.velocityY+0.8

trex.collide(ground);
drawSprites();
}