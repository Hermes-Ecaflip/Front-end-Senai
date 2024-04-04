Algoritmo "Atividade da Aula 7,1"

Var
produtos : vetor[1..3] de caractere
valor: vetor[1..3] de real
contador : inteiro
media, total : real

Inicio

para contador <- 1 ate 3 faca
{nome do produto}
 escreval("Digite o nome do Produto ",contador)
 leia(produtos[contador])
{valor do produto}
 escreval("Digite o valor do produto :",produtos[contador])
 leia(valor[contador])
 limpaTela()
fimPara

total <- total + valor[contador]

{media do valores do produto}

media <- total / 3

{resultados}
limpatela()
para contador <- 1 ate 3 faca
     escreval("Produto",contador," = ", produtos[contador])
     escreval("/ Valor ", valor[contador])
fimpara
       escreval("Total do valor em estoque : ", total)
       escreval("Média de valor dos produtos : ",media)

Fimalgoritmo