
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime = 0
var ground
var gameState = "play"


function preload(){
  
  
  monkey_running =    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(500,400)
  
  monkey = createSprite(50,310)
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.11
  
  ground = createSprite(300,350,1000,12)
  ground.velocityX = -4
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
 
  
 

  
}


function draw() {
  
  background(255)
    
    if(ground.x<0){
    
    ground.x = width/2
     }
  
  
  
  if(keyDown("SPACE") && monkey.y>=310){
    
    monkey.velocityY = -17
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
     
  //console.log(monkey.y)
  
  if(monkey.isTouching(FoodGroup)){
    
    FoodGroup.destroyEach();
  }
  
  if(monkey.isTouching(obstacleGroup)){
    
    
    FoodGroup.setVelocityXEach(0)
    obstacleGroup.setVelocityXEach(0)
  

    
    survivaltime = 0;
  }
  

  
  
  bananas();
  obstacles()
  
  
  
  monkey.collide(ground);
  obstacleGroup.collide(ground);
  

  drawSprites();
  
  survivaltime = Math.round(frameCount/frameRate())
  textSize(20)
  text("Survival Time: " + survivaltime,200,40)
}

function bananas(){
 
  if(frameCount % 80 === 0){
    
     banana = createSprite(510,Math.round(random(120,200))) 
    banana.velocityX = -5
    banana.addImage("fruit",bananaImage)
    banana.scale = 0.1
    banana.lifetime = -1
    FoodGroup.add(banana)
  }
  }

function obstacles(){
  
  if(frameCount % 300 === 0){
    
    obstacle = createSprite(520,350)
    obstacle.velocityX = -6
    obstacle.addImage("stone",obstaceImage)
    obstacle.scale = 0.2
    obstacle.debug = false
    obstacle.setCollider('circle',0,0,200)
    obstacleGroup.add(obstacle);
  }
}



