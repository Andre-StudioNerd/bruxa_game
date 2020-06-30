function preload() {
  imagemCenario = loadImage("imagens/cenario/floresta.png");
  imagemPersonagem = loadImage("imagens/personagem/correndo.png");
  imagemInimigo = loadImage("imagens/inimigos/gotinha.png");
  imagemInimigoGrande = loadImage("imagens/inimigos/troll.png");
  imagemInimigoVoador = loadImage("imagens/inimigos/gotinha-voadora.png");
  somDoGame = loadSound("sons/trilha_jogo.mp3")
  somPulo = loadSound("sons/somPulo.mp3")
  somGameOver = loadSound("sons/somGameOver.wav")
  somPerderVida = loadSound("sons/somPerderVida.wav")
  gameOver = loadImage("imagens/assets/game-over.png")
  
  imagemTelaInicial = loadImage("imagens/cenario/telaInicial.png")

  fonteInicio = loadFont("imagens/assets/fonteTelaInicial.otf")
  
  imagemCoracao = loadImage("imagens/assets/coracao.png")
  
  fita = loadJSON("fita/fita.json")
  
  fonteJogo = loadFont('imagens/assets/fonteEnter.ttf')
  
  heart = loadImage("imagens/assets/coracao.png")
  heartVazio = loadImage("imagens/assets/coracaoVazio.png")
}