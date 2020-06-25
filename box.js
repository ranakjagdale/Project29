class Box  {
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.2,
            'friction':0.0,
            'density':0.2,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        //var angle = this.body.angle;
        //push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
       
        fill("grey");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y,25,35);
      //  pop();
      }
  
  };
  