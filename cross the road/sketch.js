function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagenDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}















