algoritmo "Revisao 3"

var
    num1, num2, resultado: real
    operacao: caractere

inicio
escreval("Digite o primeiro número: ")
leia(num1)

escreval("Digite a operação desejada (+, -, *, /): ")
leia(operacao)

escreval("Digite o segundo número: ")
leia(num2)

escolha operacao
 caso "+"
  resultado <- num1 + num2
escreval("O resultado da adição é: ", resultado)
 caso "-"
  resultado <- num1 - num2
escreval("O resultado da subtração é: ", resultado)
 caso "*"
  resultado <- num1 * num2
escreval("O resultado da multiplicação é: ", resultado)
 caso "/"
se (num2 = 0) então
 escreval("Erro! Não é possível dividir por zero.")
senao
  resultado <- num1 / num2
 escreval("O resultado da divisão é: ", resultado)
fimse
outrocaso
  escreval("Operação inválida!")
fimescolha


fimalgoritmo