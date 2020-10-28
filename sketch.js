
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}


function setup() {
  createCanvas(600, 600);
monkey=createSprite(80,315,20,20); 
 monkey.addAnimation("moving",monkey_running); 
 monkey.scale=0.1
  
  ground=createSprite(400,350,900,10); 
 ground.velocityX=-4; 
ground.x=ground.width/2;
console.log(ground.x)
  
  bannana=createSprite 
  
}

function draw() {
background("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,500);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/getFrameRate())
  text("survival Time: "+survivalTime,100,50);
  
  food();
  obstacles();
}

function food (){
   banana=createSprite(Math.round(random(150,250)),104,45,6)
    banana.addImage(bananaImage)
    banana.velocityY=2
    banana.lifetime=350
    FoodGroup.add(banana)  
}
function obstacles (){
   obstacle=createSprite(Math.round(random(150,250)),104,45,6)
    obstacleobstacleobstacle.addImage(obstacleImage)
    obstacleobstacle.velocityY=2
    obstacle.lifetime=350
    obstacleGroup.add(obstacle)  
}




