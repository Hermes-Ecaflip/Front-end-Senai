Algoritmo "Revisao 2"

Var
   numApostados, numSorteados, acertos: Inteiro
   apostados: Vetor[1..4] de Inteiro
   sorteados: Vetor[1..3] de Inteiro

Inicio
// Ler os números apostados
Para numApostados de 1 ate 4 faca
 Escreval("Digite o ", numApostados, "º número apostado: ")
  Leia(apostados[numApostados])
FimPara

// Ler os números sorteados
Para numSorteados de 1 ate 3 faca
 Escreval("Digite o ", numSorteados, "º número sorteado: ")
  Leia(sorteados[numSorteados])
FimPara

// Verificar quantos números apostados coincidem com os sorteados
acertos <- 0
Para numApostados de 1 ate 4 faca
Para numSorteados de 1 ate 3 faca
 Se apostados[numApostados] = sorteados[numSorteados] entao
 acertos <- acertos + 1
FimSe
FimPara
FimPara

// Exibir o número de acertos
Escreva("O apostador fez ", acertos, " acertos.")
FimAlgoritmo
