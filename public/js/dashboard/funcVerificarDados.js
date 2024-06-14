let tempoAtivo = []
let tempoInativo = []
let TemHistorico = false
function calcularTempo() {
    for (let index = 0; index < capturas.length; index++) {
        if (index == maquinas.length) {
            TemHistorico = true
        }
        const idMaquina = capturas[index].idAparelho
        const capura = Number(capturas[index].registro)
        let tempoAntigo = 0
        if (capura == 1) {
            if (TemHistorico) {
                tempoAntigo = Number(tempoAtivo[idMaquina - 1].tempo)
            }

            const tempoAtualizado = tempoAntigo + 1
            tempoAtivo[idMaquina - 1].tempo = tempoAtualizado
        }
        else {
            if (TemHistorico) {
                tempoAntigo = Number(tempoInativo[idMaquina - 1].tempo)
            }

            const tempoAtualizado = tempoAntigo + 1
            tempoInativo[idMaquina - 1].tempo = tempoAtualizado
        }
    }
    carregarGraficos()
}

function atualizarTempo() {
    for (let index = 0; index < ultimasCapturas.length; index++) {
        const idMaquina = ultimasCapturas[index].idAparelho
        const capura = Number(ultimasCapturas[index].registro)

        if (capura == 1) {
            const tempoAntigo = Number(tempoAtivo[idMaquina - 1].tempo)
            const tempoAtualizado = tempoAntigo + 1
            tempoAtivo[idMaquina - 1].tempo = tempoAtualizado
        }
        else {
            const tempoAntigo = Number(tempoInativo[idMaquina - 1].tempo)
            const tempoAtualizado = tempoAntigo + 1
            tempoInativo[idMaquina - 1].tempo = tempoAtualizado
        }
    }
    verificarDados()
}

const alertasVermelho = []
const alertasLaranja = []
let qtdAlertasVermelho = 0
let qtdAlertasLaranja = 0
function verificarDados() {
    const demandaMedia = demanda[0].demandaMedia
    const demandaAlta = demanda[0].demandaAlta

    for (let index = 0; index < maquinas.length; index++) {
        const tempoAtivoMaquina = tempoAtivo[index].tempo
        const idMaquina = maquinas[index].idAparelho
        const cardCarrocel = document.getElementById(idMaquina)

        if (tempoAtivoMaquina >= demandaAlta) {
            let primieroAlertaVermelho = true

            for (let index = 0; index < alertasVermelho.length; index++) {
                if (alertasVermelho[index] == idMaquina) {
                    primieroAlertaVermelho = false
                }
            }

            if (primieroAlertaVermelho) {
                alertasVermelho.push(idMaquina)
                qtdAlertasVermelho++
                qtdAlertasLaranja = qtdAlertasLaranja - 1
                const nomeMaquina = maquinas[index].nome
                const spanDemanda = document.getElementById(`span_demanda_${idMaquina}`)
                const alertaLaranja = document.getElementById(`alerta_laranja_${idMaquina}`)
                const spanAlterar = document.getElementById(`tempo_ativo_${idMaquina}`)
                cardCarrocel.classList.add('alta')
                cardCarrocel.classList.remove('media')
                spanDemanda.style.color = 'red'
                spanAlterar.style.color = 'red'
                spanDemanda.innerHTML = 'Alta'
                alertaLaranja.style.display = 'none'
                circulo_alerta.style.backgroundColor = 'red'
                span_demanda_alta.style.color = 'red'
                span_demanda_media.innerHTML = qtdAlertasLaranja
                span_demanda_alta.innerHTML = qtdAlertasVermelho
                alerta.innerHTML += `
                <div id="alerta_vermelho_${idMaquina}" class="container_alerta aviso_vermelho">
                    <div class="centralizar_alertas">
                        <img src="../assets/dashboard/aviso_vermelho.png" class="ajustarImgAlerta">
                        <div class="div_mensagem">
                            <p>A máquina ${nomeMaquina} está com a demanda alta</p>
                        </div>
                    </div>
                </div>`
                alerta.style.display = 'flex'
            }
        }
        else if (tempoAtivoMaquina >= demandaMedia) {
            let primieroAlertaLaranja = true

            for (let index = 0; index < alertasLaranja.length; index++) {
                if (alertasLaranja[index] == idMaquina) {
                    primieroAlertaLaranja = false
                }
            }

            if (primieroAlertaLaranja) {
                alertasLaranja.push(idMaquina)
                qtdAlertasLaranja++
                const nomeMaquina = maquinas[index].nome
                const spanDemanda = document.getElementById(`span_demanda_${idMaquina}`)
                const spanAlterar = document.getElementById(`tempo_ativo_${idMaquina}`)
                cardCarrocel.classList.add('media')
                spanDemanda.style.color = '#ff8c00'
                spanAlterar.style.color = '#ff8c00'
                spanDemanda.innerHTML = 'Média'
                div_circulo.style.display = 'flex'
                circulo_alerta.style.backgroundColor = '#ff8c00'
                span_demanda_media.style.color = '#ff8c00'
                span_demanda_media.innerHTML = qtdAlertasLaranja
                alerta.innerHTML += `
                <div id="alerta_laranja_${idMaquina}" class="container_alerta aviso_laranja">
                    <div class="centralizar_alertas">
                        <img src="../assets/dashboard/aviso_laranja.png" class="ajustarImgAlerta">
                        <div class="div_mensagem">
                            <p>A máquina ${nomeMaquina} está com a demanda média</p>
                        </div>
                    </div>
                </div>`
                alerta_texto.style.display = 'none'
                alerta.style.display = 'flex'
            }
        }
        else {
            cardCarrocel.classList.remove('media')
            cardCarrocel.classList.remove('alta')
        }
    }
    atualizarDados()
}

