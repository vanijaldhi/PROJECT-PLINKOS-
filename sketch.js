
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
//const Constraint = Matter.Constraint;

  var plinkos = [];
  var divisions = [];
  var particles = [];
  var divisionHeight = 300;

var ball, obstacle, block, ground;

function setup() {
  createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;


  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Division(k, height - divisionHeight / 2, 10, divisionHeight))
  }

  for (var j = 75; j <= width; j = j +50) {
    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width ; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }
  
  ground1 = new Ground(240, 800, 480, 30);

}

function draw() {
  background(40, 30, 110);

  Engine.run(engine);

  ground1.display();
  if(frameCount  % 60 ==0){
    particles.push(new Particle(random(10,470),-10));
  }
 
  for ( var j = 0; j < particles.length; j++){
    particles[j].display();
    }

   for ( var k= 0; k < divisions.length; k++){
      divisions[k].display();
   }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display()
  }

  drawSprites();
}