const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var ground;
var ash,ashImage;
var pokeball;
var ivy;
var pball;
var back;
var gamescore=0;
var Charmander;
function preload()
{
ashImage=loadImage("Images/ash2.png");
back=loadImage("Images/back.jpg");

}
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(600,height-250,1200,2);
    pball=new Pokeball(910,180,12);
    ivy=new Enemy(68,450,1);
    
    slingshot=new SlingShot(pball.body,{x:913,y:180});
}

function draw(){
    background(back);
    textSize(30);
    fill("white");
    text("Score: "+gamescore,900,50);
    Engine.update(engine);
    console.log(mouseX,mouseY);
    image(ashImage,900,100,100,300);
    pball.display();
    ivy.display();
    ground.display();
    slingshot.display();
    ivy.score();
}

function mouseDragged(){

    Matter.Body.setPosition(pball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
   
    slingshot.fly();
}
function keyPressed()
{
    if(keyCode==32)
    {
        Matter.Body.setPosition(pball.body,{x:910,y:180});
        slingshot.attach(pball.body);
    }
    if(keyCode==69)
    {

        Charmander=new Enemy(80,450,2);
    }
   

}