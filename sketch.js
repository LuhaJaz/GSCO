var car,wall,bg;
var speed,weight;
function preload(){
bg = loadImage ("racetrack.png");
}
function setup() {
  createCanvas(1600,400);
  speed =random(55,90);
  weight =random(400,1500);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite (1500,200,60,height/2);
  wall.shapeColor = "black";
  car.velocityX = speed;
}

function draw() {
  background(bg);  
  if(wall.x-car.x < (car.width+wall.width)/2) {
     car.velocityX=0;
      var deformation=0.5 * weight * speed* speed/22500;
       if(deformation>180) { 
         car.shapeColor="pink"; 
        } 
        if(deformation<180 && deformation>100) { 
          car.shapeColor="blue"; 
        } 
        if(deformation<100) { 
          car.shapeColor="purple"; 
        }
       }
  drawSprites();
}