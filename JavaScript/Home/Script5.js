function Converter() {
    var metros = document.getElementById("metro").value;
    var centimetros = metros * 100;
    document.getElementById("resultado").innerHTML = "A quantidade de centímetros é: "+centimetros + " centímetros.";
}