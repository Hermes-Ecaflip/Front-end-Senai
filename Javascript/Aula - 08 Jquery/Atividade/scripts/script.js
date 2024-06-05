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
        $('#trocaTemaDark').hide();
        $('#trocaTemaClaro').show();
      },
      aplicarTemaClaro: function() {
        $('body').removeClass('dark-theme');
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
        
        if (nomeProduto && !isNaN(valorProduto) && valorProduto > 0) {
          $('#catalogo').append(`<p>${nomeProduto} - R$ ${valorProduto.toFixed(2)}</p>`);
          $('#nomeProduto').val('');
          $('#valorProduto').val('');
        } else {
          alert('Por favor, insira um nome e um valor válido para o produto.');
        }
      },
      carregarProdutos: function() {
        produtos.forEach(produto => {
          $('#catalogo').append(`<p>${produto}</p>`);
        });
      }
    };
    app.init();
});
