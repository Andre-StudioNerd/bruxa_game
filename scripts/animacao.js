class Animacao {
  constructor(matriz, imagem, x, distanciaChao, largura, altura, larguraSprite, alturaSprite){
    this.matriz = matriz
    this.imagem = imagem
    this.largura = largura
    this.altura = altura
    this.x = x
    this.distanciaChao = distanciaChao
    this.y = height - this.distanciaChao
    this.larguraSprite = larguraSprite
    this.alturaSprite = alturaSprite
    
    this.index = 0
  }
  
  exibe() {
    image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.index][0], this.matriz[this.index][1], this.larguraSprite, this.alturaSprite);
    
    
    
    this.index >= this.matriz.length - 1 ? this.index = 0 : this.index++
  }
}