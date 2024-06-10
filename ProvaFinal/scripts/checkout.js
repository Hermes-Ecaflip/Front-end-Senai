$(document).ready(function() {
    // Supondo que as informações do filme e poltronas venham de localStorage ou de uma API
    var filmeInfo = JSON.parse(localStorage.getItem('filmeInfo')); // Exemplo: { titulo: 'Nome do Filme', imagem: 'path_to_movie_image.jpg', poltronas: ['A1', 'A2'], valorTotal: 30.00 }
    $('#filmeTitulo').text(filmeInfo.titulo);
    $('#filmeSelecionadoCard img').attr('src', filmeInfo.imagem);
    $('#poltronasEscolhidas').append(filmeInfo.poltronas.join(', '));
    $('#valorTotal').text('Valor Total: R$' + filmeInfo.valorTotal.toFixed(2));

    // Atualizar os filmes em cartaz
    var filmesEmCartaz = JSON.parse(localStorage.getItem('filmesEmCartaz')); // Exemplo: [{ titulo: 'Filme 1', imagem: 'path_to_movie1.jpg' }, ...]
    filmesEmCartaz.forEach(function(filme) {
        $('#filmesEmCartaz').append(
            '<div class="col-md-4">' +
            '<div class="card">' +
            '<img src="' + filme.imagem + '" class="card-img-top" alt="' + filme.titulo + '">' +
            '<div class="card-body">' +
            '<h5 class="card-title">' + filme.titulo + '</h5>' +
            '</div>' +
            '</div>' +
            '</div>'
        );
    });

    // Finalizar Compra
    $('#finalizarCompraBtn').click(function() {
        // Processo de finalização de compra
        alert('Ingresso enviado para o seu Gmail.');
    });
});