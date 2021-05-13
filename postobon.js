let etiquetaNombre=document.getElementById("nombreUsuario");
let etiquetaHoras=document.getElementById("horasTrabajadas");
let etiquetaExtras=document.getElementById("horasExtras");
let botonCalcular=document.getElementById("botonCalcular");

botonCalcular.addEventListener("click",Formulario);

function Formulario(){
    let nombre=etiquetaNombre.value;
    let cantidadHoras=Number(etiquetaHoras.value);
    let horasExtras=Number(etiquetaExtras.value);

    if(nombre=="" && cantidadHoras==0 && horasExtras==0){
        console.log("Todos los campos están vacíos");
        etiquetaNombre.classList.add("is-invalid");
        etiquetaHoras.classList.add("is-invalid");
        etiquetaExtras.classList.add("is-invalid");
    }else if (nombre==""){
        console.log("El campo Nombre se encuentra vacío");
        etiquetaNombre.classList.add("is-invalid");
        etiquetaHoras.classList.remove("is-invalid");
        etiquetaExtras.classList.remove("is-invalid");
    }else if(cantidadHoras==0){
        console.log("El campo de horas laboradas se encuentra vacío");
        etiquetaNombre.classList.remove("is-invalid");
        etiquetaHoras.classList.add("is-invalid");
        etiquetaExtras.classList.remove("is-invalid");
    }else if(horasExtras==0){
        console.log("El campo de horas extras se encuentra vacío");
        etiquetaNombre.classList.remove("is-invalid");
        etiquetaHoras.classList.remove("is-invalid");
        etiquetaExtras.classList.add("is-invalid");
    }else{
        console.log("Toda la información fué ingresada con EXITO");
        etiquetaNombre.classList.remove("is-invalid");
        etiquetaHoras.classList.remove("is-invalid");
        etiquetaExtras.classList.remove("is-invalid");
    }
}


