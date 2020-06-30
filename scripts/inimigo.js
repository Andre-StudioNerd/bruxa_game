class Inimigo extends Animacao {
  constructor(matriz, imagem, x, distanciaChao, largura, altura, larguraSprite, alturaSprite, velocidade) {
    super(matriz, imagem, x, distanciaChao, largura, altura, larguraSprite, alturaSprite)

    this.y = height - this.distanciaChao + 6
    this.velocidade = velocidade
  }

  move() {
    this.x -= this.velocidade
  }

  reaparece() {
    if (this.x < -this.largura) {
      this.x = width
    }
  }

}