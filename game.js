class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,600);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,600);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
        if (frameCount % 20 === 0) {
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: fruits.addImage("fruit1",fruit1_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                     }
                     fruitGroup.depth = player1;
                     player1.depth++;
                     fruitGroup.add(fruits);
                      fruitGroup.lifetime =200;  
                 }
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1] = x;
                     players[index - 1] = y;
                       
                     if(index === player.index){
                         
                         
                        // text(allPlayers[plr].name ,x,y);
                        
                         
                     }
                    
                     
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 
                 if (player.index !== null) {
                     //fill code here, to destroy the objects.
                     if (fruitGroup.isTouching(player1)||fruitGroup.isTouching(player2)){
                        //fruitGroup.destroyEach();
                        //console.log("w")
                        if(fruitGroup.isTouching(player1)){
                            score1++
                        }
                        if(fruitGroup.isTouching(player2)){
                            score2++
                        }
                     }
                  }
                 
                

         
                  player1.position.x = -player.distance;
                  player2.position.x = -player.distance;
        
         

    }

    end(){
       console.log("Game Ended");
    }
}