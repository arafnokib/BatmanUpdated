
        

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var man;
var a; 
var b;
var c;
var d;

function preload(){
   a = loadImage("images/thunderbolt/1.png")
   b = loadImage("images/thunderbolt/2.png")
   c = loadImage("images/thunderbolt/3.png")
   d = loadImage("images/thunderbolt/4.png")

}

function setup() {
  createCanvas(800,700);
  
  
  engine =Engine.create();

  world = engine.world;
  ground = new Ground(width/2,height - 10,width,20)
  //drop = new Rain(100,100,03)
  man = new Umbrella(100,760,10,10)

  
    }
    
    function draw(){
      background(0)
      Engine.update(engine)
      //drop.display();
      ground.display();
      man.display();

      if (frameCount%05 === 0){
        drops.push(new Rain((random(100, 700)), 0, 03))
      }


      for (var i = 0; i < drops.length; i++){
        drops[i].display();
      }
      lightning();
      
    }

function lightning(){
  thunder = createSprite(random(1,800),0,10,10);
  thunder.visible = false;
  var rand = Math.round(random(1,4));
  
  if(frameCount%100 === 0){
    if(rand === 1){
      thunder.addImage("1", a)
    }
    if(rand === 2){
      thunder.addImage("2", b)
    }
    if(rand === 3){
      thunder.addImage("3", c)
    }
    if(rand === 4){
      thunder.addImage("4", d)
    }
    
    
    
    
    thunder.visible = true;
    drawSprites();
  }
}