let snake;
let permitKey;
let right = false,left = false,up = false,down = false;
let foodx = 60,foody = 60;
let frames = 10;

function giveFood(){
  let food = createVector(foodx,foody);
  if(snake.foodEaten(food)){
  if(score.incrementScore()){
    frames += 5;
  }
  foodx = floor(random(48.5) + 1) * 10;
  foody = floor(random(48.5) + 1) * 10;
  food = createVector(foodx,foody);
}
fill(255,0,105);
rect(food.x, food.y, 10, 10);
frameRate(frames);
}


function setup()
{
  createCanvas(500, 500).parent("canvasParent")
  snake = new Snake();
  score = new scoringSystem();
}

function draw()
{
  background(51)
  permitKey = true;
  snake.update();
  snake.draw();
  if(snake.endGame()){
    background(255,0,0);
    modalPopUp();
    noLoop();
  }
  giveFood();
}

function keyPressed(){
  if(permitKey){
    if(keyCode === UP_ARROW){
      up = true;
      if(down === false){
        snake.direction(0,-1);
      }
      left=right=false;
      permitKey = false;
    }
    if(keyCode === DOWN_ARROW){
      down = true;
      if(up === false){
        snake.direction(0,1);
      }
      left=right=false;
      permitKey = false;
    }
    if(keyCode === RIGHT_ARROW){
      right = true;
      if(left === false){
        snake.direction(1,0);
      }
      up=down=false;
      permitKey = false;
    }
    if(keyCode === LEFT_ARROW){
      left = true;
      if(right === false){
        snake.direction(-1,0);
      }
      up=down=false;
      permitKey = false;
    }
  }
}

function modalPopUp(){
  document.getElementById('popup-1').classList.toggle('active');// ! change toggle to add
  let score = document.getElementById('score').textContent;
  document.getElementById('scoreMsg').textContent = score;  
}

function closeModal(){
  document.getElementById('popup-1').style.display = 'none';
  // document.getElementById('popup-1').classList.remove('active');
}

let restart = () => location.reload();
