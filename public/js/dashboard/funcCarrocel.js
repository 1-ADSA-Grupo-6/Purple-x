function carregarCarrocel() {
carrocel.innerHTML += `
    <div id="card_todas_maq" class="div_carrocel" onclick="mostrarTodasMaquinas()">
        <div class="titulo_carrocel">
            <span>Todas Máquinas</span>
        </div>
    </div>`

    for (let index = 0; index < maquinas.length; index++) {
        carrocel.innerHTML += `
        <div id="card_${maquinas[index].idAparelho}" class="div_carrocel" onclick="selecionarMaquinas()">
            <div class="titulo_carrocel">
                <span>${maquinas[index].nome}</span>
            </div>
        </div>`
        
    }
}

// FUNÇÃO SCROLL CARROCEL
let posicaoScroll = 0;

function scrollCarrocel(direction) {
    const tamanhoScroll = carrocel.scrollWidth - carrocel.clientWidth;

    if (direction === 'left' && posicaoScroll > 0) {
        posicaoScroll -= 200;
    }
    else if (direction === 'right' && posicaoScroll < tamanhoScroll) {
        posicaoScroll += 200;
    }

    // ANIMAÇÃO SCROLL SUAVE
    carrocel.scrollTo({
        top: 0,
        left: posicaoScroll,
        behavior: 'smooth'
    });
}