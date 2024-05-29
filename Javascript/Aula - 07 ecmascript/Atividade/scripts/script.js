// Array de jogos para a pesquisa
const games = ['Super Mario', 'Zelda', 'Sonic', 'Mineirinho', 'Minecraft', 'Auau'];

// Função para substituir texto
function replaceText() {
  let text = document.querySelector('#text-module').value;
  // Substituir 'replace' por 'replace all'
  text = text.replace(/replace/g, 'replace all');
  document.querySelector('#text-module').value = text;
  console.log(replaceAll())
}

// Função para verificar se o usuário é ADM
function checkAdmin() {
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  new Promise((resolve, reject) => {
    if (username === 'ADM' && password === 'ADM') {
      resolve('Usuário verificado como ADM.');
    } else {
      reject('Usuário não é ADM.');
    }
  })
  .then(message => {
    document.querySelector('#admin-result').textContent = message;
  })
  .catch(error => {
    document.querySelector('#admin-result').textContent = error;
  });
}

// Função para pesquisar jogo
function searchGame() {
  const search = document.querySelector('#game-search').value;
  const result = games.includes(search) ? 'Jogo encontrado!' : 'Jogo não encontrado!';
  document.querySelector('#search-result').textContent = result;
}
