let etiquetaNombre=document.getElementById("nombreUsuario");
let etiquetaHoras=document.getElementById("horasTrabajadas");
let botonCalcular=document.getElementById("botonCalcular");
let resultado=document.getElementById("resultado");

botonCalcular.addEventListener("click",Formulario);

function Formulario(){
    let nombre=etiquetaNombre.value;
    let cantidadHoras=Number(etiquetaHoras.value);
    
    if(nombre=="" && cantidadHoras==0){
        console.log("Ambos campos se encuentran vacíos");
        etiquetaNombre.classList.add("is-invalid");
        etiquetaHoras.classList.add("is-invalid");
    }else if (nombre==""){
        console.log("El campo Nombre se encuentra vacío");
        etiquetaNombre.classList.add("is-invalid");
        etiquetaHoras.classList.remove("is-invalid");
    }else if(cantidadHoras==0){
        console.log("El campo horas trabajadas se encuentra vacío");
        etiquetaNombre.classList.remove("is-invalid");
        etiquetaHoras.classList.add("is-invalid");
    }else{
        console.log("Todos los datos se registráron corretamente");
        etiquetaNombre.classList.remove("is-invalid");
        etiquetaHoras.classList.remove("is-invalid");
        calcularSalario(cantidadHoras);
    }

}   

function calcularSalario(cantidadHoras){

    if (cantidadHoras<=40){
        let salario=cantidadHoras*20000;
        resultado.textContent="Su salario es de:$ "+salario;
    }else{
        let horasExtras=cantidadHoras-40;
        let salario=(40*20000)+(horasExtras*25000);
        resultado.textContent="Su salario es de:$ "+salario;
    }

}
   
