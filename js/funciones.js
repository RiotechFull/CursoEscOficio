console.log ("Prueba desde mi web");
console.log (Date());  // Date () es un tipo de dato Clase de javaScript
num5 = 456;
const NUM1 = 45;
let num2 = 8;


console.log (NUM1+num2+num5);
num5 = '456';
console.log (NUM1+num2+num5);
esMayorEdad= false;

var nombre = String , nombre = "Pedro"; // declaracion de tipo variable
//nombre = "Pedro"; // asignacion de valor a una variable
var apellido ="Sanchez";
var miedad = Number; //otros lenguajes es Int, (integer)
miedad = 25;



//console.log ("Los datos ingresados son: " );
console.info ("Los datos ingresados son: " );
console.warn ("Los datos ingresados son: " );
console.table ([nombre, apellido, miedad]) //array
console.table ({Nom: nombre, Ape: apellido, Edad: miedad, Año: 2022}) //Object - objeto


diaSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'] //array de dias
meses = ["enero", "febrero",'marzo']
console.log (diaSemana);
console.warn ('hoy es: ', diaSemana[3])
console.log
total = diaSemana.length; // ver el largo del array -1
for (x=0 ; x<total; x++) {
   console.warn ('hoy es: ', diaSemana[x])
}

/*
$galletas = 0;
while (galletas < 10){
console.log ("galletas");
galletas++;
}

for (galletas = 0; galletas < 10; galletas++){
  console.log ("galletas");
}
*/

let nombrecompleto = {nom:"Juan", apel:"Perez"};    // Object

var dni = Number;

console.log( "Bienvenido a mi sitio...", nombre, apellido)

function holaMundo(nombre, apellido) {
 // var nombre = "Florencia";
  window.alert("Bienvenido a mi sitio web " + nombre + " " + apellido + " Haga clic en Aceptar para ingresar") 

}


function cambiarNombre() {
  document.getElementById("hola").innerHTML = "Bienvenid@ a mi sitio";
  document.getElementById("hola").style.border = "solid 1px red";
  document.getElementById("hola").style.backgroundColor = 'grey';
 // document.getElementsByTagName("h1").style.color =

}


function cambiarColor(color){
  let color1 = color;
  document.getElementById("titulo").style.backgroundColor = "#0dcaf0";
  document.getElementById("tit1").style.color = color1;
  document.getElementById("tit1").style.backgroundColor = 'beige'

}

function holaOtrasVez () {

}

function envioOK() {

  //window.alert ('Felicitaciones te has registrado en nuestro sitio');

  if (formCont.nombre.value == 0){
    alert('el campo nombre esta vacio');
		formCont.nombre.value = "";
		formCont.nombre.focus();
		return false;
  } else if (form.apellido.value == 0) {
     alert ('');
  }
  else {
    window.alert ('Felicitaciones te has registrado en nuestro sitio');
  }

}

function ocultarFecha(){
  document.getElementById("boton").style.display = "none";
}

function mostrarHoraActual (){
  var fecha = new Date();
        
  var hora = fecha.getHours();
  var minutos = fecha.getMinutes();
  var segundos = fecha.getSeconds();
  
  if (hora<10){hora = "0" + hora};
  if (minutos<10){minutos = "0" + minutos};
  if (segundos<10){segundos = "0" + segundos};

  document.write("Son las " + hora + ":" + minutos + ":" + segundos )

}

function mostrarDatosForm(nomN, apeN) {
  var nomN = document.getElementById("nom").value;
  var apeN = document.getElementById("ape").value;
  var hora = document.getElementById("hora").value;
   window.alert("Bienvenido a mi sitio web " + nomN + " " + apeN + " Hora de Ingreso " + hora + " Haga clic en Aceptar para ingresar") 
 
   
   console.log (hora);
   
   if (hora>8 && hora <12) {
     saludo = "Buenos dias";
   }
   else if (hora == 12) {
       saludo = "buen mediodia";
       
   }
   else if (hora>12 && hora <=19){
       saludo = "buenas tardes";
       
     }
   else if (hora>19 && hora <=7) {
       saludo = "buenas noches";
     }
 
 cantMostrar = 15;
 for (x=1; x<=cantMostrar; x=x+1) {
    console.warn (saludo);
 }
 
 
   console.log (saludo);
   document.getElementById("dia").innerHTML = saludo;
  
 

 }

function pedirEdad(){  
  var edad = prompt("Introduce tu edad");
//COMPRUEBA QUE LO INTRODUCIDO ES UN NÚMERO
if (Number(edad) == edad) {
	//SI ES MAYOR DE 18
	if (edad > 18) {
		//IMPRIME EN PANTALLA EL MENSAJE
		document.write("Puedes conducir");
	}
}
//SINO
else {
	//MUESTRA UN MENSAJE
	alert("Introduce un numero válido");
}
}


function mostrarSaludo(saludo){
  var hora = document.getElementById("Saludo").value;
  
  if (hora>8 && hora <12) {
    saludo = "Buenos dias";
    
  }
  else if (hora == 12) {
      saludo = "buen mediodia";
      
  }
  else if (hora>12 && hora <=19){
      saludo = "buenas tardes";
      
    }
  else if (hora>19 && hora <=7) {
      saludo = "buenas noches";
    }

cantMostrar = 15;
for (x=1; x<=cantMostrar; x=x+1) {
   console.warn (saludo);
}


  console.log (saludo);
  return saludo;

  }

/* funcion para validar formulario */

(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')
 

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

















// ver esta funcion
function edadUsuario (anioNac) {
  const fecha = new Date();
  //let anioNac = 1982;
  let anioActual =  fecha.getFullYear();
  edadActual = anioActual - anioNac;
  document.getElementById("anio").innerHTML.edadActual;
}



function cambiarTitulo() {
  const titulo = document.getElementById ("titulo_prin")

  titulo.innerHTML = "Segundo Titulo";
  titulo.style.color = "#FF6633";
  titulo.style.background = "beige";

}

function cambiarFoto (){
  const imagen= document.getElementById ("foto");
  imagen.src ="img/pavo.png";

}


function otraFoto(){
  const imagen2 = document.getElementById ('boda');
  imagen2.src = "img/gallery/paris.jpg";
}

function cambiarParrafos () {
  const parrafo = document.getElementsByClassName ("formatop");

  parrafo [0].style.color = "grey";

  const etiqueta= document.getElementsByTagName('p');
}
