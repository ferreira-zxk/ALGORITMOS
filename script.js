function calcularVolume() {
    let comprimento = parseFloat(document.getElementById("comprimento").value);
    let largura = parseFloat(document.getElementById("largura").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(comprimento) || isNaN(largura) || isNaN(altura)) {
        document.getElementById("resultadoVolume").innerText = "Preencha todos os campos!";
        return;
    }

    let volume = comprimento * largura * altura;

    document.getElementById("resultadoVolume").innerText = "O volume é: " + volume;
}



function calcularRacao() {
    let pesoKg = parseFloat(document.getElementById("pesoRacao").value);
    let racaoPorGato = parseFloat(document.getElementById("racaoGato").value);

    let resultado = document.getElementById("resultadoRacao");

    if (isNaN(pesoKg) || isNaN(racaoPorGato)) {
        resultado.innerText = "preencha todos os campos";
        return;
    }

   
         
    let pesoGramas = pesoKg * 1000;

        
    let consumoDiario = racaoPorGato * 2;

   
    let consumo5Dias = consumoDiario * 5;

    
    let restante = pesoGramas - consumo5Dias;

    resultado.innerText = "Restará " + restante + "gramas de ração após 5 dias.";
}