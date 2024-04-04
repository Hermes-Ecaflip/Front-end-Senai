Algoritmo "aula senai"


Var
nome : caractere
numero1 : inteiro
numero2 : real
ligado : logico
resultado : real

//REGRAS DE VARIAVEIS
//1 - Não pode espaço em nome de variavel
//2 - Não pode caracteres especiais
//3 - Não pode numeros no começo ou isolados
//4 - Não pode palavras dedicada

//metodo camel case
//numeroMaiorDaEquacao

//snake case
//numero_maior_da_equacao




Inicio
//escreval("Olá Mundo!")
//escreval("Guariroba")
//nome <- "Oxan"
       escreval("vamos calcular a area do triangulo")

       escreval("Qual o seu nome: ")
       leia(nome)

       escreval("Digite o primeiro numero da multiplicaçâo: ")
       leia(numero1)
       escreval("você escrevel", numero1)

       escreval("Digite o segundo numero da multiplicaçâo: ")
       leia(numero2)
       escreval("você escrevel", numero2)

       limpaTela()
       resultado <- (numero1 * numero2)  /2

escreval (nome, " a area do triangulo é ", resultado, "²")

Fimalgoritmo