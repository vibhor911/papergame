
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundObj;
var dustbineObj;
var paperObj;
function setup() {
	createCanvas(1200, 700);
rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj = new ground(width/2,670,width,20);
	 dustbineObj = new dustbine(1200,650);
	 paperObj = new paper(200,450,40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
dustbineObj.display();
paperObj.display();
groundObj.display();

  drawSprites();
 
}

function keyPressed() {
if (keyCode === UP_ARROW){
Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:85,y:-85});
}

}