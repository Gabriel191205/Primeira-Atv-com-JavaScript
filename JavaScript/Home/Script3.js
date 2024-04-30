function Somar(){
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;

    var resultado = Number(numero1) + Number(numero2);
        document.getElementById ("resultado").innerHTML = "O valor é de: "+resultado;
}