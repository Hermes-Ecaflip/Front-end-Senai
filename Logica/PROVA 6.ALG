Algoritmo "Prova 6"

Var

  nomes : vetor[1..10] de caractere
  nomeBusca : caractere
  encontrado : logico
  i : inteiro
  
Inicio
//ENTRADA DE DADOS DOS NOME DAS PESSOAS
para i <- 1 ate 10 faca
 escreval("Digite o nome da pessoa ",i,":")
 leia(nomes[i])
fimpara

//BUSCAR UM DOS NOMES DA LISTA
escreval("Digite um nome para buscar:")
 leia(nomeBusca)

encontrado <- falso

//SISTEMA QUE OLHARA SE O NOME DIGITADO ESTA NA LISTA
para i <- 1 ate 10 faca
se (nomes[i] = nomeBusca) entao
 encontrado <- verdadeiro
 interrompa
fimse
fimpara

//RESULTADO QUE LHE DARÁ A INFORMAÇÃO SE ACHOU O NOME OU NÃO
se (encontrado) entao
 escreval("ACHEI =D")
senao
 escreval("NÂO ACHEI =(")
fimse
Fimalgoritmo