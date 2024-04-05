Algoritmo "Revisao 4"

var

    numero, contador, quantidade : inteiro

inicio

contador <- 1
quantidade <- 0

Enquanto contador <= 5 Faça
 Escreva("Digite o ", contador, "º número: ")
 Leia(numero)

 Se numero > 10 Então
 quantidade <- quantidade + 1
 FimSe

contador <- contador + 1
FimEnquanto

Escreva("A quantidade de números maiores que 10 é: ", quantidade)
FimAlgoritmo
