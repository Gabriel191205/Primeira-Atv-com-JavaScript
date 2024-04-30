function Informar(){
    let  numero1 = parseInt(document.getElementById("numero1").value);
   
    let resultado = document.getElementById("resultado");

    if(numero1){
        resultado.innerHTML = "O número informado foi: "+numero1;
    }
}