// Aguarda o carregamento do documento antes de executar o código
$(document).ready(function() {
    // Objeto app contendo as propriedades e métodos da aplicação
    let app = {
      precoUnitario: 100, // Preço unitário de cada produto
  
      // Método de inicialização da aplicação
      init: function() {
        this.bindEvents();
        this.carregarProdutos();
        this.verificarTemaInicial();
      },
  
      // Método para vincular eventos aos elementos da página
      bindEvents: function() {
        $('#calcular').on('click', this.calcularPrecoTotal.bind(this));
        $('#trocaTemaDark').on('click', this.aplicarTemaEscuro.bind(this));
        $('#trocaTemaClaro').on('click', this.aplicarTemaClaro.bind(this));
        $('#adicionar').on('click', this.adicionarProduto.bind(this));
      },
  
      // Método para calcular o preço total dos produtos
      calcularPrecoTotal: function() {
        let quantidade = parseInt($('#quantidade').val());
        if (!isNaN(quantidade) && quantidade > 0 && quantidade === Math.floor(quantidade)) {
          let precoTotal = quantidade * this.precoUnitario;
          $('#precoTotal').text(`R$ ${precoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        } else {
          alert('Por favor, insira uma quantidade válida e inteira.');
        }
      },
  
      // Método para aplicar o tema escuro
      aplicarTemaEscuro: function() {
        $('body').addClass('dark-theme');
        $('.navbar').addClass('dark-theme');
        $('#trocaTemaDark').hide();
        $('#trocaTemaClaro').show();
      },
  
      // Método para aplicar o tema claro
      aplicarTemaClaro: function() {
        $('body').removeClass('dark-theme');
        $('.navbar').removeClass('dark-theme');
        $('#trocaTemaClaro').hide();
        $('#trocaTemaDark').show();
      },
  
      // Método para verificar o tema inicial e ajustar os botões de tema
      verificarTemaInicial: function() {
        if ($('body').hasClass('dark-theme')) {
          $('#trocaTemaClaro').show();
          $('#trocaTemaDark').hide();
        } else {
          $('#trocaTemaClaro').hide();
          $('#trocaTemaDark').show();
        }
      },
  
      // Método para adicionar um novo produto ao catálogo
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
                <button class="btn btn-success">Comprar</button>
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
  
      // Método para carregar produtos, que pode ser implementado posteriormente
      carregarProdutos: function() {
        // Implementação pendente
      }
    };
  
    // Inicializa a aplicação
    app.init();
  });
  