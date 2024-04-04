Algoritmo "La Familia"

Var
  idade : inteiro

Inicio

 escreval("Classificações de idade para competição de natação")

 escreval("Infantil A = 5 a 7 anos")
 escreval("Infantil B = 8 a 11 anos")
 escreval("Juvenil A = 12 a 13 anos")
 escreval("Juvenil B = 14 a 17 anos")
 escreval("Adultos = Maiores de 18 anos")
 escreval("Quantos anos você tem?")

 leia(idade)
 
 escolha(idade)

 se (idade >= 5) e (idade <= 7) entao
   escreval ("Sua categoria é a Infantil A")
     senao
          se (idade >= 8) e (idade <= 11) entao
   escreval ("Sua categoria é a Infantil B")
     senao
          se (idade >= 12) e (idade <= 13) entao
  escreval("Você está no Juvenil A")
     senao
          se (idade >= 14) e (idade <= 17) entao
  escreval("Você está no Juvenil B")
     senao
          se (idade >= 18) entao
  escreval("Você está no Adultos")
     senao
          se (idade < 5) entao
  escreval("O participante não é apto para competição")
 fimse
 fimse
 fimse
 fimse
 fimse
 fimse
 
Fimalgoritmo