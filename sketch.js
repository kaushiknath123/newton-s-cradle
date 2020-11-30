
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	

	roof1 = new roof(375, 200, 400, 30);
	ground = new roof(400, 690, 800 , 20);
	
	ball1 = new ball(470, 500);
	ball2 = new ball(420, 500);
	ball3 = new ball(370, 500);
	ball4 = new ball(320, 500);
	ball5 = new ball(270, 500);

	rope1 = new rope(ball1.body, roof1.body, +100, 0);
	rope2 = new rope(ball2.body, roof1.body, +50, 0);	
	rope3 = new rope(ball3.body, roof1.body, 0, 0);
	rope4 = new rope(ball4.body, roof1.body, -50, 0);
	rope5 = new rope(ball5.body, roof1.body, -100, 0);
	
}


function draw() {
  rectMode(CENTER);
  background("white");
  
 
 

  ground.display ();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  roof1.display();
}

function keyPressed () {
	if (keyCode === 38) {
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-6,y:-5});
	}
}



