let panes = [];
let panImage;

function preload() {

	panImage = loadImage('https://raw.githubusercontent.com/AngelVillavicencio/Game-124/master/pancito.png');
	
}
function setup() {
  panImage.loadPixels();
  createCanvas(windowWidth, windowHeight);
  player = new Player(windowWidth/2,0);
  for(let i=0;i<5;i++){
  	panes[i]= new Ball(random(100,windowWidth-50),0,10,2);
  	
  }
  
    
}
var punt;
function draw() {
  background(0, 100, 200);
  fill(0);
  rect(0,windowHeight-50,windowWidth,50);

  
  player.display();
  textSize(32);
  text('Mi puntuacion:', 10, 30);
  text(player.GetPuntuacion(),230, 30)
  for(let i=0;i<5;i++){
  	panes[i].display();
 	  panes[i].caida();
  	panes[i].choque();
  }
  
 
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
    this.y_position = windowHeight-50;
    this.VELOCIDAD=100;
    this.puntuacion=0;
    this.direccion=1;
    this.puntuacion=0;
    }
    display(){
      fill(255);
 		  rectMode(CENTER);
  		rect(this.x_position,this.y_position,200,50);

  		fill(0);
      rectMode(CORNER);
  		text("El MAÑANERO",this.x_position-100,this.y_position);
  		
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
	constructor(x_position,y_position,puntuacion,velocidad){

		this.x_position=x_position;
		this.y_position=y_position;
		this.diametro= 50;
		this.velocidad=velocidad;
		this.direccion=1;
		this.puntuacion=puntuacion;
	}
	
	display(){
		rectMode(CENTER);
		fill(255);
		image(panImage,this.x_position,this.y_position,this.diametro+50,this.diametro);
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
		if(this.y_position>(windowHeight-75)){
			if(player.GetXposition()>this.x_position-150&& player.GetXposition()<this.x_position+150){
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
	
		if (key == 'a') {
     	player.MoveLeft();
    	}
    	if (key == 'd'){
        	player.MoveRight();
    	}
  		if (keyCode === LEFT_ARROW) {
    		player.MoveLeft();
  		} else if (keyCode === RIGHT_ARROW) {
   			player.MoveRight();
 		}
 	return false;
}
