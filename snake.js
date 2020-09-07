class Snake{

constructor()
{
  this.xspeed = 1;
  this.yspeed = 0;
  this.body = []
  this.body[0] = createVector(0, 0)
  this.length = 1;
}

update(){
  let head = this.body[0].copy();
  head.x += this.xspeed * 10;
  head.y += this.yspeed * 10;
  this.body.unshift(head);
  this.body.length = this.length;
}

draw(){
  for (let index = 0; index < this.length; index++) {
    fill(0,255,0);
    rect(this.body[index].x,this.body[index].y,10,10);     
  }
}

direction(x,y){
  this.xspeed = x;
  this.yspeed = y;
}

foodEaten(foodVector){
  if(foodVector.equals(this.body[0])){
    this.length++;
    return true;
  }
  return false;
}

endGame(){
  let head= this.body[0];
  if(head.x < 0 || head.x >490 || head.y < 0 || head.y > 490){
    return true;
  }
  for (let index = 1; index < this.length; index++) {
    let bodyPart = this.body[index];
    if(head.x === bodyPart.x && head.y === bodyPart.y){
      return true;
    }
  }
  return false;
}
}