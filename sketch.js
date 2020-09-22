//create the variables for the car
var database;
var canvas,backgroungImg;
var gameState = 0;
var playerCount;
var form,player,game;
var distance = 0;
var allPlayers;
var cars,car1,car2,car3,car4;

function setup()
{
    //use the firebase database
    database = firebase.database();
    canvas = createCanvas(displayWidth - 100 , displayHeight - 150);
    game = new Game();
    game.getState();
    game.start();
    
}

function draw()
{
    background("white");
    if(playerCount === 4)
    {
        game.update(1);
    }
    if(gameState === 1)
    {
        game.play();
    }
    

}


