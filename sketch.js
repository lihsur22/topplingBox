const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var b1, b2, b3, b4;
var grund;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    b1 = new Box(200,300,50,50);
    b2 = new Box(175,200,50,50);
    b3 = new Box(210,100,50,50);
    b4 = new Box(225,0,50,50);

    grund = new Ground(200,350,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);

    b1.display();
    b2.display();
    b3.display();
    b4.display();

    grund.display();
   
}