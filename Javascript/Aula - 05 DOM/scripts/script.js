var usuario = '';
var senha = '';

var btnLogar = document.querySelector("#logarUsuario");
btnLogar.addEventListener('click', fazerLogin);

function fazerLogin() {
    usuario = document.querySelector("#usuario").value;
    senha = document.querySelector("#senha").value;
    
    document.querySelector("#usuarioStatus").innerHTML = `
        Seja bem vindo(a), ${usuario}
    `;
}

var catalogo = [
    { nome: "Placa de Video", preco: "R$ 1500,00", img: "https://s2-techtudo.glbimg.com/b3v-mCTmam09F1C0Wjsau93UiyY=/0x0:695x444/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/3/f/fjBhJkS0WABWAvB4MHzw/2015-10-23-video.png" },
    { nome: "Placa mãe", preco: "R$ 800,00", img: "https://img.terabyteshop.com.br/produto/g/placa-mae-gigabyte-h510m-h-chipset-h510-intel-lga-1200-matx-ddr4_122404.png" },
    { nome: "Processador", preco: "R$ 1200,00", img: "https://img.terabyteshop.com.br/produto/g/processador-amd-ryzen-7-5800x-38ghz-47ghz-turbo-8-cores-16-threads-am4-sem-cooler_107432.jpg" },
    { nome: "Memória RAM", preco: "R$ 350,00", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkV0FpXJY-gOuNnnTAtBQuMsHytsrTdJs3cg7XSl8Xg&s" },
    { nome: "Fonte", preco: "R$ 450,00", img: "https://s2-techtudo.glbimg.com/mx31XGwYIutMUhqkkJk5sAl2KtE=/0x0:695x453/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/M/g/2gs2zxRe6A2OOA1Ff6Xw/2015-02-09-entenda-como-funciona-uma-fonte-chaveada-e-confira-as-mais-populares2.jpg" },
    { nome: "Monitor", preco: "R$ 700,00", img: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/2/4/24gn60r-b4.jpg" }
];

catalogo.forEach(produto => {
    document.querySelector("main").innerHTML += `
    <div class="card" style="width: 18rem;">
        <img src="${produto.img}" class="card-img-top" alt="${produto.nome}">
        <div class="card-body flex-column d-flex align-items-center">
            <h5 class="card-title">${produto.nome}</h5>
            <p class="card-text">${produto.preco}</p>
            <button onclick="adicionarCarrinho('${produto.nome}', '${produto.img}')" type="button" class="btn btn-success">Comprar</button>
        </div>
    </div> 
    `;
});

function adicionarCarrinho(nomeProduto, imgProduto) {
    var itemCarrinho = {
        nome: nomeProduto,
        img: imgProduto
    };
    carrinho.push(itemCarrinho);
    atualizarCarrinho();
    alert(`O produto: ${nomeProduto} foi adicionado ao carrinho!`);
}

function atualizarCarrinho() {
    document.querySelector("#respostaCarrinho").innerHTML = "";
    carrinho.forEach(produto => {
        document.querySelector("#respostaCarrinho").innerHTML += `
            <div class="d-flex align-items-center justify-content-between mt-2">
                <img src="${produto.img}" alt="${produto.nome}" style="width: 50px; height: 50px;">
                <h5> ${produto.nome} </h5>
            </div>
        `;
    });
}

var carrinho = [];

