function somaNumeros(arr){
    return arr.reduce(function(prev, current) {
        return prev + current;
    }, 0) //Esse '0' não é obrigatório colocar, pois, se eu deixar sem nada vai contar como se fosse '0' mesmo assim; Ele só foi colocado para fins didáticos de identificar o 'initialValue'.
}

const array = [1,2];
console.log(somaNumeros(array));

