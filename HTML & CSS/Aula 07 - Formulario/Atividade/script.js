document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function(event) {
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var objetivo = document.getElementById('objetivo').value;
        var arquivo = document.getElementById('arquivo').value;

        if (nome === '' || email === '' || objetivo === '' || arquivo === '') {
            event.preventDefault(); // Evita o envio do formulário se houver campos vazios
            document.getElementById('feedback').innerHTML = 'Por favor, preencha todos os campos.';
        } else {
            document.getElementById('feedback').innerHTML = ''; // Limpa o feedback de erro
        }
    });
});
