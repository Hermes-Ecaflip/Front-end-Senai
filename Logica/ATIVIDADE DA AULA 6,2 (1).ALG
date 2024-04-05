Algoritmo "Atividade da Aula 6,2"

Var
num, num2, negativo : inteiro

Inicio
escreval("digite 10 numeiro que direi quantos deles é negativo.")

num2 <- 1
repita
 escreval("Digite o ",num2," º")
 leia(num)
 
 se(num < 0) entao
  negativo <- negativo +1
 fimse
 
  num2 <- num2 +1
ate num2 > 10

limpatela()
escreval("são ",negativo," os numeros negativo!")






Fimalgoritmo