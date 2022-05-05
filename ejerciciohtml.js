let respuesta = document.getElementById("respuesta");
let boton = document.getElementById("boton");
/*
function validar (e){
    if (e.key == "buenos aires"){
        let correcto = document.getElementById("correcto");
        correcto.className = "verdad";
        alert("Respuesta correcta maquina");  
    }else{

        let incorrecto = document.getElementById("incorrecto");
        incorrecto.className = "falso";
        alert("Respuesta incorrecta papu");
    }
}*/
function EventoBoton (respuesta){
    console.log(respuesta);
    if (respuesta == "buenos aires"){
        let correcto = document.getElementById("correcto");
        correcto.className = "verdad";
        alert("Respuesta correcta maquina");
    }else{
        let incorrecto = document.getElementById("incorrecto");
        incorrecto.className = "falso";
        alert("Respuesta incorrecta papu");
    }
}
console.log("esta es la respuesta" + respuesta);
boton.addEventListener("click", () => EventoBoton(respuesta.value));


/*function enviar(){
    
    console.log(respuesta);
    if (respuesta == "buenos aires"){
        let correcto = document.getElementById("correcto");
        correcto.className = "verdad";
        alert("Respuesta correcta maquina");
    }else{
        let incorrecto = document.getElementById("incorrecto");
        incorrecto.className = "falso";
        alert("Respuesta incorrecta papu");
    }
}
*/


/*const button = () => {
    console.log("Hola");
}
let respuesta = document.getElementById("respuesta").value;
let boton = document.getElementById("boton");
boton.addEventListener("click", button);
*/