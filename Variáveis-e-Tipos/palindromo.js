
verificaPalidromo('ovo')

function verificaPalidromo (string) {
    if (!string) return 'não existe';
    
    return string === string.split('').reverse().join("");    
}
console.log(verificaPalidromo('ana'))

//Se a 'String' for diferente de 'true' ele vai terminar a função sem dar uma resposta. 
//Else, 'string.split('')' vai separar a string por letra; 
//'.reverse()' a partir do momento que ela foi separada por letra ela passa a ser um 'array', possibilitando o uso das propriedade do array, então vamos usar o '.reverse()' para inverter a ordem do 'array';
//'.join("")' vai ser usado para juntar todas as letras, possibilitando assim ter uma visão se a a frase é um palídromo ou não;
//E Em seguida vamos confirmar se a string revertida é igual a string que recebeu.


function verificaPalidromo2(string) {
    if(!string) return 'não existe';

    for(let i = 0; i < string.length/2; i++) { 
        //'índice começa no 0; Enquanto índice(i) for menor que o comprimento da string (dividido por dois, pois estamos verificando 2 caracteres ao mesmo tempo)incremente um ao indice seguinte"
        if(string[i] !== string[string.length -1 -i]) {
            return false;
        //Para acessar a caractere a gente precisa colocar entre []; Se a caractere que o 'i' apontar, for diferente da caractere que a strig está apontando(apontando com o lenght reduzindo -1 e reduzindo o valor numero de 'i') retornara falso; 
        }
    }

    return true;//Caso contrário o retorno sera verdadeiro

}
console.log(verificaPalidromo2('arara'))