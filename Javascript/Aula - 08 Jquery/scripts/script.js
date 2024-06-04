// Solicita o nome do usuário e atualiza o texto do elemento com id 'nomeUsuario'
var nomeUsuario = prompt("Qual é o seu nome?");
$("#nomeUsuario").text(nomeUsuario); // Usando jQuery para definir o texto
// document.querySelector("#nomeUsuario").innerHTML = nomeUsuario; // Método antigo, não necessário com jQuery

// Define o texto do parágrafo principal e adiciona um manipulador de evento de clique
var pPrincipal = $("#paragrafoPrincipal").text("OLHA QUE TOP");
pPrincipal.on("click", function() {
    pPrincipal.addClass("mudei");
});

// Adiciona manipuladores de evento de clique ao elemento 'h6' para alternar temas
$("h6").on("click", function() {
    $("main").toggleClass("tema-escuro tema-claro"); // Alternar classes com 'toggleClass'
    $("h3").css("color", "red"); // Muda a cor do 'h3' para vermelho
});

// Adiciona um manipulador de evento de clique ao elemento com id 'fechar' para esconder a propaganda
$("#fechar").on("click", function() {
    $("#propaganda").hide(500); // Esconde a propaganda com uma animação de 500ms
});
