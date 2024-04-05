Algoritmo "Prova 5"

Var

  V1, V2: vetor[1..5] de inteiro
  contador, i : inteiro

Inicio
//ENTRADA DE DADOS
contador <- 0

//VETOR DO V1
para i <- 1 ate 5 faca
 escreval("Digite o ",i,"º numero do vetor V1:")
 leia(V1[i])
fimpara

//VETOR DO V2
para i <- 1 ate 5 faca
 escreval("Digite o ",i, "°numero do vetor V2:")
 leia(V2[i])
fimpara

//O PROGRAMA VERÁ SE MESMOS NUMEROS NAS MESMAS POSIÇÔES
para i <- 1 ate 5 faca
 se V1[i] = V2[i] entao
contador <- contador + 1
fimse
fimpara

//RESULTADO
escreval("Quantidade de vezes que V1 e V2 tem os mesmos numeros nas mesmas posições: ",contador)

Fimalgoritmo