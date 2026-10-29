let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let codigoSecreto = gerarCodigoAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h2', 'Tente adivinhar o código secreto!');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function gerarCodigoAleatorio() {
    let codigoEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(codigoEscolhido)) {
        return gerarCodigoAleatorio();
    } else {
        listaDeNumerosSorteados.push(codigoEscolhido);
        console.log(listaDeNumerosSorteados);
        return codigoEscolhido;
    }
}

function verificarPalpite() {
    let palpite = document.querySelector('input').value;

    if (palpite == codigoSecreto) {
        exibirTextoNaTela('h2', 'Parabéns! Você acertou o código secreto!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você acertou o código secreto em ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (palpite > codigoSecreto) {
            exibirTextoNaTela('h2', 'O código secreto é menor.');
        } else {
            exibirTextoNaTela('h2', 'O código secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo() {
    let palpite = document.querySelector('input');
    palpite.value = '';
}

function reiniciarJogo() {
    codigoSecreto = gerarCodigoAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}