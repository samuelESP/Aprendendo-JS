const numb = [1,2,3,4,5,6,7,8,9,10];

function filtraParesResumido(arr) {
    return arr.filter((item) => item % 2 == 0);
}




function filtraParesEstendido(array){
    return array.filter(callBack);
}
function callBack(item){
    return item % 2 == 0;
}




console.log(filtraParesResumido(numb))
console.log(filtraParesEstendido(numb))