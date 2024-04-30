function Calcular() {
    var valorHora = document.getElementById("numero1").value;
    var horasTrabalhadas = document.getElementById("numero2").value;
    var salario = valorHora * horasTrabalhadas;
    document.getElementById("resultado").innerHTML = "O salário ganho neste mês é: " + salario.toFixed(2) + ".";
}