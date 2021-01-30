class Enemy{

        constructor(x,y,enemytype){
        
        var options={
            restituition:0.3,
            friction:1.0,
            density:1.0,
            isStatic:false
        }
        
        this.body = Bodies.rectangle(x,y,100,100,options);
        this.width = 100;
        this.height=100;
        if(enemytype==1)
        this.image = loadImage("Images/ivy.png");
        else if(enemytype==2)
        this.image = loadImage("Images/Charmander.png");
        
        this.pokeballImg = loadImage("Images/pokeball 2.png")
        World.add(world,this.body);
        this.visibility=255;
        }
        
        display(){
//console.log("speed"+this.body.speed);
        if(this.body.speed<5){
        var angle = this.body.angle;
         push();
         translate(this.body.position.x,this.body.position.y);
         rotate(angle);
         imageMode(CENTER);
         image(this.image,0,0,this.width,this.height);
         pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.visibility-=5;
           // tint(255,this.visibility);
           textSize(35);
           fill("white");
           text("Gocha",68,480);
            image(this.pokeballImg,68,500,36,36);
            pop();
        }
        
        
        
    }       

    score()
    {
        if(this.visibility<0 && this.visibility>-1005)
        {
            gamescore++;
            console.log(gamescore);
        }
    }
        
}       
        
        
        
        
        
        
        
 