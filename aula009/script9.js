let personagem = {
    nome: "Ulysses",
    idade: 90,
    pais: "Brasil",
    olhos: ["Preto", "Branco"],
    atributos: {
        forca: 20,
        magia: 15,
        stamina: 10
    }
}

personagem.nome = "Pedro"
personagem.atributos.forca +=5
personagem.olhos.push("Verde")

console.log(personagem)