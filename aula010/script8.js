let fruits = ["Maça", "Uva", "Laranja", "Banana"];

let bigFruits = fruits.filter((item) => {
    if(item.length > 4) {
        return true;
    } else {
        return false;
    }
});

console.log(bigFruits)