function clicou() {
    const teste = document.querySelector("#teste")
    const ul  = teste.querySelector("ul")

    const newButton = document.createElement("Button")
    newButton.innerHTML = "Botão"

    ul.after(newButton)
}