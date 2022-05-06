let respuesta = (document.getElementById("respuesta"));
let boton = document.getElementById("boton");

function EventoBoton (respuesta){
    let correcto = document.getElementById("correcto");
    let incorrecto = document.getElementById("incorrecto");
    let respuesta1 = respuesta.toLowerCase();
    correcto.className = "default";
    incorrecto.className = "default";
    if (respuesta1 == "buenos aires"){
        correcto.className = "verdad";
    }else{
        incorrecto.className = "falso";
    }

}

boton.addEventListener("click", () => EventoBoton(respuesta.value));