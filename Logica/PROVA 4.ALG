Algoritmo "Prova 4"

Var

 salario, somaSalarios, maiorSalario, mediaSalario, mediaFilhos, percentualMenor : real
 somaFilhos, salarioMenor, totalPessoas, numeroFilhos: inteiro

Inicio
//ENTRADA DE DADOS DOS SALARIO/FILHOS/PESSOAS
somaSalarios <- 0
somaFilhos <- 0
maiorSalario <- 0
salarioMenor <- 0
totalPessoas <- 0

//SALARIO
escreval("Digite o salário do habitante (ou um valor negativo para encerrar): ")
 leia(salario)

enquanto (salario >= 0) faca
 totalPessoas <- totalPessoas + 1

//FILHOS
escreval("Digite o número de filhos do habitante: ")
 leia(numeroFilhos)

//CALCULO DO SALARIO E DOS FILHOS
somaSalarios <- somaSalarios + salario
somaFilhos <- somaFilhos + numeroFilhos

//QUEM TEM O SALARIO MAIOR QUE 150
se (salario > maiorSalario) entao
maiorSalario <- salario
fimse

//QUEM TEM O SALARIO MENOR QUE 150
se(salario < 150) entao
 salarioMenor <- salarioMenor + 1
fimse

//LOOP ATE CANCELAR A OPERAÇÂO
escreval("Digite o salário do próximo habitante(ou um valor negativo para encerrar): ")
leia(salario)
fimenquanto

limpatela()

//CALCULO FINAL E RESULTADO
se (totalPessoas > 0) então
 mediaSalario <- somaSalarios / totalPessoas
 mediaFilhos <- somaFilhos / totalPessoas
 percentualMenor <- (salarioMenor / totalPessoas) * 100
  escreval("a) Média de salário da população: ", mediaSalario)
  escreval("b) Média do número de filhos: ", mediaFilhos)
  escreval("c) Maior salário dos habitantes: ", maiorSalario)
  escreval("d) Percentual de pessoas com salário menor que R$ 150,00: ", percentualMenor, "%")
senao
 escreval("Nenhum dado foi inserido.")
fimse
Fimalgoritmo