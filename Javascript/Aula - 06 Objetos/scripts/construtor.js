class ClienteVip {
    constructor(nomeP,cpfP,PagamentosP){
        // obs = _atributos -> significa que o valor não pode ser alterado manualmente, apenas metodos poderão altera-lo
        this.nome = nomeP;
        this.saldo = 0;
        this.cpf = cpfP;
        this.pagamentos = PagamentosP;
    }
        sacar(valor){
            if(this.saldo < valor){
                return `operação não autorizada!`
            }else{
                this.saldo -= valor
                return `O saque' do valor R$ ${valor} foi efetuado
                com sucesso!`
            }
    }
    depositar(valor){
        if(valor <= 0){
            return `Operação não autorizada!`
        }else{
            this.saldo += valor
            return `O deposito do valor R$ ${valor} foi efetudado com sucesso!`
        }
    }
    verificarSaldo(){
        return this.saldo
    }

}

var vip1 = new ClienteVip("DaVinci",999999,["Pix"])
var vip2 = new ClienteVip("Alessandra",888888,["Pix","Cartão"])