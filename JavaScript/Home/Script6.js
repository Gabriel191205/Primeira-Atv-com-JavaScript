function raio(){
    var r = document.getElementById("area").value;
    var a = Math.PI * Math.pow(r, 2);
    document.getElementById("resultado").innerHTML = "A área do círculo com raio " + r + " é " + a.toFixed(2) + ".";
}