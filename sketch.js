var bullet, wall, thickness;
var speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(223, 321);
  thickness=random(30,70);
  bullet=createSprite(50, 200, 30, 10);
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=(80,80,80);
  bullet.velocityX = speed;
 
  
}

function draw() {
  background("lightgreen");  

  isCollided(wall,bullet);

  

  drawSprites();
}
function isCollided(obj1,obj2){
  if(obj1.x-obj2.x <= obj1.width/2+obj2.width/2){
    obj2.velocityX=0;

    damage= (0.5*weight*speed*speed)/(thickness*thickness*thickness);

    if(damage<10){
      obj2.shapeColor="green";
    }else if(damage>=10){
      obj2.shapeColor="red";
    }

  }




}