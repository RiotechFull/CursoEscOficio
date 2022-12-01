// validacion Bootstrap Formulario  JavaScript for disabling form submissions if there are invalid fields
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


 
function envioDatos() {

    if (formConsulta.nombre.value == 0) {
        alert ('El campo Nombre esta vacio, minimo 3 caracteres');
        formConsulta.nombre = '';
        formConsulta.nombre.focus();
        return false;

    } 
    else if (formConsulta.apellido.value == 0){
        alert ('El campo Apellido esta vacio, minimo 3 caracteres');
        formConsulta.apellido = '';
        formConsulta.apellido.focus();
        return false;
    } 
    else if (formConsulta.email.value == 0){
        alert ('El campo email esta vacio, verificar mail valido');
        formConsulta.email = '';
        formConsulta.email.focus();
        return false;
    }
    else if (formConsulta.consulta.value == 0){
        alert ('El campo consulta esta vacio, minimo 10 caracteres');
        formConsulta.consulta = '';
        formConsulta.consulta.focus();
        return false;
    }
    else {
        alert ('Excelente, tu mensaje fue enviado. regresa pronto');
    }

}
