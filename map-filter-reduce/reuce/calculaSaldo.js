const lista = [
    {
        nome : 'sabao',
        preco: 3,
    },
    {
        nome: 'escova',
        preco: 7,
    },
    {
        nome: 'algodao',
        preco: 5,
    },
    {
        nome: 'papel-higiênico',
        preco: 15
    },
];

const SALDO_DISPONIVEL = 50;

function calculaSaldo(SALDO_DISPONIVEL,lista) {
    return lista.reduce(function(prev, current){
        return prev - current.preco;
    }, SALDO_DISPONIVEL); // O primeiro prev vai ser 'SALDO_DISPONIVEL'(50)
} 

console.log(calculaSaldo(SALDO_DISPONIVEL, lista));