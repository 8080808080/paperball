
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,Paperobject,paperimg
var world;

function preload(){
paperimg=loadImage ("paper.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

Paperobject=new Paper(200,450.70)
	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);


	var render= Render.create
	element:document.body;
	engine : engine;
	option : {
		width:1600
		heigth:700
		wireflames: false 
	}
	Engine.run(engine);
  Render.run(Render)
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
Paperobject.display();
}

function keypressed(){
	if (keycode === UP_ARROW){
		Matter.Body.applyForce(Paperobject.body,Paperobject.body.position)//,(x:130.y:-145));
	}
}
