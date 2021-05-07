function setup() 
{
  createCanvas(800,400);
  var fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor= "green"
  var movingRect= createSprite(200,200,50,50);
  movingRect.shapeColor= "red"
}

function draw() {
  background("Blue");  
  drawSprites();
}