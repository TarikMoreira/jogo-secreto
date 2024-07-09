/*let titulo = document.querySelector("h1");
titulo.innerHTML = "Jogo do número secreto!";
let paragrafo = document.querySelector("p");
paragrafo.innerHTML = "Escolha um número entre 1 e 10:";*/
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroSecreto();

let tentativas = 1;

function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do número secreto!");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10.");
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector(`input`).value;
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativa = `Parabéns, você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`
    if(chute==numeroSecreto){
        exibirTextoNaTela("h1", "Acertou!");
        exibirTextoNaTela("p", mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela("p", "O número secreto é menor.");
        }else{
            exibirTextoNaTela("p", "O número secreto é maior.");
        }tentativas++;
        limparCampo();
    }
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}



function gerarNumeroSecreto(){
    let numeroEscolhido =  parseInt(Math.random()*numeroLimite+1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeDeElementosNaLista == numeroLimite)
        listaDeNumerosSorteados = [];

        if(listaDeNumerosSorteados.includes(numeroEscolhido)){
            return gerarNumeroSecreto();
        }else{
            listaDeNumerosSorteados.push(numeroEscolhido);
            console.log(listaDeNumerosSorteados);
            return numeroEscolhido;
        }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroSecreto();
    tentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
 