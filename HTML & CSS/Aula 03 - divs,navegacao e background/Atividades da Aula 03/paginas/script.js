// Selecionando todos os botões de compra
const buyButtons = document.querySelectorAll('.buy-button');

// Adicionando um evento de clique a cada botão de compra
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('O produto foi adicionado ao carrinho!');
    // Aqui você pode adicionar sua lógica para adicionar o produto ao carrinho de compras
  });
});
