var usuario = ``
var senha = ``

var btnLogar = document.querySelector("#logarUsuario");

// addEventListener = Adiciona um evento, qual função a ser rodada
// Obs : A única excessão do código que não precisa de parenteses na hora de chamar a function
btnLogar.addEventListener(`click`,fazerLogin);

function fazerLogin(){
    usuario = document.querySelector("#usuario").value;
    senha = document.querySelector("#senha").value;
    
    document.querySelector("#usuarioStatus").innerHTML = `
        Seja bem vindo(a), ${usuario}
    `;
}

//  catalogo
var catalogo = ["Placa de Video", "Placa mãe", "Processador", "Memória RAM", "Fonte", "Monitor"];

catalogo.forEach(element => {
    document.querySelector("main").innerHTML += `
    <div class="card" style="width: 18rem;">
        <div class="card-body flex-column d-flex align-items-center">
            <h5 class="card-title">${element}</h5>
            <button onclick="adicionarCarrinho() type="button" class="btn btn-success">Comprar</button>
        </div>
    </div> 
    `;
});

function adicionarCarrinho(){ alert()}