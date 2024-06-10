$(document).ready(function() {
  // Recupera as informações do filme do localStorage
  var filmeInfo = JSON.parse(localStorage.getItem('filmeInfo'));

  if (filmeInfo) {
    // Exibe a imagem e o título do filme no carrinho
    $('#carrinho .card-body').prepend(
      '<img src=https://image.tmdb.org/t/p/w342/rC5RqXtFoTkBhNWE1dczwi4dZrX.jpg" class="card-img-top" alt="' + filmeInfo.titulo + '">' +
      '<h5 class="card-title">' + filmeInfo.titulo + '</h5>'
    );

    // Exibe as poltronas selecionadas no carrinho
    filmeInfo.poltronas.forEach(function(poltrona) {
      $('#carrinho .card-body').append('<p>Poltrona: ' + poltrona + '</p>');
    });
  } else {
    // Se não houver informações, exibe uma mensagem ou redireciona
    $('#carrinho .card-body').append('<p>Nenhum filme ou poltrona selecionada.</p>');
  }
});
