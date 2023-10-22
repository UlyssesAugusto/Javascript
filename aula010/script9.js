let fruits = ["Maça", "Uva", "Laranja", "Banana", "Uva"];

let ok = fruits.every((value) => {
    return value.length > 3;
});

if (ok) {
    console.log("Todos são maior que 3.");
} else {
    console.log("Todos não são maiores que 3");
}

// Every é todos os itens
// Some é quando um só é satisfatorio
