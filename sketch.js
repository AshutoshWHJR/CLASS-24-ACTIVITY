const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground, pig1, log1,bird;

function setup(){
    var canvas = createCanvas(1400,600);
    engine = Engine.create();
    world = engine.world;
    
    bird = new Bird(200,100,100,100);

    ground = new Ground(700,height,1400,40)

    box1 = new Box(700,520,70,70);
    pig1 = new Pig (800,520);
    box2 = new Box(900,520,70,70);
    log1 = new Log(800,480,20,300,PI/2)

    box3 = new Box(700,460,70,70);
    pig2 = new Pig (800,460);
    box4 = new Box(900,460,70,70);
    log2 = new Log(800,440,20,300,PI/2)

    log3 = new Log(760,400,20,150,PI/4)  
    box5 = new Box(790,400,70,70);
    log4 = new Log(855,400,20,150,-PI/4)

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    bird.display();

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    log3.display();
    box5.display();
    log4.display();
}