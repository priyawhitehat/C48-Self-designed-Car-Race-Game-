var db
var count = 0
var car1img,car2img,car3img,car4img,trackimg;
var playerindex
var state
var car1,car2,car3,car4,cars
var allplayers;
var car1d,car2d,car3d,car4d,car1r,car2r,car3r,car4r
var place=0;

function preload(){
  car1img = loadImage("car race/car image 1.png")
  car2img = loadImage("car race/car image 2.png")
  car3img = loadImage("car race/car image 3.png")
  car4img = loadImage("car race/car image 4.png")
  trackimg = loadImage("car race/track image.png")
  car1d = loadImage("car race/car image 1 down.png")
  car2d = loadImage("car race/car image 2 down.png")
  car3d = loadImage("car race/car image 3 down.png")
  car4d = loadImage("car race/car image 4 down.png")
  car1r = loadImage("car race/car image 1 right.png")
  car2r = loadImage("car race/car image 2 right.png")
  car3r = loadImage("car race/car image 3 right.png")
  car4r = loadImage("car race/car image 4 right.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  db = firebase.database();
  form = new Form()
  game = new Game()
  player = new Player()
  game.start()
}

function draw() {
  background(255,255,255);  
  if(count === 2 ){
    game.play()
  }

  if(place===2)
  {
    game.end();
  }
  drawSprites();
}
