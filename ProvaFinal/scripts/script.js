$(document).ready(function() {
  // Sequência do Código Konami como string
  var konamiCode = '38384040373937396665';
  var inputSequence = '';

  // Detecta a sequência de teclas do Código Konami
  $(document).keydown(function(e) {
    inputSequence += e.keyCode.toString();
    if (inputSequence === konamiCode) {
      executeLogoSpin();
    }
    if (!konamiCode.startsWith(inputSequence)) {
      inputSequence = '';
    }
  });

  // Função para girar o logo
  function executeLogoSpin() {
    $('img[alt="LOGO"]').css({ 'transition': 'transform 2s', 'transform': 'rotate(360deg)' });
    setTimeout(function() {
      $('img[alt="LOGO"]').css('transform', '');
    }, 2000);
  }

  // Função para alternar entre temas claro e escuro
  $('#themeToggle').click(function() {
    $('body').toggleClass('light-theme dark-theme');
    var theme = $('body').hasClass('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme); // Salva a preferência do tema
    updateThemeIcons();
  });

  // Atualiza os ícones de acordo com o tema
  function updateThemeIcons() {
    if ($('body').hasClass('dark-theme')) {
      $('.fa-moon').addClass('d-none');
      $('.fa-sun').removeClass('d-none');
    } else {
      $('.fa-sun').addClass('d-none');
      $('.fa-moon').removeClass('d-none');
    }
  }

  // Inicializa o tema com base na preferência salva
  if (localStorage.getItem('theme') === 'dark') {
    $('body').addClass('dark-theme').removeClass('light-theme');
  } else {
    $('body').addClass('light-theme').removeClass('dark-theme');
  }
  updateThemeIcons(); // Atualiza os ícones ao carregar a página
});

$(document).ready(function() {
  // Adiciona evento de clique para cada filme
  $('#filmes .card a, #filmes2 .card a').click(function(event) {
    event.preventDefault(); // Previne a ação padrão do link
    $('#modalSelecaoAssentos').modal('show'); // Abre o modal
  });
});

$(document).ready(function() {
  // Função para gerar poltronas
  function gerarPoltronas() {
    const assentosCinema = $('#assentosCinema');
    assentosCinema.empty(); // Limpa os assentos existentes
    let total = 0; // Inicializa o total

    for (let i = 0; i < 3; i++) { // 3 fileiras
      const fileira = $('<div>').addClass('d-flex justify-content-center mb-2');
      for (let j = 0; j < 6; j++) { // 6 poltronas por fileira
        const poltrona = $('<button>').addClass('btn border me-1 poltrona');
        // Adiciona o ícone e o número em linhas separadas
        poltrona.html(`<i class="fa-solid fa-couch fa-xl"></i><span class="poltrona-numero">${i * 6 + j + 1}</span>`);
        poltrona.on('click', function() {
          $(this).toggleClass('btn-success'); // Muda a cor para verde
          const valorPoltrona = 29.90;
          if ($(this).hasClass('btn-success')) {
            total += valorPoltrona; // Adiciona o valor ao total
          } else {
            total -= valorPoltrona; // Subtrai o valor do total
          }
          $('#total').text(`Total: R$${total.toFixed(2)}`); // Atualiza o total
        });
        fileira.append(poltrona);
      }
      assentosCinema.append(fileira);
    }
  }

  // Inicializa o modal com as poltronas
  $('#modalSelecaoAssentos').on('show.bs.modal', function() {
    gerarPoltronas(); // Gera as poltronas
  });

  // Limpa o total ao fechar o modal
  $('#modalSelecaoAssentos').on('hidden.bs.modal', function() {
    $('#total').text('Total: R$0.00');
  });
});
