class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    
    sacar(valor){
        if(valor >this._saldo){
            return 'Operação negada';
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        this._saldo = valor;
    }

}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this.cartaoCredito = cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }
   
}
    class ContaPoupanca extends ContaBancaria {
        constructor(agencia, numero){
            super(agencia, numero);
            this.tipo = 'poupança';
            
        } 
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitaria';
    } 

    sacar(valor){
        if(valor > 500) {
            return 'Operação negada';
        }
        this._saldo = this._saldo - valor
    }
}
