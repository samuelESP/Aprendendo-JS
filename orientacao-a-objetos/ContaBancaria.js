class ContaBancaria {
    // Sempre que a gente vai colocar os parâmetros do que vai passar para essa classe, começa-se com o constructor(...)
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
		this.numero = numero;
		this.tipo = tipo;
		this._saldo = 0;
        //Esses this estão se referem ao objeto(ContaBancaria);
    }//Sempre que a gente for construir um getter e um setter geralmente se coloca uma underline("_") na frente, para que a nossa função get e set tenha o nome "Saldo", mas a nossa propriedade não.
    get saldo() {
        return this._saldo;
    }
    
    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) {
			return console.log('Saque negado; saldo insuficiente!');
		}

		this._saldo = this._saldo - valor;
		return this._saldo;
    }
    
    depositar(valor) {
		this._saldo = this._saldo + valor;
		return this._saldo;
	}
}


class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito
    }
    
    get cartaoCredito () {
        return this._cartaoCredito;
    }

    set cartaoCredito (valor) {
        this.cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero,) {
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero,) {
        super(agencia, numero);
        this.tipo = 'universitario'
    }

    sacar(valor){
        if(valor > 500) {
            return 'Operacao negada!'
        }

        this._saldo= this._saldo - valor;
    }
}