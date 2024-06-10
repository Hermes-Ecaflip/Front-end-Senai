$(document).ready(function() {
  // Recupera as poltronas selecionadas do localStorage
  var poltronasSelecionadas = JSON.parse(localStorage.getItem('poltronasSelecionadas')) || [];
  // Exibe as poltronas no carrinho
  poltronasSelecionadas.forEach(function(poltrona) {
    $('#carrinho .card-body').append('<p>Poltrona: ' + poltrona + '</p>');
  });

  // Suponha que você também tenha salvo as informações do filme no localStorage
  var filmeInfo = JSON.parse(localStorage.getItem('filmeInfo')) || {};
  if (filmeInfo.titulo && filmeInfo.imagem) {
    $('#carrinho .card-body').prepend(
      '<img src="' + filmeInfo.imagem + '" class="card-img-top" alt="' + filmeInfo.titulo + '">' +
      '<h5 class="card-title">' + filmeInfo.titulo + '</h5>'
    );
  }
});
