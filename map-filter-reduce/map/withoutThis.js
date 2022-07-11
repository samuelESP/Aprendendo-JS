const array = [1,3,6,7,8,10]

console.log(array.map((item) => item * 2))


function semThis(arr) {
    return arr.map(function(item){
        return item * 2;
    });
}
console.log(semThis(array));
