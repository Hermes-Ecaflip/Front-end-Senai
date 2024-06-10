$(document).ready(function() {
  // Recupera as poltronas e informações do filme do localStorage
  var poltronasSelecionadas = JSON.parse(localStorage.getItem('poltronasSelecionadas')) || [];
  var filmeInfo = JSON.parse(localStorage.getItem('filmeInfo')) || {}; // Supondo que você tenha salvo as informações do filme com a chave 'filmeInfo'

  // Exibe as informações do filme e as poltronas no carrinho
  if (filmeInfo.titulo && filmeInfo.imagem) {
    $('#carrinho .card-body').prepend(
      '<img src="' + filmeInfo.imagem + '" class="card-img-top" alt="' + filmeInfo.titulo + '">' +
      '<h5 class="card-title">' + filmeInfo.titulo + '</h5>'
    );
  }

  poltronasSelecionadas.forEach(function(poltrona) {
    $('#carrinho .card-body').append('<p>Poltrona: ' + poltrona + '</p>');
  });
});
