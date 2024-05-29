// Declaração de variáveis para o status do Pokémon
var vida = 100;
var dano = 20;
var powerups = 0;

// Função para atualizar os status na página
function atualizarStatus() {
  document.getElementById('vida').textContent = vida;
  document.getElementById('dano').textContent = dano;
  document.getElementById('powerups').textContent = powerups;
}

// Função para aplicar dano ao Pokémon
function tomarDano() {
  vida -= 10; // Reduz a vida em 10
  atualizarStatus(); // Atualiza os status na tela
}

// Função para curar o Pokémon
function curar() {
  vida += 20; // Aumenta a vida em 20
  vida = vida > 100 ? 100 : vida; // Garante que a vida não exceda 100
  atualizarStatus(); // Atualiza os status na tela
}

// Função para evoluir o Pokémon
function evoluir() {
  if (powerups < 3) { // Verifica se o Pokémon pode evoluir
    powerups++; // Incrementa o número de powerups
    dano += 5; // Aumenta o dano
  } else {
    alert('Seu Pokémon alcançou o máximo de evoluções!'); // Alerta se o Pokémon já está no máximo de evoluções
  }
  atualizarStatus(); // Atualiza os status na tela
}

// Chama a função atualizarStatus ao carregar o script
atualizarStatus();
