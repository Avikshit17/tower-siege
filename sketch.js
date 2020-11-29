const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var engine,world
var ground,stand
var box1,box2,box3,box4,box5
var box6,box7,box8,box9
var box10,box11,box12
var shoot
var connection
function setup() {
  createCanvas(800,800);
engine=Engine.create()
world=engine.world

ground=new Ground(400,790,800,20)
stand=new Box(600,400,300,20)
box1=new Box(500,368,50,50)
box2=new Box(550,368,50,50)
box3=new Box(600,368,50,50)
box4=new Box(650,368,50,50)
box5=new Box(700,368,50,50)
box6=new Box(630,318,50,50)
box7=new Box(680,318,50,50)
box8=new Box(580,318,50,50)
box9=new Box(530,318,50,50)
box10=new Box(550,268,50,50)
box11=new Box(600,268,50,50)
box12=new Box(650,268,50,50)
shoot=new Box(150,300,50,50)
 connection=new Connection(shoot.body,{x:150,y:300})
}

function draw() {
 background("green")
 ground.display()
 stand.display()
 box1.display()
 box2.display()
 box3.display()
 box4.display()
 box5.display()
 box6.display()
 box7.display()
 box8.display()
 box9.display()
 box10.display()
 box11.display()
 box12.display()
 shoot.display()
 connection.display()
}
function mouseDragged()
{
  Matter.Body.setPosition(shoot.body,{x:mouseX,y:mouseY})
}
function mouseReleased()
{
  console.log("hi")
  connection.fly()
}

