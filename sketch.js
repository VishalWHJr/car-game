var database;
var form, player, game;
var gameState=0;
var playerCount;
var allPlayers;
var car1, car2, car3,car4;
var cars=[];
var car1Img, car2Img, car3Img, car4img;
var track;


function preload(){
    car1Img=loadImage("car1.png");
    car2Img=loadImage("car2.png");
    car3Img=loadImage("car3.png");
    car4Img=loadImage("car4.png");
    track=loadImage("track.jpg");
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-20);
    database=firebase.database();
    
    game=new Game()
    game.getState();
    game.start()
  
}

function draw(){
    background("white");
    if(playerCount===4){
        game.update(1)
    }
    if(gameState===1){
        clear();
        game.play();
    }
    if(gameState===2){
        game.end();
    }
}


