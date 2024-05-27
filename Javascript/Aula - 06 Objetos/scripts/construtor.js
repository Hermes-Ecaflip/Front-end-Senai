class ClienteVip {
    constructor(nomeP,cpfP,PagamentosP){
        // obs = _atributos -> significa que o valor não pode ser alterado manualmente, apenas metodos poderão altera-lo
        this.nome = nomeP;
        this.saldo = 0;
        this.cpf = cpfP;
        this.pagamentos = PagamentosP;
    }
        sacar(valor){

    }
    depositar(valor){

    }

}

var vip1 = new ClienteVip("DaVinci",999999,["Pix"])
var vip2 = new ClienteVip("Alessandra",888888,["Pix","Cartão"])