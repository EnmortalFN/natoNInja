class Obstacles{
    constructor(x,y) {
  this.spt=createSprite(x,y,width,height);
  this.spt.width=random([100,135,80]);
  this.spt.height=random([65,35,100]);
  this.spt.addImage(obstacleimg)
  this.spt.scale=0.1;
    }
}