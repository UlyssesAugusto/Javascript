let pessoa = {
    nome: "Ulysses",
    sobrenome: "Augusto",
    idade: 90,
    nomeCompleto: function() {
        return this.nome + " " + this.sobrenome;
    }
}

console.log(pessoa.nomeCompleto())