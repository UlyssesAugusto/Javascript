function clicou() {
    const teste = document.querySelector("#teste")
    const ul  = teste.querySelector("ul")

    ul.innerHTML += "<li>Item adicionado!</li>"


  /*
    let newLi = document.createElement("li")
    newLi.innerHTML = "Item adicionado!"

    ul.appendChild(newLi)

    */
}

// appendChild adiciona no final
// prepend adiciona no inicio