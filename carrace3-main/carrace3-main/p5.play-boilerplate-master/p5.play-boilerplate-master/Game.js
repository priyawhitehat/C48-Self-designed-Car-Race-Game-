class Game{
    constructor(){

    }
   getState(){

   }

   updateState(){

   }
   
   
    start(){
       player.getPlayerCount()
       player.getFinishedPlayers();
        form.display()
        car1 = createSprite(300,300,50,50)
        car1.addImage(car1img)
        car2 = createSprite(500,300,50,50)
        car2.addImage(car2img)
        
        car1.scale = 0.1
        car2.scale = 0.1
      
        cars = [car1,car2]

        

    }
    play(){
       form.hide() 
       background("Green")
       imageMode(CENTER)
       image(trackimg,displayWidth/2,displayHeight/2,displayWidth,displayHeight)

       var x = 700
       var y = 300
       player.getPlayerInfo()
        var index = 0
       for(var eachPlayer in allplayers){
        index = index+1        
        cars[index-1].x=allplayers[eachPlayer].xposition;
        cars[index-1].y=allplayers[eachPlayer].yposition-(index*35) 
       }
       
       if(keyIsDown(LEFT_ARROW)){
           player.xposition = player.xposition - 5
           player.updatePlayers()
           
       }

       if(keyIsDown(DOWN_ARROW)){
        player.yposition = player.yposition + 5
        player.updatePlayers()
        car1.addImage(car1d)
        car2.addImage(car2d)
        car3.addImage(car3d)
        car4.addImage(car4d)
        
    }
    
    if(keyIsDown(RIGHT_ARROW)){
        player.xposition = player.xposition + 5
        player.updatePlayers()
        car1.addImage(car1r)
        car2.addImage(car2r)
        car3.addImage(car3r)
        car4.addImage(car4r)
    }
       
    if(player.xposition>900&&player.yposition>500&&player.finish===false)
    {
        player.finish=true;
        player.getFinishedPlayers();
        place=place+1
        player.updatePlayers();
        player.updateFinishedPlayers();
    }

}   

 end()
 {
    background("yellow");
    player.getPlayerInfo();
    var index = 0
    for(var eachPlayer in allplayers){
     index = index+1        
     cars[index-1].x=allplayers[eachPlayer].xposition;
     cars[index-1].y=allplayers[eachPlayer].yposition-(index*35) 
     textSize(50);
     fill("red")
     stroke("black")
     strokeWeight(20)
     text("GameOver, Congratulations!!!!", 500,50);
     textSize(30);
     fill("red")
     text("PlayerRank "+allplayers[eachPlayer].place,cars[index-1].x+100,cars[index-1].y);
    }
    
 }   


}