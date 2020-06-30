class Jogo {
  constructor() {
    this.indice = 0
    
    this.lastSpeed = 40
    this.mapa = fita.mapa
  }

  keyPressed(key) {
    if (key == "ArrowUp" || key == " ") {
      personagem.pula(somPulo)
    }
  }
  
  pause(key){
    if(key=="Escape") {
      this.lastSpeed = speedJogo
      //fill('rgba(0,0,0,0.8)');
      //noLoop()
      speedJogo = 0
      
    }
    if(speedJogo == 0){
      if(key=="Enter"){
       speedJogo = this.lastSpeed
       frameRate(speedJogo)
      }
    }
  }
  

  setup() {
    cenario = new Cenario(imagemCenario, 5)
    pontuacao = new Pontuacao()
    vidas = new Vidas(fita.configuracoes.vidaMaxima,fita.configuracoes.vidaInicial)
    
    
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 250, 150, 185, 220, 270)
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width, 90, 74, 74, 104, 104, 10)
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 300, 300, 300, 400, 400, 10)
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width, 500, 150, 125, 200, 150, 10)

    inimigos.push(inimigo)
    inimigos.push(inimigoGrande)
    inimigos.push(inimigoVoador)
    
    
    somDoGame.loop()
  }

  draw() {
    cenario.exibe()

    personagem.exibe()
    personagem.aplicarGravidade()

    const linhaAtual = this.mapa[this.indice]
    const inimigo = inimigos[linhaAtual.inimigo]
    const inimigoVisivel = inimigo.x <= -inimigo.largura


    inimigo.velocidade = linhaAtual.velocidade
    inimigo.exibe()
    inimigo.move()

    
    
    if (inimigoVisivel) {
      this.indice++
      inimigo.reaparece()
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0
      }
    }
    
    if (personagem.estaColidindo(inimigo)) {
      vidas.perdeVida()
      personagem.tornarInvencivel()
      if (vidas.vidas === 0) {
        //vidas.perdeVida()
        fill('rgba(0,0,0,0.8)');
        rect(0, 0, width, height)
        pontuacao.over()
        somDoGame.stop()
        somGameOver.play()
        personagem.counter = 3
        noLoop()
      }
    }
    vidas.draw()
    pontuacao.exibe()
    
    
  }
}