Algoritmo "REVISÂO 6"

Var
   nomeUsuario: vetor[1..3] de caractere
   senhaUsuario: vetor[1..3] de caractere
   i: inteiro

Inicio

Para i de 1 até 3 Faça
 Escreval("Digite o nome do usuário ", i, ": ")
  Leia(nomeUsuario[i])

Escreval("Digite a senha do usuário ", i, ": ")
  Leia(senhaUsuario[i])
FimPara


Escreval("Usuários cadastrados:")
 Para i de 1 até 3 Faça
 Escreval("Usuário ", i, ": ", nomeUsuario[i])
 Escreval(" - Senha: ", senhaUsuario[i])
FimPara

FimAlgoritmo
