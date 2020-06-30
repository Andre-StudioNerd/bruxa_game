function keyPressed() {
  jogo.keyPressed(key)
  jogo.pause(key)
  telaInicial.iniciar(key)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  jogo = new Jogo()
  //jogo.setup()
  telaInicial = new TelaInicial()
  
  cenas = {
    jogo,
    telaInicial
  }
  
  botaoGerenciador = new Botao('Aperte ENTER para iniciar', width/2, height/2)
}

function draw() {
  //jogo.draw()
  //telaInicial.draw()
  cenas[cenaAtual].draw()
  frameRate(speedJogo)
}