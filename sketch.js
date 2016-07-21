//comentarios

//se declara la variable
var diametro;
//luego se le asigna el valor
diametro = 50;

//DECLARACIÓN DE LA FUNCIÓN
function nombreFuncion(){
   //instrucciones de la función
}

//EJECUCIÓN DE LA FUNCIÓN
nombreFuncion();
   
//VARIABLE LOCAL = Se declara dentro de la función
//VARIABLE GLOBAL = Se declara fuera de la función, al inicio
//FUNCIONES necesitan declaración previa

//setup se ejecuta una vez, al principio
function setup() {
  //dimensión horizontal, dimensión vertical
  createCanvas(400, 300);
  //color de fondo RGB (verde)
  background(0, 255, 0);
}

//draw() se ejecuta luego de setup() 60 veces por seg.
function draw() {
	
   //declarar variable LOCAL anchoBorde
   var anchoBorde;
   //asignamos el valor a la  variable
   anchoBorde = 1;
   
   
	
  //se re-escribe los seteos del background para no dejar una "estela" del mouse
  background(0, 255, 0);
  
  estilo1();
  estilo2();
  
  //(posX, posY, Width, Height)
  //dibuja un elipse
  //medidas en px
  //noFill();
  //ellipse(100, 50, 30, 40);
  
  //elipse que sigue al mouse de diámetro 30
  ellipse(mouseX, mouseY, diametro, diametro);
  
  //nueva signación a la variable local
  diametro = diametro + 1;
}

//declaración de función de estilo de elipse
function estilo1(){
  //tamaño borde
  strokeWeight(5);
  
  //color borde
  stroke(210, 0, 100);
  
  //relleno elipse
  fill(255, 222, 0);	
}

function estilo2(){
  //tamaño borde
  strokeWeight(1);
  
  //color borde
  stroke(200, 0, 10);
  
  //relleno elipse
  fill(255, 222, 0);	
}



