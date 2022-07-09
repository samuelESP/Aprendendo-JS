function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome : 'Samuel',
    idade: 20,
}

const pessoa2 = {
    nome : 'Carlos',
    idade: 30,
}

const pessoa3 = {
    nome : 'Mariana',
    idade: 18
}

console.log(calculaIdade.call(pessoa1, 20))
console.log(calculaIdade.apply(pessoa2, [10]))