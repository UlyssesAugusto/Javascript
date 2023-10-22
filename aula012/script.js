class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let p1 = new Person("José", 88);
let p2 = new Person("Maria", 98);
let p3 = new Person("Ulysses", 78);

console.log(`P1: ${p1.name} tem ${p1.age} anos.`);
console.log(`P2: ${p2.name} tem ${p2.age} anos.`);
console.log(`P3: ${p3.name} tem ${p3.age} anos.`);