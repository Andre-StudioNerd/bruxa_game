class Vidas {
  constructor(maximo, inicial){
    this.maximo = maximo
    this.inicial = inicial
    this.vidas = this.inicial
    
    this.xInicial = 20
    this.y = 20
    
    this.largura = 25
    this.altura = 25
  }
  
  draw(){
    for(let i = 1; i <= this.maximo; i++) {
      const margem = i * 10
      const posicao = this.xInicial * (i)
      
      if(i <= this.vidas) {
        image(heart, posicao + margem,this.y,this.largura,this.altura)
      } else {
        image(heartVazio, posicao + margem, this.y, this.largura, this.altura)
      }
    }
  }
  
  ganhaVida() {
    if(this.vidas < this.maximo) {
      this.vidas++
    }
  }
  
  perdeVida(){
    this.vidas--
    somPerderVida.play()
  }
}