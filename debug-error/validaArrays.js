function validaNum (arr, num) {
    try {
        if(!arr && !num) 
            throw new ReferenceError('Envie os parâmetros');

        if(typeof arr !== 'object') 
            throw new TypeError('Array precisa ser do tipo object');
    
        if(typeof num !== 'number') 
            throw new TypeError('Envie um elemento do tipo número');
    
        if(arr.length !== num) 
            throw new RangeError('Tamanho do array inválido!');
    
        return arr;
    } catch (e) {
        if(e instanceof ReferenceError){
            console.log(e.message);
            console.log('Esse erro é um ReferenceError!')
        }else if(e instanceof TypeError){
            console.log(e.message);
            console.log("Esse erro é um TypeError!");
        }else if(e instanceof RangeError){
            console.log(e.message);
            console.log("Esse erro é um RangerError!");
        }else{
            console.log('Outro tipo de erro!');
			console.log(e.stack);
        }
    }
}
console.log(validaNum());