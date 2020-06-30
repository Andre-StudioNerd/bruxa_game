class Pontuacao {
  constructor(){
    
    this.pontos = 0 
    this.align = RIGHT
    this.size = 50
    this.x = width - 30
    this.y = 50
    this.acrescent = 0.2
    this.texto = parseInt(this.pontos)
  }
  
  exibe() {
    textFont(fonteJogo)
    fill("#fff")
    textAlign(this.align)
    textSize(this.size)
    this.texto = parseInt(this.pontos)
    text(this.texto, this.x, this.y)
    this.pontos += this.acrescent
    //console.log(this.pontos)
    if((parseInt(this.pontos) == 100) || (parseInt(this.pontos) == 200) || (parseInt(this.pontos) == 300) || (parseInt(this.pontos) == 1000) || (parseInt(this.pontos) == 2000)){
      //vidas.ganhaVida()
      speedJogo+= .8
      this.acrescent+= 0.05
      console.log(speedJogo)
    }
  }
  
  over() {
    image(gameOver, width / 2 - 206, height / 2 - 39)
    this.align = CENTER
    this.x = width/2
    this.y = 2 * height/3
    this.texto = `PONTUACAO FINAL: ${parseInt(this.pontos)}`
    fill("#fff")
    textSize(50)
    textAlign(CENTER)
    text("Ripsta foi atingida!", this.x, this.y + 50)
  }
}