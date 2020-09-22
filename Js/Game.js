class Game
{
    constructor()
    {

    }
    //read the gameState from the database

    getState()
    {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data)
        {
            gameState = data.val();
        })

    }
    //change the gameState in the database
    update(state)
    {
        database.ref('/').update({

            gameState: state

        })

    }
     // start 
     start()
     {
         if(gameState === 0)
         {
             player = new Player();
             player.getCount();
             
             form = new Form();
             form.display();
         }
         car1 = createSprite(100,200);
         car2 = createSprite(300,200);
         car3 = createSprite(500,200);
         car4 = createSprite(700,200);
         cars = [car1,car2,car3,car4];
     }
     play()
     {
         form.hide();
         textSize(30);
         text("Game Start",120,100);
         Player.getPlayerInfo();
         console.log(allPlayers);

         if(allPlayers!== undefined)
         {
             //index of the array cars

             var index = 0;
             //x and y position of the cars

             var x = 0;
             var y;

             for(var plr in allPlayers)
             {

                //add 1 to the index for every iteration of the loop
                index = index +1;

                // position the cars a little away from eachother in x direction
                x = x+200;

                //use data from the database to display the cars in y direction

                y = displayHeight - allPlayers[plr].distance;

                //setting the x and y coordinate

                cars[index-1].x = x;
                cars[index-1].y = y;

                //give colour to the active car

                if(index === player.index)
                {
                    cars[index-1].shapeColor = "green";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }

             }

         }
         if(keyIsDown(UP_ARROW) && player.index!== null)
         {
            player.distance += 50;
            player.update();

         }
         drawSprites();
     }
}
 
 