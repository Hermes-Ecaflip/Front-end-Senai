const resposta = document.getElementById("resposta");

// Exibe uma lista de produtos no DOM
function teste1() {
    let htmlContent = '';
    for (let contador = 1; contador <= 10; contador++) {
        htmlContent += `
            <div class="produto">
                <h3> PRODUTO ${contador} </h3>
                <p> descricao </p>
            </div>
        `;
    }
    resposta.innerHTML = htmlContent;
}

// Exibe a frase "FRONT END É TOP" 10 vezes no DOM
function teste2(){
    let i = 1; // Inicialização correta da variável i
    let htmlContent = "";
    do {
        htmlContent += "FRONT END É TOP <br>";
        i++;
    } while(i <= 10);
    resposta.innerHTML = htmlContent;
}

// Exibe mensagens no alert
function teste3(){
    for(let i = 1; i <= 5; i++){
        alert(`Esse é o ${i}° alert!`);
    }
}

// Exibe a lista de produtos no console
function teste4(){
    let produtos = ["Imposto", "Pastel", "Playstation", "Pão de queijo", "Rojão", "Sorvete", "Nintendinho"];
    console.log(produtos)
    array.forEach(element => {
        
    });
}

function teste5(){
    var filmes = ["Harry Potter","Vingadores","Gatos de Botas","Shrek","One Piece"];

    for(let i = 0; i < filmes.length;i++ ){

        resposta.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${filmes[i]}</h5>
                <p class="card-text">Some quick example text</P>
            </div>
        </div>
        `
            
    }
}