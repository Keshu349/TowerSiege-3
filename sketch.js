const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1
var box1
var box2
var box3
var box4
var box5
var box6
var box7
var box8
var box9
var box0
var ball

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(200,200,100,20);
 
  box1 = new Box(200,199,50,50);
  box2 = new Box(250,199,50,50);
  box3 = new Box(300,199,50,50);
  box4 = new Box(350,199,50,50);
  box5 = new Box(225,249,50,50);
  box6 = new Box(275,249,50,50);
  box7 = new Box(325,249,50,50);
  box8 = new Box(313,299,50,50);
  box9 = new Box(313,299,50,50);
  box0 = new Box(306,349,50,50); 
  
  ball = new Ball(100,100);

}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  strokeWeight(4);

  ball.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box0.display();
  ground.display();
    
   text("Score:"+score,750,40);
   score()
     if(this.visibility < 0 && this.visibility >- 105){
     score++
      }
    
   box1.score(); 
   box2.score(); 
   box3.score(); 
   box4.score(); 
   box5.score(); 
   box6.score(); 
   box7.score(); 
   box8.score(); 
   box9.score(); 
   box0.score(); 
    
   drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}