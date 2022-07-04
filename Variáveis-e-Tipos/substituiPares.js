function substituicaoPares(array) {
    if (!array) return -1;
    if (!array.length) return -1;

    for(let i = 0; i < array.length; i++){
//'i' vai começar do zero, e a medida que ele for dado menor que o '.length' do nosso array, ele vai incrementar mais um; Ou seja se eu tenho um array [1, 20] e ele tiver no 0(corresponde a 1) no futuro ele vai passar 1(corresponde ao 20).

        if(array[i] === 0) {
            console.log('Você já é zero!!')
//Se o componente que o nosso 'i' apontar for igual a zero, ele vai retornar "Você já é zero"  

        }else if (array[i] % 2 === 0) {
        console.log(`Substituindo ${array[i]} por 0...`)
        array[i] = 0;
//caso contrário ele vai confirmar se ele é divisivel por 2, se for true ele vai ser um número par, sendo assim substituido pelo número zero;

        }
    }
    return array;
}

let arr = [1, 3, 0, 6, 80, 33, 23, 90];
console.log(substituicaoPares(arr));