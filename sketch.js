var asteroid,rocket,earth,star,bullet;
var asteroidImage,rocketImage, earthImage, backgroundImage, starImage,bullet;
var life;
var score;
var canvas;
var edges;

function preload (){
  asteroidImage=loadImage("asteroid.jpg")
  rocketImage=loadImage("rocket.png")
  earthImage=loadImage("earth.png")
  backgroundImage=loadImage("background.jpg")
  starImage=loadImage("star.jpg")
  bulletImage=loadImage("bullet.png")
}
 function setup (){
   canvas =createCanvas(1200,600)
    
   rocket=createSprite(50,550,50,20)
   rocket.addImage(rocketImage)
   rocket.scale=0.8
   
   
     
   //asteroid=createSprite(50,40,90,20)
  // asteroid.addImage(asteroidImage)
   //asteroid.scale=0.3
   //asteroid.velocityY=2
  
  edges =createEdgeSprites();

   
 }
 
 function draw(){
   background(backgroundImage)



   if(keyDown("UP_ARROW")){
     rocket.velocityY=-2
   }
   if(keyDown("DOWN_ARROW")){
    rocket.velocityY=2
  }
   if(keyDown("RIGHT_ARROW")){
     rocket.velocityX=2
   }

   if(keyDown("LEFT_ARROW")){
     rocket.velocityX=-2
   }
   if(keyDown("SPACE")){
    bullet = createSprite(50,40,90,20);
    bullet.x=rocket.x;
    bullet.y=rocket.y;
    bulletGroup=new Group()
    bullet.addImage(bulletImage);
    bullet.scale=0.5
    bulletGroup.add(bullet)
    bullet.velocityY=-10

   }
   rocket.bounceOff(edges)
   spwanasteroid()
   drawSprites()
 }

 function spwanasteroid(){
   if (frameCount % 80 === 0){
     var asteroid =createSprite(90,0,40,50);
     asteroid.x =Math.round(random(50,350));
     asteroid.addImage(asteroidImage);
     asteroid.scale = 0.5
     asteroid.velocityY = 3
   }
 }
 
 