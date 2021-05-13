let etiquetaNombre=document.getElementById("nombreUsuario");
let etiquetaHoras=document.getElementById("horasTrabajadas");
let etiquetaExtras=document.getElementById("horasExtras");
let botonCalcular=document.getElementById("botonCalcular");
let resultado=document.getElementById("resultado");

botonCalcular.addEventListener("click",Formulario);

function Formulario(){
    let nombre=etiquetaNombre.value;
    let cantidadHoras=Number(etiquetaHoras.value);
    let horasExtras=Number(etiquetaExtras.value);

    if(nombre=="" && cantidadHoras==0 && horasExtras==-1){
        console.log("Todos los campos están vacíos");
        etiquetaNombre.classList.add("is-invalid");
        etiquetaHoras.classList.add("is-invalid");
        etiquetaExtras.classList.add("is-invalid");
    }else if (nombre=="" && cantidadHoras==0){
        console.log("los campos nombre y horas trabajadas se encuentran vacíos");
        etiquetaNombre.classList.add("is-invalid");
        etiquetaHoras.classList.add("is-invalid");
        etiquetaExtras.classList.remove("is-invalid");
    }else if (nombre=="" && horasExtras==-1){
        console.log("Los campos nombre, y horas Extras se encuentran vacíos");
        etiquetaNombre.classList.add("is-invalid");
        etiquetaHoras.classList.remove("is-invalid");
        etiquetaExtras.classList.add("is-invalid");
    }else if (cantidadHoras==0 && horasExtras==-1){
        console.log("Los campos horas trabajadas y horas estrax se encuentra vacíos ")
        etiquetaNombre.classList.remove("is-invalid");
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
    }else if(horasExtras==-1){
        console.log("El campo de horas extras se encuentra vacío");
        etiquetaNombre.classList.remove("is-invalid");
        etiquetaHoras.classList.remove("is-invalid");
        etiquetaExtras.classList.add("is-invalid");
    }else{
        console.log("Toda la información fué ingresada con EXITO");
        etiquetaNombre.classList.remove("is-invalid");
        etiquetaHoras.classList.remove("is-invalid");
        etiquetaExtras.classList.remove("is-invalid");
        calcularSalario(cantidadHoras,horasExtras)
    }
}

function calcularSalario(cantidadHoras,horasExtras){
    if (cantidadHoras>=1 && cantidadHoras<=40){
        let vHora=cantidadHoras*20000;
        resultado.textContent="El total se su sueldo es de:"+vHora;
    }else {
        let vExtras=horasExtras*25000;
        let sueldo=vHora+vExtras;
        resultado.textContent="El total de su sueldo es de:"+sueldo;
    }

    
}
