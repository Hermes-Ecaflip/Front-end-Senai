$(document).ready(function() {
    // Sequência do Código Konami: cima, cima, baixo, baixo, esquerda, direita, esquerda, direita, B, A
    var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    var current = 0;
  
    // Detecta a sequência de teclas do Código Konami
    $(document).keydown(function(e) {
      if (e.keyCode === konamiCode[current]) {
        current++;
        // Se a sequência completa for inserida, executa a função
        if (current === konamiCode.length) {
          executeLogoSpin();
          current = 0;
        }
      } else {
        current = 0;
      }
    });
  
    // Função para girar o logo
    function executeLogoSpin() {
      $('img[alt="LOGO"]').css({ 'transition': 'transform 2s', 'transform': 'rotate(360deg)' });
      // Reseta a transformação após 2 segundos
      setTimeout(function() {
        $('img[alt="LOGO"]').css('transform', '');
      }, 2000);
    }
  });
  