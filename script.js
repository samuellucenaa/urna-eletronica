let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let info = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let ladoDireito = document.querySelector('.d-1-direito');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;
let quadrado = '';

function comecarEtapa(){
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    for(let i = 0; i < etapa.numeros; i++){
        if(i === 0){
            numeroHtml += '<div class="quadrado pisca"></div>';
        } else{
            numeroHtml += '<div class="quadrado"></div>';
        }
    }

    seuVotoPara.style.display = 'none';
    info.innerHTML = '';
    ladoDireito.innerHTML = '';
    aviso.style.display = 'none';
    numeros.innerHTML = numeroHtml;
}

function atualizarInterface(){

}

function clicou(n){
    let elQuadrado = document.querySelector('.quadrado.pisca');
    if(elQuadrado !== null){
        elQuadrado.innerHTML = n;
        quadrado = `${quadrado}${n}`;

        elQuadrado.classList.remove('pisca');
        if(elQuadrado.nextElementSibling !== null){
            elQuadrado.nextElementSibling.classList.add('pisca');
        } else{
            atualizarInterface();
        }
    }
}

function branco(){

}

function corriga(){

}

function confirma(){

}

comecarEtapa();