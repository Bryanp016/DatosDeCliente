
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const cedula = document.getElementById("cedula");
const telefono = document.getElementById("telefono");
const correo = document.getElementById("correo");
const direccion = document.getElementById("direccion");
const ciudad = document.getElementById("direccion");

function Crearformulario(){
    
    if(nombre.value.length < 4){
        alert("Ingresar nombre completo");
    }else{
        alert("Su informacion ha sido recibida");
    }

    if(apellido.value.length < 4){
        alert("Ingresar apellido completo");
    }else{
        alert("Su informacion ha sido recibida");
    }
    
    if(cedula.value.length < 10){
        alert("Ingresar numero de cedula, minimo 10 digitos");
    }else{
        alert("Su informacion ha sido recibida");
    }

    if(telefono.value.length < 10){
        alert("Ingresar numero de telefono, minimo 10 digitos");
    }else{
        alert("Su informacion ha sido recibida");
    }

    if(direccion.value.length < 10){
        alert("Ingresar direccion de vivienda");
    }else{
        alert("Su informacion ha sido recibida");
    }

    if(ciudad.value.length < 10){
        alert("Ingresar ciudad de residencia");
    }else{
        alert("Su informacion ha sido recibida");
    }

    return (false);
};