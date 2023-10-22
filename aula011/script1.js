function clicou() {
    const teste = document.querySelector("#teste")
    const ul  = teste.querySelector("ul")

  //  ul.innerHTML = "<li>Item alterado</li>" altera tudo do item

    ul.children[0].innerHTML = "Item alterado"
}