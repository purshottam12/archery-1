const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  compBase=new computerBase(1400,550,250,250)
  playerbase=new playerBase(400,550,250,250)
  player=new player1(400,375,100,150)
  player2=new player1(1400,375,100,150)
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);


   //Display Playerbase and computer base 
   compBase.display()
   playerbase.display()
  player.display()
  player2.display()
   //display Player and computerplayer


}
