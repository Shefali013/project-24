const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ground;
var hammer;
var stone;
function setup() {
 var canvas = createCanvas(1200,400);
 engine = Engine.create();
 world = engine.world;
 ground = new Ground(600,400,200,40)
 hammer = new Hammer(50,50)
 stone = new Stone(700,320,70,70);
    
    

// console.log();
}

function draw() {
  background("brown");  
  Engine.update(engine);
  ground.display();
  hammer.display();
  stone.display();
}