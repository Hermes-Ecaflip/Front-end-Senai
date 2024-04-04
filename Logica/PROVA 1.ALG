Algoritmo "Prova 1"

Var

   notas : vetor[1..5] de real
   somaNotas, media : real
   alunosAcimaMedia, i : inteiro

Inicio
//Entrada de dados dos alunos =D
somaNotas <- 0
alunosAcimaMedia <- 0
i <- 1

//NOTAS DOS ALUNOS COM O CALCULO
enquanto (i <= 5) faca
 escreval("Digite a nota do aluno ",i,":")
  leia(notas[i])
  somaNotas <- somaNotas + notas[i]
i <- i +1
fimenquanto

//CALCULO DAS MEDIAS DAS NOTAS
media <- somaNotas/5

i <- 1

//CALCULO PARA SABER OS ALUNOS ACIMA DA MEDIA
enquanto (i <= 5) faca
 se (notas[i] > media) entao
 alunosAcimaMedia <- alunosAcimaMedia + 1
fimSe
i <- i + 1
fimenquanto

//RESULTADOS MEDIA/ALUNOS ACIMA DA MEDIA
escreval("A média da turma é: ",media)
escreval("Número de alunos com notas acima da média: ",alunosAcimaMedia)
 
Fimalgoritmo