class TelaInicial {
  constructor() {
  //  this.cenarioTelaInicial = new Cenario(imagemTelaInicial, 10)
  }
  
  iniciar(key) {
    if((cenaAtual == "telaInicial")&&(key=="Enter")){
      botaoGerenciador.alteraCena()
    }
  }
  
  draw(){
    this._imagemDeFundo()
    //this.cenarioTelaInicial.exibe()
    this._texto()
    this._botao()
  }
  
  _imagemDeFundo() {
    image(imagemTelaInicial,0,0, width, height)
  }
  
  _texto() {
    textAlign(CENTER)
    textFont(fonteInicio)
    textSize(50)
    text("as aventuras de", width/2, height/3)
    textSize(150)
    text("Ripsta", width/2, height/2)
  }
  
  _botao() {
    botaoGerenciador.y = height / 7 * 5
    botaoGerenciador.draw()
  }
}