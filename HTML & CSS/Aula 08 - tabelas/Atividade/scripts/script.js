// Aguarda o carregamento completo do DOM.
document.addEventListener('DOMContentLoaded', function() {
    // Impede que o formulário seja enviado e a página recarregada.
    document.querySelector('form').onsubmit = function(event) {
        event.preventDefault();
        calcularSalarioFamilia();
        // Exibe o modal com o resultado do cálculo.
        var myModal = new bootstrap.Modal(document.getElementById('modalSalarioFamilia'));
        myModal.show();
    };
});

// Função para calcular o salário família.
function calcularSalarioFamilia() {
    // Obtém os valores dos inputs e inicializa as variáveis.
    var salario = parseFloat(document.getElementById('Salario').value);
    var filhos = parseInt(document.getElementById('Filhos').value);
    var resultado = document.getElementById('resultado');
    var valorPorFilho;
    var totalSalarioFamilia;

    // Define o valor por filho com base no salário.
    if (salario <= 806.80) {
        valorPorFilho = 29.16; // Salários até R$ 806,80.
    } else if (salario > 806.80 && salario <= 1212.64) {
        valorPorFilho = 41.37; // Salários entre R$ 806,81 e R$ 1.212,64.
    } else {
        // Informa que não há salário família para essa faixa de salário.
        resultado.innerHTML = 'Não há Salário Família para essa faixa de salário.';
        return;
    }

    // Calcula o total do salário família e exibe o resultado.
    totalSalarioFamilia = valorPorFilho * filhos;
    resultado.innerHTML = totalSalarioFamilia.toFixed(2);
}