function atualizarDados() {
    const tempos = []
    let idMaquinaMaisUsada = ''
    let tempoMaquinaMaisUsada = 0
    let idMaquinaMenosUsada = ''
    let tempoMaquinaMenosUsada = 1000000000000000000000000

    for (let index = 0; index < maquinas.length; index++) {
        const idMaquina = maquinas[index].idAparelho
        const tempoAtivoMaquina = tempoAtivo[idMaquina - 1].tempo
        const tempoInativoMaquina = tempoInativo[idMaquina - 1].tempo
        const spanTempoAtivo = document.getElementById(`tempo_ativo_${idMaquina}`)
        const spanTempoInativo = document.getElementById(`tempo_inativo_${idMaquina}`)
        let horasAtivo = Math.floor(tempoAtivoMaquina / 3600)
        let minutosAtivo = Math.floor((tempoAtivoMaquina % 3600) / 60)
        let segundosAtivo = tempoAtivoMaquina % 60
        let horasInativo = Math.floor(tempoInativoMaquina / 3600)
        let minutosInativo = Math.floor((tempoInativoMaquina % 3600) / 60)
        let segundosInativo = tempoInativoMaquina % 60

        if (tempoAtivoMaquina >= tempoMaquinaMaisUsada) {
            idMaquinaMaisUsada = idMaquina
            tempoMaquinaMaisUsada = tempoAtivoMaquina
        }
        if (tempoAtivoMaquina <= tempoMaquinaMenosUsada) {
            idMaquinaMenosUsada = idMaquina
            tempoMaquinaMenosUsada = tempoAtivoMaquina
        }
        
        if (horasAtivo < 10) {
            horasAtivo = `0${horasAtivo}`
        }
        if (minutosAtivo < 10) {
            minutosAtivo = `0${minutosAtivo}`
        }
        if (segundosAtivo < 10) {
            segundosAtivo = `0${segundosAtivo}`
        }

        if (horasInativo < 10) {
            horasInativo = `0${horasInativo}`
        }
        if (minutosInativo < 10) {
            minutosInativo = `0${minutosInativo}`
        }
        if (segundosInativo < 10) {
            segundosInativo = `0${segundosInativo}`
        }

        tempos[index] = {
            idMaquina: idMaquina,
            tempoAtivo: `${horasAtivo}:${minutosAtivo}:${segundosAtivo}`
        }

        spanTempoAtivo.innerHTML = `${horasAtivo}:${minutosAtivo}:${segundosAtivo}`
        spanTempoInativo.innerHTML = `${horasInativo}:${minutosInativo}:${segundosInativo}`
    }
    const nomeMaquinaMaisUsada = maquinas[idMaquinaMaisUsada - 1].nome
    const nomeMaquinaMenosUsada = maquinas[idMaquinaMenosUsada - 1].nome

    span_nome_mais_usada.innerHTML = nomeMaquinaMaisUsada
    span_tempo_mais_usada.innerHTML = tempos[idMaquinaMaisUsada - 1].tempoAtivo
    span_nome_menos_usada.innerHTML = nomeMaquinaMenosUsada
    span_tempo_menos_usada.innerHTML = tempos[idMaquinaMenosUsada - 1].tempoAtivo

    atualizarGraficos()
}