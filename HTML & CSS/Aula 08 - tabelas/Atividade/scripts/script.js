document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function(event) {
        event.preventDefault(); // Impede que o formulário seja enviado e a página recarregada.
        calcularSalarioFamilia();
    };
});

function calcularSalarioFamilia() {
    var salario = parseFloat(document.getElementById('Salario').value);
    var filhos = parseInt(document.getElementById('Filhos').value);
    var resultado = document.getElementById('resultado');
    var valorPorFilho;
    var totalSalarioFamilia;

    if (salario <= 806.80) {
        valorPorFilho = 29.16; // Valor para salários até R$ 806,80.
    } else if (salario > 806.80 && salario <= 1212.64) {
        valorPorFilho = 41.37; // Valor para salários entre R$ 806,81 e R$ 1.212,64.
    } else {
        resultado.innerHTML = 'Não há Salário Família para essa faixa de salário.';
        return;
    }

    totalSalarioFamilia = valorPorFilho * filhos;
    resultado.innerHTML = 'O Salário Família total é: R$ ' + totalSalarioFamilia.toFixed(2);
}
