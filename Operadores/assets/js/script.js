function comparaNum(num1, num2) {
    const PrimeiraFrase = criaPrimeiraFrase(num1 , num2);
    const SegundaFrase = criaSegundaFrase(num1 , num2);

    return `${PrimeiraFrase} ${SegundaFrase}`
}

function criaPrimeiraFrase(num1, num2) {
    let PrimeiraFrase = `os números ${num1} e ${num2}`;
    let nao = 'não';

    if (num1 === num2) {
    nao = '';
    }
    
    return `${PrimeiraFrase} ${nao} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2 ;
    let dez = 'menor';
    let vinte = 'menor';

    if (soma > 10) {
        dez = 'maior';
    }

    if(soma > 20) {
        vinte = 'maior';
    }

    return ` Sua soma é de ${soma}, que é ${dez} que 10 e ${vinte} do que 20.`
}

console.log(comparaNum(10,5));

