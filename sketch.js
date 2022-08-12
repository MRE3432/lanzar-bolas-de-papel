const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ball;
let engine;
let world;
var boton_D;
var boton_W;
var ground;
var left;
var right;
var wall1;
var wall2;
var top_wall;

function setup() {
  createCanvas(700,400);
  engine = Engine.create();
  world = engine.world;
  boton_D = createImg("right.png");
  boton_D.position(100,25);
  boton_D.size(50,50);
  boton_W = createImg("up.png");
  boton_W.size(40,45);
  boton_W.mouseClicked(pushup);
  boton_W.position(40,25)
  boton_D.mouseClicked(pushright);
  ground =new Ground(200,390,1000,20);
  right = new Ground(500,350,20,100);
  left = new Ground(600,350,20,100);
  top_wall = new Ground(300,10,900,20);
  wall1 = new Ground(10,300,20,600);
  wall2 = new Ground(690,300,20,600);
  var balloptions = {
    restitution : 0.85

  }
  ball = Bodies.circle(200,200,20,balloptions);
  World.add(world,ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  
  background("pink");
  ellipse(ball.position.x,ball.position.y,20);
  fill("lightblue")
  ground.show();
  
  left.show();
  right.show();
  wall1.show();
  wall2.show();
  top_wall.show();
  Engine.update(engine);
}

 function pushright (){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:0});

 } 
 function pushup (){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.02});
} 
