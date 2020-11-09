
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(390, 690, 820, 20);
	ball = Bodies.circle(400, 350, 20)
	

	dustbin1 = new Dustbin(390, 600, 20, 120);
	dustbin2 = new Dustbin(465, 665, 180, 20);
	dustbin3 = new Dustbin(549, 595, 20, 120)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();	 
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ball.display();
  ellipseMode(RADIUS)
  ellipse(pos.x, pos.y, 20, 20)
 drawSprites();
 
 
}
function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   Matter.Body.setStatic( this.Body, false);
   


	}
}
