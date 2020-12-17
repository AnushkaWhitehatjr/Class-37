class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }
  play()
  {
    form.hide1();
    textSize(30);
    text("Game Start",200,200);
    Player.getPlayerInfo()
    if(allplayers!==undefined)
    {
      var dp=130;
      for(var plr in allplayers)
      {
        if(plr==="player"+player.index)
        {
        fill("red");
        }
        else
        {
        fill("black");
        }
        dp+=20;
        textSize(15);
        text(allplayers[plr].name+" : "+allplayers[plr].distance,120,200);
      }

      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=50
        player.update();
      }
      
    }
  }
}
