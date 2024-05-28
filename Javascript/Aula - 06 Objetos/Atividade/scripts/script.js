class Carro {
    constructor(marca, modelo, ano, cor, velocidadeMaxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }

    acelerar(incremento) {
        this.velocidadeAtual = Math.min(this.velocidadeAtual + incremento, this.velocidadeMaxima);
        this.mostrarVelocidade();
        return `${this.velocidadeAtual}`
    }

    mostrarVelocidade() {
        const carInfoHTML = `
            <strong>Marca:</strong> ${this.marca}<br>
            <strong>Modelo:</strong> ${this.modelo}<br>
            <strong>Ano:</strong> ${this.ano}<br>
            <strong>Cor:</strong> ${this.cor}<br>
            <strong>Velocidade Máxima:</strong> ${this.velocidadeMaxima} km/h<br>
            <strong>Velocidade Atual:</strong> ${this.velocidadeAtual} km/h
        `;
        document.querySelector('#carInfo').innerHTML = carInfoHTML;
    }
}

// Instanciando o objeto carro
const meuCarro = new Carro('Ford', 'Mustang', 2020, 'vermelho', 220);

// Função para acelerar o carro
function acelerar(valor) {
    meuCarro.acelerar(valor);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    meuCarro.mostrarVelocidade();
});

function acelerar(valor) {
    meuCarro.acelerar(valor);
    animarRoda(meuCarro.velocidadeAtual);
}

function animarRoda(velocidade) {
    const roda = document.getElementById('rodaCarro');
    roda.style.animation = `girarRoda ${calcularDuracao(velocidade)}s linear infinite`;
}

// Essa função calcula a duração da animação baseada na velocidade atual
// Quanto maior a velocidade, mais rápida será a rotação
function calcularDuracao(velocidade) {
    const baseSpeed = 220; // Velocidade máxima do carro
    return Math.max(0.5, (baseSpeed - velocidade) / baseSpeed * 2);
}

