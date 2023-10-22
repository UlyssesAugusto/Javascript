class Person {

    steps = 0;

    constructor(name, age) {
        this.name = name;
    }

    takeAStep() {
        this.steps++;
    }
}

let p1 = new Person("José");
let p2 = new Person("Maria");
let p3 = new Person("Ulysses");

p1.takeAStep();
p1.takeAStep();

console.log(`Passos de ${p1.name}: ${p1.steps}.`);
console.log(`Passos de ${p2.name}: ${p2.steps}.`);