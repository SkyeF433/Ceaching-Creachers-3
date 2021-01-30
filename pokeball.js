class Pokeball{

constructor(x,y,r){

var options={
    restituition:0.8,
    friction:0.5,
    density:1.0,
    isStatic:false
}

this.body = Bodies.circle(x,y,r,options);
this.radius = r;
this.image = loadImage("Images/pokeball.png");
World.add(world,this.body);
}

display(){

 var angle = this.body.angle;
 push();
 translate(this.body.position.x,this.body.position.y);
 rotate(angle);
 imageMode(CENTER);
 image(this.image,0,0,this.radius*2,this.radius*2);
 pop();
}
















}