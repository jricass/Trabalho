var PlayerChoice

function Choice(Choice) {
    const resultado = document.getElementById("resultado")

    EscolhaJogador = Choice

    if(Choice == 0) {
        resultado.innerText = "Sua Escolha: Pedra"
    } else if(Choice == 1) {
        resultado.innerText = "Sua Escolha: Papel"
    } else {
        resultado.innerText = "Sua Escolha: Tesoura"
    }
}

function jogo() {
    let EscolhaBot = parseInt(Math.random()*3)
    alert(EscolhaBot)

    let resultado = ""

    if(EscolhaBot == 0) {
        resultado = "Pedra"
    } else if(EscolhaBot == 1) {
        resultado = "Papel"
    } else {
        resultado = "Tesoura"
    }

    if(EscolhaJogador == null) {
        alert('Escolha Uma Opção')
    }

    if((EscolhaBot == 0 && EscolhaJogador == 1) || (EscolhaBot == 2 && EscolhaJogador == 0) || (EscolhaBot == 1 && EscolhaJogador == 2)) {
        alert('Você Venceu!!! Escolha do Bot: ' + resultado)
    } else if(EscolhaBot == EscolhaJogador) {
        alert('Empate!!!')
    } else {
        alert('Você Perdeu!!! Escolha do Bot: ' + resultado)
    }
}