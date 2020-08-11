var car,wall;
var speed,weight;
var deformation;


function setup() {
  createCanvas(1600,400);
 car = createSprite(50, 200, 50, 50);
 
 wall = createSprite(1100,200,60,height/2)
//wall.shapeColor(80,80,80) 

 speed = random(55,90);
 weight = random(400,1500);
}


function draw() {
  background(0,0,0);
  stroke("white")
  textSize(20);
  fill("white");
  car.velocityX = speed;
  deformation = 0.5*weight*speed*speed/22500

   if(car.x - wall.x < car.width/2 + wall.width/2 
  &&  wall.x - car.x < wall.width/2 + car.width/2
  && car.y - wall.y < car.height/2 + wall.height/2
  && wall.y - car.y <  car.height/2 + wall.height/2)
  {
   text("Results : " + car.shapeColor,200,200);

   car.velocityX = 0;
   //car.x = 800;
   car.velocityX = 0;
   car.velocityX = 0;
   wall.visible = false;
   if(deformation < 100){

   car.shapeColor = "green";
   }

    if(deformation > 100 && deformation < 180){

   car.shapeColor = "yellow";
   }

    if(deformation > 180){

   car.shapeColor = "red";
   }

  } 
  
  drawSprites();
}