let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let info = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let ladoDireito = document.querySelector('.d-1-direito');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;
let quadrado = '';
let vBranco = false;

function comecarEtapa(){
    let etapa = etapas[etapaAtual];
    quadrado = '';
    let numeroHtml = '';
    vBranco = false;

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
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === quadrado){
            return true;
        } else{
            return false;
        }
    })

    if(candidato.length > 0){
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        info.innerHTML = `Nome: ${candidato.nome} <br> Partido: ${candidato.partido}`;

        let fotosHtml = '';
        for(let i in candidato.fotos){
            fotosHtml += `<div class="d-1-imagem"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;
        }

        ladoDireito.innerHTML = fotosHtml;

    } else{
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        info.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';
    }
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
    quadrado = '';
    vBranco = true;
    seuVotoPara.style.display = 'block';
    aviso.style.display = 'block';
    info.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>';
    numeros.innerHTML = '';
}

function corriga(){
    comecarEtapa();
}

function confirma(){
    let etapa = etapas[etapaAtual];
    let votoConfirmado = false;

    if(vBranco === true){
        votoConfirmado = true;
    } else if(quadrado.length === etapa.numeros){
        votoConfirmado = true;
    }

    if(votoConfirmado){
        etapaAtual++;
        if(etapaAtual < etapas.length){
            comecarEtapa();
        } else {
            document.querySelector('.tela').innerHTML = '<div class="aviso--grande pisca">FIM</div>';
        }
    } else{
        seuVotoPara.style.display = 'none';
        info.innerHTML = '';
        ladoDireito.innerHTML = '';
        aviso.style.display = 'none';
    }
}

comecarEtapa();