class Conta {
    numero: string;
    saldo: number;
    constructor(numero: string, saldo: number=0) {
        this.saldo = saldo;
        this.numero = numero;
    }

    debitar(valor:number){
        if (this.saldo >= valor){
            this.saldo -= valor;
        }
    }

    creditar(valor:number){
        this.saldo += valor;
    }

    transferir(destino:Conta, valor:number){
        this.debitar(valor);
        destino.creditar(valor);
    }



}
