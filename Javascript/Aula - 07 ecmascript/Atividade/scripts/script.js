// Array de jogos para a pesquisa
const games = ['Super Mario', 'Zelda', 'Sonic'];

// Função para substituir texto
function replaceText() {
  let text = document.getElementById('text-module').value;
  // Substituir 'replace' por 'replace all'
  text = text.replace(/replace/g, 'replace all');
  document.getElementById('text-module').value = text;
}

// Função para verificar se o usuário é ADM
function checkAdmin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  new Promise((resolve, reject) => {
    if (username === 'ADM' && password === 'ADM') {
      resolve('Usuário verificado como ADM.');
    } else {
      reject('Usuário não é ADM.');
    }
  })
  .then(message => {
    document.getElementById('admin-result').textContent = message;
  })
  .catch(error => {
    document.getElementById('admin-result').textContent = error;
  });
}

// Função para pesquisar jogo
function searchGame() {
  const search = document.getElementById('game-search').value;
  const result = games.includes(search) ? 'Jogo encontrado!' : 'Jogo não encontrado!';
  document.getElementById('search-result').textContent = result;
}
