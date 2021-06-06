const Engine=Matter.Engine;//namespacing
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,body1;

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;

  //jSON=Javascript Object notion
  var options={
    isStatic:true,
  }
  body1=Bodies.rectangle(100,100,50,50,options);
  World.add(body1,world);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  drawSprites();
}