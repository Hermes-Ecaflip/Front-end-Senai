Algoritmo "Revisao 5"

var

   usuario, senha : caractere

inicio
    escreval("Digite o nome de usuário: ")
    leia(usuario)

    escreval("Digite a senha: ")
    leia(senha)

//Verificar login
se (usuario = "ADM") e (senha = "ADM") entao
 Escreval("Login realizado com sucesso!")
Senão
 Escreval("Usuário ou senha incorretos. Tente novamente.")
FimSe

FimAlgoritmo
