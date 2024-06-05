$(document).ready(function() {
    let app = {
      precoUnitario: 100, // Preço unitário de cada produto
      init: function() {
        this.bindEvents();
        this.carregarProdutos();
        this.verificarTemaInicial();
      },
      bindEvents: function() {
        $('#calcular').on('click', this.calcularPrecoTotal.bind(this));
        $('#trocaTemaDark').on('click', this.aplicarTemaEscuro.bind(this));
        $('#trocaTemaClaro').on('click', this.aplicarTemaClaro.bind(this));
        $('#adicionar').on('click', this.adicionarProduto.bind(this));
      },
      calcularPrecoTotal: function() {
        let quantidade = parseInt($('#quantidade').val());
        if (!isNaN(quantidade) && quantidade > 0 && quantidade === Math.floor(quantidade)) {
          let precoTotal = quantidade * this.precoUnitario;
          $('#precoTotal').text(`R$ ${precoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        } else {
          alert('Por favor, insira uma quantidade válida e inteira.');
        }
      },
      aplicarTemaEscuro: function() {
        $('body').addClass('dark-theme');
        $('.navbar').addClass('dark-theme'); // Adiciona a classe ao navbar também
        $('#trocaTemaDark').hide();
        $('#trocaTemaClaro').show();
      },
      aplicarTemaClaro: function() {
        $('body').removeClass('dark-theme');
        $('.navbar').removeClass('dark-theme'); // Remove a classe do navbar também
        $('#trocaTemaClaro').hide();
        $('#trocaTemaDark').show();
      },
      verificarTemaInicial: function() {
        if ($('body').hasClass('dark-theme')) {
          $('#trocaTemaClaro').show();
          $('#trocaTemaDark').hide();
        } else {
          $('#trocaTemaClaro').hide();
          $('#trocaTemaDark').show();
        }
      },
      adicionarProduto: function() {
        let nomeProduto = $('#nomeProduto').val();
        let valorProduto = parseFloat($('#valorProduto').val());
        let imagemProduto = $('#imagemProduto').val();
        
        if (nomeProduto && !isNaN(valorProduto) && valorProduto > 0 && imagemProduto) {
          let cardHtml = `
            <div class="card m-2" style="width: 18rem;">
              <img src="${imagemProduto}" class="card-img-top" alt="${nomeProduto}">
              <div class="card-body">
                <h5 class="card-title">${nomeProduto}</h5>
                <p class="card-text">Preço: R$ ${valorProduto.toFixed(2)}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
              </div>
            </div>
          `;
          $('#catalogo').append(cardHtml);
          $('#nomeProduto').val('');
          $('#valorProduto').val('');
          $('#imagemProduto').val('');
        } else {
          alert('Por favor, insira um nome, valor e caminho da imagem válidos para o produto.');
        }
      },
      carregarProdutos: function() {
        // Aqui você pode carregar produtos de um array ou de uma fonte externa
      }
    };
    app.init();
});
