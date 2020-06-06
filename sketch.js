let panes = [];
let panImage;

function preload() {
	panImage = loadImage('pancito.png');
	
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player(windowWidth/2,0);
  for(let i=0;i<5;i++){
  	panes[i]= new Ball(random(100,windowWidth-50),0,10,5)
  }
  
  
}
var punt;
function draw() {
  background(0, 100, 200);
  fill(0);
  rect(0,windowHeight-50,windowWidth,50);


  player.display();
  for(let i=0;i<5;i++){
  	panes[i].display();
 	panes[i].caida();
  	panes[i].choque();
  }
  
 
  print(player.GetPuntuacion());
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
  		//sText("El MAÑANERO",this.x_position,this.y_position);
  		rectMode(CORNER);
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
		this.diametro= 40;
		this.velocidad=velocidad;
		this.direccion=1;
		this.puntuacion=puntuacion;
	}
	
	display(){
		
		fill(255);
		image(panImage,this.x_position,this.y_position,this.diametro,this.diametro);

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
			if(player.GetXposition()>this.x_position-100&& player.GetXposition()<this.x_position+100){
				player.UpPuntuacion(this.puntuacion);
				this.y_position=random(-1000,0);
				this.x_position=random(100,windowWidth-50);
			}
		}
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
