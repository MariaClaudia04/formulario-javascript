function enviar(){
    console.log("Datos de formulario");
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    
    var email = document.getElementById("email").value;
    
    var asunto = document.getElementById("asunto").value;
    
    var descripcion = document.getElementById("descripcion").value;
   

    var sePuedeEnviar=true;

   if (nombre==="") {
    document.getElementById("errorNombre").innerHTML="nombre no puede estar vacio"
    sePuedeEnviar=false;
   } else {
       document.getElementById("errorNombre").innerHTML = " "
   }
    if (email ==="") {
        document.getElementById("errorEmail").innerHTML = "Email no puede estar vacio"
        sePuedeEnviar=false;
    } else {
        document.getElementById("errorEmail").innerHTML = " "
    }
    if (asunto === "") {
        document.getElementById("errorAsunto").innerHTML = "Asunto no puede estar vacio"
        sePuedeEnviar=false;
    } else {
        document.getElementById("errorAsunto").innerHTML = " "
    }
    if (descripcion === "") {
        document.getElementById("errorDescripcion").innerHTML = "Descripcion no puede estar vacio"
        sePuedeEnviar = false;
    } else {
        document.getElementById("errorDescripcion").innerHTML =" "
    }
    if (sePuedeEnviar === true) {
        console.log("Nombre: ",nombre)
        console.log("Email: ", email)
        console.log("Asunto: ", asunto)
        console.log("Descripcion: ", descripcion)
    } 
}
function Eliminar() {
    document.getElementById("Formulario").reset();
}