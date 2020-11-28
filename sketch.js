
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
	ball1 = new ball(480, 550);
	ball2 = new ball(420, 550);
	ball3 = new ball(360, 550);
	ball4 = new ball(300, 550);
	ball5 = new ball(240, 550);

	rope1 = new rope(ball1.body, roof.body, -100, 0);
	World.add(world,rope1);
	
	rope2 = new rope(ball2.body, roof.body, -50, 0);
	World.add(world,rope2);
	
	rope3 = new rope(ball3.body, roof.body, 0, 0);
	World.add(world,rope3);
	
	rope4 = new rope(ball4.body, roof.body, +50, 0);
	World.add(world,rope4);
	
	rope5 = new rope(ball5.body, roof.body, +100, 0);
	World.add(world,rope5);
	
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  roof1.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ground.display ();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}



