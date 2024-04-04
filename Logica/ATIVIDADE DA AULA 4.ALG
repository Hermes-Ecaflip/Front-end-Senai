Algoritmo "Atividade da Aula 4"

Var
contador, somatotal, numero : inteiro


Inicio
escreval("Insira os 10 números a serem somados")

contador <- 1

enquanto (contador <= 10) faca
  escreval("Digite o ",contador," ° :")
  leia(numero)
  somatotal <- somatotal + numero
  contador <- contador + 1
fimEnquanto

limpaTela()
escreval("A soma dos números é de : ",somatotal)





Fimalgoritmo