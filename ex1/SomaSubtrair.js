function somar(){
    var valor
    valor = Number(document.getElementById("num").innerText)
    document.getElementById("num").innerText = Number(valor) + 1
}

function subtrair(){
    var valor
    valor = Number(document.getElementById("num").innerText)
    document.getElementById("num").innerText = Number(valor) - 1
}