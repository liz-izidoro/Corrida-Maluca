class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./assets/TITULO.png", "nome do jogo");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  display() {
    this.setElementStyle();
    this.setElementPosition();
  }

  setElementStyle() {
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.titleImg.class("gameTitle");
    this.greeting.class("greeting");
  }

  setElementPosition() {
    this.input.position(120, 160);
    this.playButton.position(width / 2 - 110, height / 2 - 80);
    this.titleImg.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height/ 2 - 100);
  }

}
