let panes = [];
let viejos = [];
let giovanna = [];
let chichico = [];
let tofi = [];
let vertiz=[];
let david =[];
let gfe = [];
let valladares = [];
let valladares2=[];
let yeckle = [];

let panImage;
let tofiImage;
let ViejoImage;
let vertizImage;
let giovannaImage;
let chichicoImage;
let davidImage;
let GfeImage;
let ValladaresImage;
let ValladaresSleepingImage;
let carritoImage;
let yeckleImage;
let keyss=[];
let izquierda;
let derecha;
let tecla;
function preload() {

	panImage = loadImage('https://raw.githubusercontent.com/AngelVillavicencio/Game-124/master/pancito.png');
  tofiImage = loadImage('https://raw.githubusercontent.com/AngelVillavicencio/Game-124/master/tofi.jpg');
  ViejoImage = loadImage('https://raw.githubusercontent.com/AngelVillavicencio/Game-124/master/viejo.jpg');
  vertizImage = loadImage('https://raw.githubusercontent.com/AngelVillavicencio/Game-124/master/vertiz.jpg');
  giovannaImage = loadImage('https://raw.githubusercontent.com/AngelVillavicencio/Game-124/master/giovanna.jpg');
  chichicoImage = loadImage('https://raw.githubusercontent.com/AngelVillavicencio/Game-124/master/chichico.jpg');
	davidImage = loadImage('https://raw.githubusercontent.com/AngelVillavicencio/Game-124/master/david.jpg');
  GfeImage = loadImage('https://raw.githubusercontent.com/AngelVillavicencio/Game-124/master/angel.jpeg');
  ValladaresImage = loadImage('https://raw.githubusercontent.com/AngelVillavicencio/Game-124/master/valladares.jpg');
  ValladaresSleepingImage = loadImage('https://raw.githubusercontent.com/AngelVillavicencio/Game-124/master/valladares2.jpg');
  carritoImage = loadImage('https://raw.githubusercontent.com/AngelVillavicencio/Game-124/master/carrito.png');
  yeckleImage = loadImage('https://raw.githubusercontent.com/AngelVillavicencio/Game-124/master/yeckle.PNG');
}
function setup() {
  panImage.loadPixels();
  tofiImage.loadPixels();
  ViejoImage.loadPixels();
  vertizImage.loadPixels();
  giovannaImage.loadPixels();
  chichicoImage.loadPixels();
  davidImage.loadPixels();
  GfeImage.loadPixels();
  ValladaresImage.loadPixels();
  ValladaresSleepingImage.loadPixels();
  carritoImage.loadPixels();

  createCanvas(windowWidth, windowHeight);
  player = new Player(windowWidth/2,0);

  for(let i=0;i<10;i++){
  	panes[i]= new Ball(panImage,random(100,windowWidth-50),random(-1000,0),10,2);
  }
  for(let i=0;i<10;i++){
    viejos[i]= new Ball(ViejoImage,random(100,windowWidth-50),random(-1000,0),-10,2);
  }
  for(let i=0;i<10;i++){
    giovanna[i]= new Ball(giovannaImage,random(100,windowWidth-50),random(-1000,0),-10,2);
  }
  for(let i=0;i<10;i++){
    chichico[i]= new Ball(chichicoImage,random(100,windowWidth-50),random(-1000,0),-10,2);
  }
  for(let i=0;i<10;i++){
    tofi[i]= new Ball(tofiImage,random(100,windowWidth-50),random(-1000,0),-10,2);
  }
  for(let i=0;i<10;i++){
    vertiz[i]= new Ball(vertizImage,random(100,windowWidth-50),random(-1000,0),-10,2);
  }
  for(let i=0;i<10;i++){
    david[i]= new Ball(davidImage,random(100,windowWidth-50),random(-1000,0),-10,2);
  }
  for(let i=0;i<10;i++){
    gfe[i]= new Ball(GfeImage,random(100,windowWidth-50),random(-1000,0),-10,2);
  }
  for(let i=0;i<10;i++){
    valladares[i]= new Ball(ValladaresImage,random(100,windowWidth-50),random(-1000,0),-10,2);
  }
  for(let i=0;i<10;i++){
    valladares2[i]= new Ball(ValladaresSleepingImage,random(100,windowWidth-50),random(-1000,0),-10,2);
  }  
  for(let i=0;i<10;i++){
    yeckle[i]= new Ball(yeckleImage,random(100,windowWidth-50),random(-1000,0),-10,2);
  } 
}
let nivel1 = true;
let nivel2 = false;
let nivel3 = false;
let nivel4 = false;
let nivel5 = false;
let nivel6 = false;
let nivel7 = false;
let nivel8 = false;
let nivel9 = false;
let nivel10 = false;
let gameover=false;
let win = false;
let level = '1';
function draw() {
  background(0, 100, 200);
  fill(0);
  rect(0,windowHeight-50,windowWidth,50);

  
  player.display();
  
  textSize(32);
    text('Mi puntuacion:', 10, 30);
    text('Nivel:', 10, 80);
  //PRIMER NIVEL
  if(nivel1){
    
    text(level, 100, 80);
    text(player.GetPuntuacion(),230, 30);
    for(let i=0;i<10;i++){
    panes[i].display();
    panes[i].caida();
    panes[i].choque();
    }
    for(let i=0;i<10;i++){
    viejos[i].display();
    viejos[i].caida();
    viejos[i].choque();
    }
    if(player.GetPuntuacion()>200){
      nivel1=false;
      level='2';
      nivel2=true;
    }else if(player.GetPuntuacion()<-50){
      gameover=true;
      nivel1=false;
    }
  }else if(nivel2){
    
    text(level, 100, 80);
    text(player.GetPuntuacion(),230, 30);
    for(let i=0;i<10;i++){
    panes[i].display();
    panes[i].caida();
    panes[i].choque();
    }
    for(let i=0;i<10;i++){
    giovanna[i].display();
    giovanna[i].caida();
    giovanna[i].choque();
    }
    if(player.GetPuntuacion()>400){
      nivel2=false;
      level='3';
      nivel3=true;
    }else if(player.GetPuntuacion()<200){
      nivel2=false;
      level='1';
      nivel1=true;
    }
  }else if(nivel3){
    text(level, 100, 80);
    text(player.GetPuntuacion(),230, 30);
    for(let i=0;i<10;i++){
    panes[i].display();
    panes[i].caida();
    panes[i].choque();
    }
    for(let i=0;i<10;i++){
    valladares2[i].display();
    valladares2[i].caida();
    valladares2[i].choque();
    }
    if(player.GetPuntuacion()>600){
      nivel3=false;
      level='4';
      nivel4=true;
    }else if(player.GetPuntuacion()<400){
      nivel3=false;
      level='2';
      nivel2=true;
    }
  }else if(nivel4){
    text(level, 100, 80);
    text(player.GetPuntuacion(),230, 30);
    for(let i=0;i<10;i++){
    panes[i].display();
    panes[i].caida();
    panes[i].choque();
    }
    for(let i=0;i<10;i++){
    yeckle[i].display();
    yeckle[i].caida();
    yeckle[i].choque();
    } 
    if(player.GetPuntuacion()>800){
      nivel4=false;
      level='5';
      nivel5=true;
    }else if(player.GetPuntuacion()<600){
      nivel4=false;
      level='3';
      nivel3=true;
    }
  }else if(nivel5){
    text(level, 100, 80);
    text(player.GetPuntuacion(),230, 30);
    for(let i=0;i<10;i++){
    panes[i].display();
    panes[i].caida();
    panes[i].choque();
    }
    for(let i=0;i<10;i++){
    chichico[i].display();
    chichico[i].caida();
    chichico[i].choque();
    }
    if(player.GetPuntuacion()>1000){
      nivel5=false;

      level='6';
      nivel6=true;
    }else if(player.GetPuntuacion()<800){
      nivel5=false;

      level='4';
      nivel4=true;
    }
  }else if(nivel6){
    text(level, 100, 80);
    text(player.GetPuntuacion(),230, 30);
    for(let i=0;i<10;i++){
    panes[i].display();
    panes[i].caida();
    panes[i].choque();
    }
    for(let i=0;i<10;i++){
    tofi[i].display();
    tofi[i].caida();
    tofi[i].choque();
    }
    if(player.GetPuntuacion()>1200){
      nivel6=false;

      level='7';
      nivel7=true;
    }else if(player.GetPuntuacion()<1000){
      nivel6=false;

      level='5';
      nivel5=true;
    }
  }else if(nivel7){
    text(level, 100, 80);
    text(player.GetPuntuacion(),230, 30);
    for(let i=0;i<10;i++){
    panes[i].display();
    panes[i].caida();
    panes[i].choque();
    }
    for(let i=0;i<10;i++){
    vertiz[i].display();
    vertiz[i].caida();
    vertiz[i].choque();
    }
    if(player.GetPuntuacion()>1400){
      nivel7=false;

      level='8';
      nivel8=true;
    }else if(player.GetPuntuacion()<1200){
      nivel7=false;

      level='6';
      nivel6=true;
    }
  }else if(nivel8){
    text(level, 100, 80);
    text(player.GetPuntuacion(),230, 30);
    for(let i=0;i<10;i++){
    panes[i].display();
    panes[i].caida();
    panes[i].choque();
    }
    for(let i=0;i<10;i++){
    david[i].display();
    david[i].caida();
    david[i].choque();
    }
    if(player.GetPuntuacion()>1600){
      nivel8=false;

      level='9';
      nivel9=true;
    }else if(player.GetPuntuacion()<1400){
      nivel8=false;

      level='7';
      nivel7=true;
    }
  }else if(nivel9){
    text(level, 100, 80);
    text(player.GetPuntuacion(),230, 30);
    for(let i=0;i<10;i++){
    panes[i].display();
    panes[i].caida();
    panes[i].choque();
    }
    for(let i=0;i<10;i++){
    valladares[i].display();
    valladares[i].caida();
    valladares[i].choque();
    }
    if(player.GetPuntuacion()>1800){
      nivel9=false;

      level='10';
      nivel10=true;
    }else if(player.GetPuntuacion()<1600){
      nivel9=false;

      level='8';
      nivel8=true;
    }
  }else if(nivel10){
    text(level, 100, 80);
    text(player.GetPuntuacion(),230, 30);
    for(let i=0;i<10;i++){
    panes[i].display();
    panes[i].caida();
    panes[i].choque();
    }
    for(let i=0;i<10;i++){
    gfe[i].display();
    gfe[i].caida();
    gfe[i].choque();
    }
    if(player.GetPuntuacion()>2000){
      nivel10=false;

      level='10';
      
      win=true;
    }else if(player.GetPuntuacion()<1800){
      nivel10=false;

      level='9';
      nivel9=true;
    }
  }
  if(win){
    text('Ganaste!!!!',windowWidth/2, windowHeight/2);
  }
  if(gameover){
    text('Perdiste!!!!',windowWidth/2, windowHeight/2);
  }

  player.Move();
 
  print(player.GetPuntuacion());
  print('PLAYER X:'+player.GetXposition()+'y:'+player.GetYposition());
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Player
{
	constructor( x_position, y_position){
    this.x_position = x_position;
    this.y_position = windowHeight-100;
    this.VELOCIDAD=10;
    this.puntuacion=0;
    this.direccion=1;
    this.puntuacion=0;
    } 
    display(){
      fill(255);
 		  rectMode(CENTER);
  		//rect(this.x_position,this.y_position,200,50);
      point(this.x_position,this.y_position);
      image(carritoImage,this.x_position,this.y_position,200,50);
  		fill(0);
      
  		
  		
    }
    MoveLeft(){
    	this.x_position-=this.VELOCIDAD*this.direccion;
    	if(this.x_position<50){
    	this.x_position+=this.VELOCIDAD*this.direccion;
    	}
    }
    MoveRight(){
    	this.x_position+=this.VELOCIDAD*this.direccion;
    	if(this.x_position>=windowWidth-50)
    	{
    		this.x_position-=this.VELOCIDAD*this.direccion;
    	}
    }
    Move(){
      if(tecla==='a'){
        this.x_position-=this.VELOCIDAD;
        if(this.x_position<100){
        this.x_position+=this.VELOCIDAD*this.direccion;
        }
      }
      if(tecla==='d'){
        this.x_position+=this.VELOCIDAD;
        if(this.x_position>=windowWidth-100)
        {
          this.x_position-=this.VELOCIDAD*this.direccion;
        }

      }
    }
    ChangeDireccion(){
    	this.direccion*=-1;
    }
   
    GetXposition()
    {
      return this.x_position;
    }
    GetYposition()
    {
      return this.y_position;
    }
    UpPuntuacion(puntuacion){
    	this.puntuacion+=puntuacion;
    }
    GetPuntuacion()
    {
    	return this.puntuacion;
    }
}


class Ball
{
	constructor(tipo,x_position,y_position,puntuacion,velocidad){

		this.x_position=x_position;
		this.y_position=y_position;
		this.diametro= 50;
		this.velocidad=velocidad;
		this.direccion=1;
		this.puntuacion=puntuacion;
    this.tipo=tipo;
	}
	
	display(){
		rectMode(CENTER);
		fill(255);
		image(this.tipo,this.x_position,this.y_position,this.diametro,this.diametro);
    rectMode(CORNER);

	}
	caida(){
		this.y_position+=this.velocidad*this.direccion;
		if(this.y_position>windowHeight){
			this.y_position=random(-1000,0);
			this.x_position=random(100,windowWidth-50);
		}
	}
	choque(){
		if(this.y_position>(windowHeight-150)){
			if(player.GetXposition()+200>this.x_position&& player.GetXposition()-50<this.x_position){
        
        if(this.puntuacion<0){
          textSize(100);
          fill(255,0, 0);
          text('-'+this.puntuacion,windowWidth/2, windowHeight/2);
        }else{
          textSize(32);
          fill(0);
          text('+'+this.puntuacion,280, 50);
        }
        
				player.UpPuntuacion(this.puntuacion);
				this.y_position=random(-1000,0);
				this.x_position=random(100,windowWidth-50);
			}
		}
	}
  getXPosition(){
    return this.x_position;
  }
  getYPosition(){
    return this.y_position;
  }
	




}


function keyPressed() {
	tecla=key;
  if(keyCode === LEFT_ARROW){
  tecla='a';
  }
  if(keyCode ===RIGHT_ARROW){
    tecla='d';
  }
 	return false;
}
function keyReleased(){
  tecla='f';
  return false;
}
