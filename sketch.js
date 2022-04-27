//variáveis da bolinha
let xBolinha c0;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 18;
let raqueteAltura = 90;


//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;



//placar do jogo
let meuspontos = 0;
let pontosDoOponente = 0;

// som do jogo 
let ponto;
let raquetada;
let trilha; 

function preload(){
  trilha = loadSound();
  raquetada = loadSound();
  ponto = loadSound();
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
  
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
//verificaColisaoRaquete();
verficaColisaoRaquete(xRaquete, yRaquete)
  mostraRaquete (xRaqueteOponente,yRaqueteOponente
mostraraquete 
                 
                 
function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(){
  rect(xRaquete, yRaquete, raqueteComprimento, 
      raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && 
      yBolinha - raio < yRaquete + raqueteAltura && 
      yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}
function verificaColisaoRaquete(x,y){
   colidiu = collideRetCicle(x,
y,raqueteComprimento,raqueteAltura,xBolinha,raio);
  if (colidiu){
   velocidadeXBolinha *= 1;
   }
 } 
  
  
  
  
function inclui Paclar () {
stroke(255)  
textAlign(CENTER)
textSize(16);
fill(color 255,140,0)
rect(150,10,40,20)
fill(255);
text(meuspontos, 170, 26);
fill(color)(255,140,0)
rect(450,10,40,20)
fill(255);
text(pontosdoOponente, 470,26)  
  
  
function marcarPonto(){
if(xBolinha> 500){
  meuspontos+=1; 
  ponto.play();
}
  if(xBolinha< 10){
  pontosdoOponente +=1; 
  ponto.play();
} 
}