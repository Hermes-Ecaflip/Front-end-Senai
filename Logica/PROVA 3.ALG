Algoritmo "Prova 3"

Var

   numeroConta: inteiro
   saldo, debito, credito, saldoAtual: real

Inicio
//ENTRADA DE DADOS DA CONTA DO CLIENTE(NUMERO DA CONTA
//SALDO/DEBITO/CREDITO
   escreval("Digite o número da conta do clinte: ")
   leia(numeroConta)
   escreval("Digite o saldo atual da conta: ")
   leia(saldo)
   escreval("Digite o valor do débito: ")
   leia(debito)
   escreval("Digite o valor do crédito: ")
   leia(credito)

//CALCULO DO SALDO ATUAL
saldoAtual <- saldo - debito + credito

//SALDO ATUAL DA CONTA
   escreval("O saldo atual da conta é: ",saldoAtual)

//INFOMAÇÃO SE O SALDO ESTÁ POSITIVO OU NEGATIVO
se (saldoAtual >= 0) entao
 escreval("Saldo Positivo")
senao
 escreval("Saldo Negativo")
fimse


Fimalgoritmo