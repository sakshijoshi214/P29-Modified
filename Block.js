class Block {
    constructor(x, y, width, height) {
      var options = {
          restitution:0.4,
          friction:0.1
          //density: 1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
  
  display(){
    console.log(this.body.speed);
  
    if(this.body.speed<30){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      strokeWeight(3);
      stroke("green");
      rect(0, 0, this.width, this.height);
      pop();
    }

    else {
        push();
        //this.Visibility = this.Visibility - 5
        tint(255,this.Visibility);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        World.remove(world,this.body);
        pop();
    }
  }
  };