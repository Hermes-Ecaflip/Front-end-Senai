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

document.querySelector('#carForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtendo os valores do formulário
    const marca = document.querySelector('#marca').value;
    const modelo = document.querySelector('#modelo').value;
    const ano = document.querySelector('#ano').value;
    const cor = document.querySelector('#cor').value;
    const velocidadeMaxima = document.querySelector('#velocidadeMaxima').value;
    
    // Instanciando o objeto carro com os valores do formulário
    const carroUsuario = new Carro(marca, modelo, ano, cor, velocidadeMaxima);
    
    // Atualizando a função acelerar para usar o carro do usuário
    window.acelerar = function(valor) {
        carroUsuario.acelerar(valor);
        animarRoda(carroUsuario.velocidadeAtual);
    };
    
    // Mostrando a velocidade inicial
    carroUsuario.mostrarVelocidade();
});

function animarRoda(velocidade) {
    const roda = document.querySelector('#rodaCarro');
    roda.style.animation = `girarRoda ${calcularDuracao(velocidade)}s linear infinite`;
}

function calcularDuracao(velocidade) {
    const baseSpeed = 220; // Velocidade máxima do carro
    return Math.max(0.5, (baseSpeed - velocidade) / baseSpeed * 2);
}
