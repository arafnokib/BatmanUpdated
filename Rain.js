class Rain{
  constructor(x, y, radius) {
    var options = {
        restitution:0,
        friction:0,
      
       isStatic: false
    }

    
    this.radius = radius;
    this.body = Bodies.circle(x, y, this.radius, options);

    World.add(world, this.body);
  }
  display(){
    
    push();
    translate(this.body.position.x, this.body.position.y);
    
    ellipseMode(RADIUS);
    
   

    
    fill(0,200,255);

    ellipse(0,0,this.radius, this.radius)
    pop();
  }
  }
