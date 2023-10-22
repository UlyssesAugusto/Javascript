let fruits = ["Maça", "Uva", "Laranja", "Banana"];

fruits.sort();
fruits.reverse()

console.log(fruits)

let cars = [
    {brand: "Fiat", year: 2023},
    {brand: "Bmw", year: 2018},
    {brand: "Ferrari", year: 2022}
]

cars.sort((a, b) => a.year - b.year);

/*
cars.sort((a, b) => {
    if(a.year > b.year) {
        return 1;
    } else if (a.year < b.year) {
        return -1;
    } else {
        return 0;
    }
});
*/

console.log(cars);