Algoritmo "Prova 1"

Var

   notas : vetor[1..5] de real
   somaNotas: real
   media : real
   alunosAcimaMedia : inteiro
   i: inteiro

Inicio
somaNotas <- 0
alunosAcimaMedia <- 0
i <- 1

enquanto (i <= 5) faca
 escreval("Digite a nota do aluno ",i,":")
  leia(notas[i])
  somaNotas <- somaNotas + notas[i]
i <- i +1
fimenquanto

media <- somaNotas/5

i <- 1

enquanto (i <= 5) faca
 se notas[i] > media entao
 alunosAcimaMedia <- alunosAcimaMedia + 1
fimSe
i <- i + 1
fimenquanto

escreval("A média da turma é: ",media)
escreval("Número de alunos com notas acima da média: ",alunosAcimaMedia)
 
Fimalgoritmo