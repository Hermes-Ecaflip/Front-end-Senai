// Array com os filmes e suas imagens
var filmes = [
    { titulo: "O Poderoso Chefão", imagem: "https://mid.curitiba.pr.gov.br/2022/destaque/00337449.jpg" },
    { titulo: "Forrest Gump", imagem: "https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2024/03/forrest-gump.jpg" },
    { titulo: "Inception", imagem: "https://m.media-amazon.com/images/S/pv-target-images/e826ebbcc692b4d19059d24125cf23699067ab621c979612fd0ca11ab42a65cb._SX1080_FMjpg_.jpg" },
    { titulo: "Clube da Luta", imagem: "https://cdn.culturagenial.com/imagens/filme-clube-de-luta-og.jpg?class=ogImageWide" },
    { titulo: "Pulp Fiction", imagem: "https://m.media-amazon.com/images/M/MV5BMjAyMjUyNzg1Ml5BMl5BanBnXkFtZTgwNzAwMzg5MTE@._V1_.jpg" },
    { titulo: "Harry Potter", imagem: "https://ingresso-a.akamaihd.net/b2b/production/uploads/article/image/2218/66cd0a47700ce4da0eb840ab00a6f462.jpg" }
  ];
  
  // Função para mostrar os filmes na página
  function mostrarFilmes() {
    var listaFilmes = document.getElementById('listaFilmes');
    filmes.forEach(function(filme) {
      var col = document.createElement('div');
      col.classList.add('col-md-4', 'mb-3');
      col.innerHTML = '<div class="card">' +
                        '<img src="' + filme.imagem + '" class="card-img-top" alt="' + filme.titulo + '">' +
                        '<div class="card-body">' +
                          '<h5 class="card-title">' + filme.titulo + '</h5>' +
                        '</div>' +
                      '</div>';
      listaFilmes.appendChild(col);
    });
  }

  // Script para verificar o login
function verificarLogin() {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
  
    if (usuario === 'ADM' && senha === 'ADM') {
      alert('Seja bem-vindo!');
    } else {
      alert('Informações de login incorretas. Tente novamente.');
    }
  }
  
  window.onload = mostrarFilmes;
  