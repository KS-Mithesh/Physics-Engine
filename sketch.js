const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, object;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world  = engine.world;
  var object_options = {
    isStatic:true
  }
  object = Bodies.rectangle(200,0,30,100,object_options);
  World.add(world,object);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 

  rect(400,200,100,30);
  rect(object.position.x,object.position.y,100,50);

  drawSprites();
}