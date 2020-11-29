var movingrect, fixedrect
var ob1, ob2, ob3




function setup() {
  createCanvas(800,400);
  movingrect = createSprite(400, 200, 100, 50);
  fixedrect = createSprite (600, 200, 50, 100);
  ob1 = createSprite (100, 200, 30, 30);
  ob2 = createSprite (200, 200, 30, 30)
  ob3 = createSprite (300, 200, 30, 30)
  movingrect.shapeColor="blue"
  fixedrect.shapeColor="blue"
  ob1.shapeColor="blue"
  ob2.shapeColor="blue"
  ob3.shapeColor="blue"
}

function draw() {
  background(255,255,255);  
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY
  if (isTouching(ob1, movingrect)) {
    ob1.shapeColor="red"
    movingrect.shapeColor="red"
  }
  else  {
    ob1.shapeColor="blue"
    movingrect.shapeColor="blue"
  }
  drawSprites();
}

