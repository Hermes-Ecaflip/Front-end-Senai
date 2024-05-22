function verificarIdade() {
    var idade = document.getElementById('idade').value;
    var resultado = document.getElementById('resultado');
    if (idade >= 0 && idade < 15) {
        resultado.textContent = 'Criança';
    } else if (idade >= 15 && idade < 30) {
        resultado.textContent = 'Jovem';
    } else if (idade >= 30 && idade < 60) {
        resultado.textContent = 'Adulto';
    } else if (idade >= 60) {
        resultado.textContent = 'Idoso';
    } else {
        resultado.textContent = 'Idade inválida';
    }
}


function converterRealParaDolar() {
    var valorReal = document.getElementById('valorReal').value;
    var resultadoConversao = document.getElementById('resultadoConversao');
    // Supondo que 1 dólar seja igual a 5 reais, por exemplo.
    var taxaConversao = 5; 
    var valorDolar = valorReal / taxaConversao;
    resultadoConversao.textContent = 'Valor em Dólar: $' + valorDolar.toFixed(2);
}
