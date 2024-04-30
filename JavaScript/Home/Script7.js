function Multiplicar() {
    var lado = document.getElementById("numero1").value;
    var area = Math.pow(lado, 2);
    var dobroArea = area * 2;
    document.getElementById("resultado").innerHTML = "A área do quadrado é: " + lado + " é " + area + ". E o dobro é: " + dobroArea + ".";
}