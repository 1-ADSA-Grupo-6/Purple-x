function carregarCarrocel() {

    carrocel.innerHTML += `
    <div id="0" class="div_carrocel" onclick="mostrarMaquinas()">
        <div class="titulo_carrocel">
            <span>Todas Máquinas</span>
        </div>
    </div>`

    for (let index = 0; index < maquinas.length; index++) {
        const idMaquina = maquinas[index].idAparelho
        const nomeMaquina = maquinas[index].nome
        let NomeMaquinaFormatado = nomeMaquina

        if (nomeMaquina.length > 15) {
            NomeMaquinaFormatado = `${nomeMaquina.split(' ')[0]} <br>${nomeMaquina.split(' ')[1]}`
        }

        carrocel.innerHTML += `
        <div id="${idMaquina}" class="div_carrocel" onclick="mostrarMaquinas()">
            <div class="titulo_carrocel">
                <span>${NomeMaquinaFormatado}</span>
            </div>
        </div>`
    }
    carregarMaquinas()
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