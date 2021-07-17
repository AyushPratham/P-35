var dog;
var database, position;
var foodS = 0;

function preload(){
  dogImage = loadImage("images/dogImg.png")
  dogImage2 = loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
	createCanvas(800, 700);
  dog = createSprite(700,200,10,10);
  dog.addImage(dogImage);
  dog.scale = 0.2;
  foodObj = new food();
  var node = database.ref("Food");
  node.on("value", readposition);
  feedButton = createButton("Feed Dog");
  feedButton.position(400,100);
  feedButton.mousePressed(function(){
    writeFood(foodS);
    dog.addImage(dogImage2);
  });
  addFoodButton = createButton("Add Food");
  addFoodButton. position(500,100);
  addFoodButton.mousePressed(function(){
    database.ref("/").update({
      Food:foodS + 1
    });
  });
}

function draw() {  
  background("green");
  foodObj.display();
  drawSprites();
}

function writeFood(x){
  if(x < 0){
    x= 0;
  }else{
    x= x-1
  }
  database.ref("/").update({
    Food: x
  })
}

function readposition(data){
  foodS = data.val();
}

