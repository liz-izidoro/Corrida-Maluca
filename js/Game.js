class Game {
  constructor() {}

  start() {
    player = new Player();
    player.getPlayerCount();

    form = new Form();
    form.display();
  }

  getGameState() {
    var gameStateRef = database.ref("gameState");
    
    gameStateRef.on("value", data => {
      gameState = data.val();
    });
    
    // funcao anonima
    // gameStateRef.on("value",  function (blabla) {
    //   gameState = blabla.val();
    // });
  }

  setGameState() {
    database.ref("/").update({
      gameState: 4
    });
  }

}
