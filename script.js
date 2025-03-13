let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let info = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let ladoDireito = document.querySelector('.d-1-direito');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;

function comecarEtapa(){
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    for(let i = 0; i < etapa.numeros; i++){
        numeroHtml += '<div class="quadrado pisca"></div>';
    }

    seuVotoPara.style.display = 'none';
    info.innerHTML = '';
    ladoDireito.innerHTML = '';
    aviso.style.display = 'none';
    numeros.innerHTML = numeroHtml;
}

function clicou(n){

}

function branco(){

}

function corriga(){

}

function confirma(){

}

comecarEtapa();