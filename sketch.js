var ground, groundImage, invisibleBoundary
var trex ,trex_running, invisibleGround;
var cloudImage, cloud
function preload(){
  trex_running=loadAnimation("trex1.png", "trex3.png", "trex4.png")
  groundImage=loadImage("ground2.png")
  cloudImage=loadImage("cloud.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50, 165, 20, 20)
 trex.addAnimation("trexLabel", trex_running)
 trex.scale = 0.5

 ground = createSprite(300, 180, 600, 10)
 ground.addImage("label_ground", groundImage)

invisibleGround = createSprite(300, 190, 600, 10)

invisibleGround.visible=false

invisibleBoundary = createSprite(300, 80, 600, 10)

invisibleBoundary.visible = false

}

function draw(){
  background("black")
  if (keyDown("space")){
    trex.velocityY=-4
  }
  trex.velocityY=trex.velocityY+0.5
  trex.collide(invisibleGround)
  trex.collide(invisibleBoundary)

ground.velocityX=-4


clouds()
if (ground.x<0){
  ground.x=ground.width/2
}
drawSprites()
}

function clouds(){
  if (frameCount%50==0){
  cloud=createSprite(600, 100, 20, 20)
  cloud.addImage("cloudLabel", cloudImage)
  cloud.velocityX=-5
  cloud.scale=0.85
  cloud.y=Math.round(random(20, 130))
 trex.depth=cloud.depth
 trex.depth=trex.depth+1
  }
}