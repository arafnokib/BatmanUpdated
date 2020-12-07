class Umbrella {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("walking_2.png")//,"walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
    World.add(world, this.body);
  }
  display(){
    push();
    //translate(this.body.position.x, this.body.position.y);
   // rotate(angle);
    imageMode(CENTER);
    image(this.image, 400, 515, 400, 400);
    pop();
  }
};
