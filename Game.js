class Game{
    constructor(){}
    getState(){
        var gameStateRef=database.ref('gameState');
        gameStateRef.on('value',function(data){
            gameState=data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        });
    }

    start(){
        if(gameState===0){
            player=new Player()
            player.getCount()
            form=new Form()
            form.display()
        }

        car1=createSprite(100,200);
        car1.addImage(car1Img);

        car2=createSprite(300,200);
        car2.addImage(car2Img);

        car3=createSprite(500,200);
        car3.addImage(car3Img);

        car4=createSprite(700,200)
        car4.addImage(car4Img);

        cars=[car1,car2,car3,car4];
        
    }

    play(){
        form.hide();
        Player.getPlayerInfo();
        // var display_position=150
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
        if(allPlayers!==undefined){
            var index=0;
            var x=180;
            var y;
            for(var plr in allPlayers){
                index+=1;//INDEX FOR CAR1 IS 1
                x+=207;
                y=displayHeight-allPlayers[plr].distance;

                cars[index-1].x=x;
                cars[index-1].y=y;

                if(index===player.index){
                   
                    push();
                   fill("#4A4A4A")
                   stroke("red");
                   strokeWeight(2)
                    tint(255,0);
                    circle(cars[index-1].x,cars[index-1].y,100);
                    pop();
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].y;
                }
            
                
            }


        }
        if(player.distance>3650){
            gameState=2
        }
        //name:distance
        if(keyIsDown(UP_ARROW) && player.index!==null){
            player.distance=player.distance+50;
            player.update();
        }
        drawSprites();
    }
    end(){
        console.log("game ended" );
    }
}