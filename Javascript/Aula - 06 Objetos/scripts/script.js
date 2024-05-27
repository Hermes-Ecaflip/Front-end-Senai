// var clienteNome = "Leo";
// var clienteConta = 1;
// var clienteSaldo = 0;
// var clientePagamentos = ["Pix","credito"];
// var ClienteCpf = 999999;
// var clieteRg = 888888;

// var Cliente1 = ["nome","conta","pagamneto"]

// POD (Programação orientada a objeto)
class Cliente {
    // atributo / propriedade = são caracteristicas do objeto
    nome;
    conta;
    saldo;
    pagamentos;
    cpf;
    rg;
    dataDeNascimento;
    sacar(valor){
        this.saldo -= valor
        // return = retorna um valor assim que o metodo for chamado
        return `O valor de R$ ${valor} foi sacado com sucesso!`
    }
    depositar(valor){
        this.saldo += valor
        return `O valor de R$ ${valor} foi depositado com sucesso!`
    }
}

// new ClassNome = Um novo objeto baseado pelo molde, o class
var cliente1 = new Cliente;
cliente1.nome = "Leo"
cliente1.conta = 1;
cliente1.pagamentos = ["Pix","Débito"]
cliente1.cpf = 999999;
cliente1.rg = 888888;
cliente1.dataDeNascimento = "13/02/2001"

var cliente2 = new Cliente;