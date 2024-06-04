var paragrafoPrincipalMetodoAntigo = document.querySelector("#paragrafoPrincipal")
var pPrincipal = $("#paragrafoPrincipal").text("OLHA QUE TOP")

var nomeUsuario = prompt("Qual é o seu nome?");

$("#nomeUsuario").text(nomeUsuario)
document.querySelector("#nomeUsuario").innerHTML = nomeUsuario

pPrincipal.on("click", function(){
    pPrincipal.addclass("mudei");
})

$("h6").on("click",function(){
    $("main").addClass("tema-escuro");
    $("main").removeClass("tema-claro");
    $("h3").css("color","red");
})