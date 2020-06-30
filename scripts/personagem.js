class Personagem extends Animacao{
  constructor(matriz, imagem, x, distanciaChao, largura, altura, larguraSprite, alturaSprite){
  super(matriz, imagem, x, distanciaChao, largura, altura, larguraSprite, alturaSprite)
  
  this.yInicial = this.y
  this.y = this.yInicial
    
  this.velocidadePulo = 0
  this.gravidade = 2
  this.counter = 0
  
  this.invencivel = false
  }
  
  tornarInvencivel() {
    this.invencivel = true
    setTimeout(() => {this.invencivel = false}, 1000)
  }
  
  
  pula() {
    //console.log('pulei')
    if(speedJogo != 0) {
      this.counter++
      if(this.counter <= 2) {
        this.velocidadePulo = -30
        somPulo.play()
      } 
    }
  }
  
  aplicarGravidade() {
    //console.log('y pos pulo = ' + this.y)
    this.y += this.velocidadePulo
    this.velocidadePulo += this.gravidade
    //console.log('pulo = ' + this.velocidadePulo)
    //console.log('y = ' + this.y)
    
    if(this.y >= this.yInicial) {
      this.y = this.yInicial
      this.counter = 0
    }
    //console.log('y = ' + this.y)
  }
  
  estaColidindo(inimigo) {
    if(this.invencivel) {
     
      return false
    }
    
    noFill()
    
    const taxa = 0.4
    /*
    ellipse(this.x + this.largura/2,
      this.y + this.altura/2,
      this.largura * taxa,
      this.altura * taxa,)
    ellipse(inimigo.x + inimigo.largura/2,
      inimigo.y + inimigo.altura/2,
      inimigo.largura/2, 
      inimigo.altura/2)*/
    
    let colisao = collideRectRect(
      this.x + this.largura/2,
      this.y + this.altura/2,
      this.largura*taxa,
      this.altura * taxa + 50,
      inimigo.x + inimigo.largura/2,
      inimigo.y + inimigo.altura/2,
      inimigo.largura/2, 
      inimigo.altura/2)
    return colisao
  }
}