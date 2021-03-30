var wall, thickness;
var speed, weight, bullet;


function setup() {
  createCanvas(1600,400);

 speed=random(223, 321)
 weight=random(30, 52)
 thickness=random(22,83)
 
 wall=createSprite(1500, 200, thickness, height/2)
 bullet=createSprite(50, 200, 50, 5)
bullet.velocityX=speed;
bullet.shapeColor=color(255)
}

function draw() {
  background("black");  
  bullet.collide(wall)
  if(hasCollided(bullet,wall))
  {
    bullet.velocity=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness)
    console.log(damage)
    if(damage>10)
    {
      wall.shapeColor=("red");
    }
    if(damage<10)
    {
      wall.shapeColor=("yellow");
    }
  }
  drawSprites();
}


function hasCollided(lbullet, lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;                     
}