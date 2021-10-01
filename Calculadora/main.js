function Calcular(){
    // Variables 
    var x = parseInt(document.querySelector("#valor_uno").value);
    var y = parseInt(document.querySelector("#valor_dos").value);
    var operador = document.querySelector("#operador").value;
    var resultado;

    // Condicional del operador.
    if(operador == "Sumar"){
        resultado = x + y;
    } else if (operador == "Restar"){
        resultado = x - y;
    } else if (operador == "Multiplicar"){
        resultado = x * y;
    } else if (operador == "Dividir"){
        resultado = x / y;
    }

    document.querySelector("#resultado").innerHTML = resultado;

    localStorage.setItem("Resultado", resultado);
}

function Historial(){
    if(localStorage.getItem("Resultado")){
        alert("El resultado es: " + localStorage.getItem("Resultado"));
    } else {
        alert("No han habido cambios en el local Storage");
    }
}

function Limpiar(){
    localStorage.clear();
}