const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var rope1,rope2,rope3,rope4,rope5;
//var roof;
var roof1,roof2,roof3,roof4,roof5
//Create multiple bobs, mulitple ropes varibale here
var btn1;
var btn2;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	var ball1_options = {
		restitution: 0.95,
		frictionAir:0.01
	  }
	
	  var ball2_options = {
		restitution: 0.95,
		frictionAir:0.01
		  }
	
	  var ball3_options = {
	   restitution: 0.95,
	   frictionAir:0.01
	  }
	
	  var ball4_options = {
		restitution: 0.95,
		frictionAir:0.01
		}
		
		var ball5_options = {
			restitution: 0.95,
			frictionAir:0.01
			}
	  
			engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof1 = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof1);

	roof2 = Bodies.rectangle(450,100,230,20,roof_options);
    World.add(world,roof2);

	
	roof3 = Bodies.rectangle(350,100,230,20,roof_options);
    World.add(world,roof3);

	
	roof4 = Bodies.rectangle(300,100,230,20,roof_options);
    World.add(world,roof4);

	
	roof5 = Bodies.rectangle(500,100,230,20,roof_options);
    World.add(world,roof5);

	Engine.run(engine);
	
  ball1 = Bodies.circle(400,300,20,ball1_options);
  World.add(world,ball1);
  
  ball2 = Bodies.circle(450,300,20,ball2_options);
  World.add(world,ball2)

  ball3 = Bodies.circle(350,300,20,ball3_options);
  World.add(world,ball3)

  ball4 = Bodies.circle(300,300,20,ball4_options);
  World.add(world,ball4)

  ball5 = Bodies.circle(500,300,20,ball5_options);
  World.add(world,ball5)

 
 rope1 = new rope(ball1,roof1,0,0)
 rope2 = new rope(ball2,roof2,0,0)
 rope3 = new rope(ball3,roof3,0,0)
 rope4 = new rope(ball4,roof4,0,0)
 rope5 = new rope(ball5,roof5,0,0)


 btn2 = createImg('up.png');
 btn2.position(20,30);
 btn2.size(50,50);
 btn2.mouseClicked(vForce);




}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof1.position.x,roof1.position.y,25,20);
  rect(roof2.position.x,roof2.position.y,25,20);
  rect(roof3.position.x,roof3.position.y,25,20);
  rect(roof4.position.x,roof4.position.y,25,20);
  rect(roof5.position.x,roof5.position.y,25,20);
 
 
 
  //call display() to show ropes here
  //Con.display();
 rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
 
 
 
  //create ellipse shape for multiple bobs here
  ellipse(ball1.position.x,ball1.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20)
  ellipse(ball3.position.x,ball3.position.y,20)
  ellipse(ball4.position.x,ball4.position.y,20)
  ellipse(ball5.position.x,ball5.position.y,20)
  




}



//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function vForce()
{
  Matter.Body.applyForce(ball5,{x:0,y:0},{x:0.05,y:0});
}