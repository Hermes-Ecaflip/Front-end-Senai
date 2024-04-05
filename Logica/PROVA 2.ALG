Algoritmo "Prova 2"

Var

  horasTrabalho, salarioHora, salarioTotal, horasExtras: real
  
Inicio
//ENTRADA DE DADOS DE HORAS DE TRABALHO E SALARIO
horasTrabalho <- 0
salarioHora <- 0
salarioTotal <- 0
horasExtras <- 0

//HORAS TRABALHADAS
escreval("Digite o número de horas trabalhadas no mês:")
leia(horasTrabalho)

//SALARIO POR HORAS
escreval("Digite o salario por hora:")
leia(salarioHora)

//CALCULO DO SALARIO POR HORA E SE FEZ HORA EXTRA
se(horasTrabalho > 160) entao
 horasExtras <- horasTrabalho - 160
 salarioTotal <- (160 * salarioHora) + (horasExtras * salarioHora * 1.5)
 senao
  salarioTotal <- horasTrabalho * salarioHora
 fimse

//RESULTADO
 escreval("O salário total do funcionário é: ",salarioTotal)
Fimalgoritmo