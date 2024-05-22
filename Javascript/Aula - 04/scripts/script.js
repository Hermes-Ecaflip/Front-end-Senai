let carrinho = [];

function adicionarAoCarrinho(produto) {
  carrinho.push(produto);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const listaCarrinho = document.getElementById('listaCarrinho');
  listaCarrinho.innerHTML = ''; // Limpa a lista antes de adicionar os itens atualizados
  carrinho.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    li.className = 'list-group-item'; // Classe do Bootstrap para os itens da lista
    listaCarrinho.appendChild(li);
  });
}
