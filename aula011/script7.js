function apertou() {
    console.log("Apertou!")
}

function segurou() {
    console.log("Segurou!") 
}

function soltou(event) {
    console.log("Soltou!")
}
const input = document.querySelector("input")
input.addEventListener("keyup", soltou)