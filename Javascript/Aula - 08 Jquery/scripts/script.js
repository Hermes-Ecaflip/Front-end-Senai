var paragrafoPrincipalMetodoAntigo = document.querySelector("#paragrafoPrincipal")
var pPrincipal = $("#paragrafoPrincipal").text("OLHA QUE TOP")

var nomeUsuario = prompt("Qual é o seu nome?");

$("#nomeUsuario").text(nomeUsuario)
document.querySelector("#nomeUsuario").innerHTML = nomeUsuario

pPrincipal.on("click", function(){
    pPrincipal.addclass("mudei");
})