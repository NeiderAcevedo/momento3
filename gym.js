let etiquetaPeso=document.getElementById("peso");
let etiquetaEstatura=document.getElementById("estatura");
let calcular=document.getElementById("calcular");
let resultadoImc=document.getElementById("resultadoImc")


calcular.addEventListener("click",Formulario);

function Formulario(){
    let peso=Number(etiquetaPeso.value);
    let estatura=Number(etiquetaEstatura.value);

    if (peso==0 && estatura==0){
        console.log("Ambos campos se encuentran vacíos");
        etiquetaPeso.classList.add("is-invalid");
        etiquetaEstatura.classList.add("is-invalid");
    }else if (peso==0){
        console.log("El campo peso se encuentra vacío");
        etiquetaPeso.classList.add("is-invalid");
        etiquetaEstatura.classList.remove("is-invalid");
    }else if (estatura==0){
        console.log("El campo estatura se encuentra vacío ");
        etiquetaPeso.classList.remove("is-invalid");
        etiquetaEstatura.classList.add("is-invalid");
    }else{
        console.log("La información se registró corretamente ");
        etiquetaPeso.classList.remove("is-invalid");
        etiquetaEstatura.classList.remove("is-invalid");
        procedimiento(peso,estatura);
    }
}

function procedimiento(peso,estatura){
    let imc=peso/(estatura**2);
    if (imc<18.5){
        resultadoImc.textContent="Peso Insuficiente- "+ "IMC "+imc.toFixed(1);
    }else if(imc>=18.5 && imc<=24.9){
        resultadoImc.textContent="Peso Normal - "+ "IMC "+ imc.toFixed(1);
    }else if(imc>=25 && imc<=26.9){
        resultadoImc.textContent="Sobrepeso grado I- "+ "IMC "+imc.toFixed(1);
    }else if(imc>=27 && imc<=29.9){
        resultadoImc.textContent="sobrepeso grado II (preobesidad)- "+ "IMC "+imc.toFixed(1);
    }else if(imc>=30 && imc<=34.9){
        resultadoImc.textContent="Obesidad de tipo I- "+ "IMC "+imc.toFixed(1);
    }else if(imc>=35 && imc<=39.9){
        resultadoImc.textContent="Obesidad de tipo II- "+ "IMC "+imc.toFixed(1);
    }else if(imc>=40 && imc<=49.9){
        resultadoImc.textContent="Obesidad de tipo III (mórbida)- "+ "IMC "+imc.toFixed(1);
    }else if(imc>50){
        resultadoImc.textContent="Obesidad de tipo IV (extrema)- "+ "IMC "+imc.toFixed(1);
    }else{
        console.log("ERROR!! Revisar datos de entrada")
    }
}