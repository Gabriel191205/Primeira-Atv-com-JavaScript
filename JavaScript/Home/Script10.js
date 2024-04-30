function Transformar() {
    var tempCel = document.getElementById("numero1").value;
    var tempFh = (tempCel * 9/5) + 32;
    document.getElementById("resultado").innerHTML = "Temperatura em Fahrenheit: " + tempFh;
}
