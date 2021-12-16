var nato;
var monster;
var boss;
var platform;
var obstacle,obstacleGroup;
var gameState="play";
function preload(){
  natoimg=loadImage("sprites/natoninja.png");
  bgimg= loadImage("sprites/bg'.jpg")
  platformimage=loadImage("sprites/wall.png");
  monsterimg=loadImage("sprites/monster.png");
  bossimg=loadImage("sprites/boss.png");
  obstacleimg=loadImage("sprites/platform.png");
}

function setup(){
createCanvas(displayWidth,668)

platform=new Platform(width/2,665,width*5,50)

nato=new Player()
monster= new Monster(1500,420,20,20)
monster.spt.addImage(monsterimg);
    monster.spt.scale=0.8;
boss=new Monster(2000,420,20,20)
boss.spt.addImage(bossimg);
boss.spt.scale=2.5;
obstacleGroup=new Group()
for(var i = 20; i<width;i=i+800){


obstacle=new Obstacles(i,420);

obstacleGroup.add(obstacle.spt)
}
}
function draw(){
background("cyan");

if(gameState=="play"){
translate(  -nato.spt.x + width/2 , 0);
nato.spt.collide(obstacleGroup)
nato.applyGravity(); 
 nato.spt.collide(platform.spt)
        if (keyDown("left"))  
        { 
          nato.moveLeft();
        }
        if (keyDown("right")) 
        { 
          nato.moveRight();
        }
        if (keyDown("up"))
        {
          nato.jump();
        }
if(nato.spt.x>monster.spt.x){
  monster.spt.velocityX=5;
}
if(nato.spt.x<monster.spt.x){
  monster.spt.velocityX=-5;
}
if(nato.spt.x>width){
if(nato.spt.x>boss.spt.x){
  boss.spt.velocityX=5;
}
if(nato.spt.x<boss.spt.x){
  boss.spt.velocityX=-5;
}
}
if(monster.spt.x==boss.spt.x){
  monster.spt.destroy();
}

if(nato.spt.isTouching(obstacleGroup)||nato.spt.isTouching(monster.spt)||nato.spt.isTouching(boss.spt)){
  gameState="end"
}
if(nato.spt.x>2850){
  gameState="win"
}
}
else if(gameState=="end"){
  nato.spt.destroy();
  monster.spt.destroy()
  boss.spt.destroy()
  obstacleGroup.destroyEach();
  platform.spt.destroy()
  
  textSize(50)
  fill("red")
  text("GAME OVER",nato.spt.x,200)
 
}
else{
  nato.spt.destroy();
  monster.spt.destroy()
  boss.spt.destroy()
  obstacleGroup.destroyEach();
  platform.spt.destroy()
  
  textSize(50)
  fill("green")
  text("YOU WIN ",200,200)
 

}
drawSprites();
}