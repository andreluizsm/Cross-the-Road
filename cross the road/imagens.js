//variáveis imagens 

let imagenDaEstrada;
let imagenDoAtor;
let imagenCarro;
let imagenCarro2;
let imagenCarro3;


let somDaTrilha;
let somColisao;
let somDoPonto; 



//código imagens

function preload(){
  imagenDaEstrada = loadImage("imagens/estrada.png");
  imagenDoAtor =  loadImage("imagens/ator-1.png");
  imagenCarro = loadImage("imagens/carro-1.png");
  imagenCarro2 = loadImage("imagens/carro-2.png");
  imagenCarro3 = loadImage("imagens/carro-3.png");
  imagenCarros = [imagenCarro, imagenCarro2, imagenCarro3,imagenCarro,imagenCarro2,imagenCarro3];

  somDaTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}
























