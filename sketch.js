var astronaut;



function preload(){
bg = loadImage("iss.png");
sleep = loadAnimation("sleep.png");
brush = loadAnimation("brush.png");
gym = loadAnimation("gym21.png", "gym22png");
eat = loadAnimation("eat1.png", "eat2.png");
move = loadAnimation("move.png", "move1.png");
}




function setup() {
  createCanvas(800,400);

  astronout = createSprite(300, 230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;






}

function draw() {
  background(bg); 

  if (keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing", brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;

  }

  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym );
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    }
    if (keyDown("LEFT_ARROW")){
      astronaut.addAnimation("eating", eat);
      astronaut.changeAnimation("eating");
      astronaut.y = 350;
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
    }
    
    drawSprites();
}