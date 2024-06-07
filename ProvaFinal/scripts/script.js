$(document).ready(function() {
  // Sequência do Código Konami como string
  var konamiCode = '38384040373937396665';
  var inputSequence = '';

  // Detecta a sequência de teclas do Código Konami
  $(document).keydown(function(e) {
    inputSequence += e.keyCode;
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
