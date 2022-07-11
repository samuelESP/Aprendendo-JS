const hotDog ={
    value : 2,
}

const salad = {
    value: 4,
}

function mapWithThis(array, thisArg) {
    return array.map(function(item) {
        return item * this.value; //this.value aponta para hotDog e salad, que são substituidos no lugar de thisArg.
    }, thisArg)
}

const nums = [1,2]

console.log(mapWithThis(nums, hotDog))
console.log(mapWithThis(nums, salad))
