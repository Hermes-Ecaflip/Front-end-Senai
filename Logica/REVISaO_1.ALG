Algoritmo "Revisão 1"


Var
A, B, C, menor, meio, maior: inteiro;

Inicio
// Ler os três números
   escreval("Digite o primeiro número: ")
   leia(A)
   escreval("Digite o segundo número: ")
   leia(B)
   escreval("Digite o terceiro número: ")
   leia(C)

//Determinar menor numero
se (A < B) e (A < C) entao
 menor <- A
seNao
 se (B < C) entao
 menor <- B
seNao
 menor <- C
fimSe
fimSe

// Determinar o maior número
se (A > B) e (A > C) entao
 maior <- A
senao
se (B > C) entao
 maior <- B
senao
maior <- C
fimse
fimse

// Determinar o número do meio
se (A > menor) e (A < maior) ou (A < menor) e (A > maior) entao
 meio <- A
senao
se (B > menor) e (B < maior) ou (B < menor) e (B > maior) entao
 meio <- B
senao
 meio <- C
fimse
fimse

limpatela()

//Ordem crescente
escreval("Ordem crescente: ", menor, ", ", meio, ", ", maior)

//Ordem decrecente
escreval("Ordem decrescente: ", maior, ", ", meio, ", ", menor)

Fimalgoritmo