let array = [30, 30, 40, 5, 223, 2049, 3034, 5];
const arr = new Set(array);

arr.add(999);
console.log(arr);
console.log(arr.has(5));
console.log(arr.has(999));
console.log(arr.has(10));
console.log(array.length, arr.size);



function uniqueElement() {
    let unico = new Set(array);
    return [...unico];// ->Se não usa-se '...' Ele lidaria como se fosse um só o resultado --> { 30, 40, 5, 223, 2049, 3034 }
}

console.log(uniqueElement(array))