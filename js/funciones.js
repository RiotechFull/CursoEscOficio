console.log ("Prueba desde mi web");
console.log (Date());
console.log (45+8);



// window.alert("Bienvenido a mi sitio web. Haga clic en Aceptar para ingresar") 

function cambiarNombre() {
  document.getElementById("hola").innerHTML = "Bienvenid@ a mi sitio";
}

function cambiarColor(){
  document.getElementById("titulo").style.backgroundColor = "#0dcaf0";
}


function ocultarFecha(){
  document.getElementById("boton").style.display = "none";
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