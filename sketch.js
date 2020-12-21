const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score=0
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    block1=new Block(330,235,30,40)
    block2=new Block(360,235,30,40)
    block3=new Block(390,235,30,40)
    block4=new Block(420,235,30,40)
    block5=new Block(450,235,30,40)

    block6=new Block(360,195,30,40)
    block7=new Block(390,195,30,40)
    block8=new Block(420,195,30,40)

    block9=new Block(390,155,30,40)

    polygon=new Pyramid(200,200,50,50)
    chain1=new SlingShot(polygon.body,{x:200,y:50})
}


function draw(){
    background(0);
    Engine.update(engine);
    noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    block1.display()
    block1.score()
    block2.display()
    block2.score()
    block3.display()
    block3.score()
    block4.display()
    block4.score()
    block5.display()
    block5.score()
    block6.display()
    block6.score()
    block7.display()
    block7.score()
    block8.display()
    block8.score()
    polygon.display()
    chain1.display()
    strokeWeight(4);
}
