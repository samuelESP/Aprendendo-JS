const getAdimins = (Map) => {
    let admins = [];

    for([key, value] of  Map) { //Para 'Key' e 'Value' de 'map' faça...
        if(value === 'ADMIN') {
            admins.push(key)
        }
    }
    return admins;
};

const myMap = new Map();

myMap.set('Samuel', 'ADMIN');
myMap.set('Carlos', 'USER');
myMap.set('George','ADMIN');
myMap.set('Maria', 'USER');
myMap.set('Lucas','USER');
myMap.set('Stephany','ADMIN');



console.log(getAdimins(myMap));