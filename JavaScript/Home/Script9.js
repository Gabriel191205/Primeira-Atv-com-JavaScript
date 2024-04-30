function Transformar() {
    var tempFh = document.getElementById("numero1").value;
    var tempCel = 5 * ((tempFh - 32) / 9);
    document.getElementById("resultado").innerHTML = "Temperatura em Celsius: " + tempCel;
}