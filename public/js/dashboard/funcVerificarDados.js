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
    atualizarGraficos()
}

//USAR SOMENTE SE O BANCO NÃO ESTIVER CONECTADO
function verificarDados() {
    // VERIFICAR MAQUINAS USO DE MAQUINAS
    //LEG PRESS
    if (totalUsos_100 == demandaMedia) {
        demanda_100 = 'Média' // TROCA VARIAVEL DEMANDA CRIADA EM dadosMaq.js
        total_usos_100.style.color = '#ff8c00' // MUDA A COR DO TEXTO TOTAL DE USO
        span_demanda_100.style.color = '#ff8c00' // MUDA A COR DO TEXTO DEMANDA DA MÁQUINA
        container_100.style.border = '3px solid #ff8c00' // MUDA A COR DA BORDA DA MÁQUINA
        span_demanda_100.innerHTML = demanda_100 // ATUALIZA O VALOR DA DEMANDA DA MÁQUINA
        leg_press_baixa.style.display = 'none' // OCULTA CARD COM BORDA VERDE NO CARROCEL
        leg_press_media.style.display = 'flex' // EXIBE CARD COM BORDA AMARELA NO CARROCEL
    }
    else if (totalUsos_100 == demandaAlta) {
        demanda_100 = 'Alta' // TROCA VARIAVEL DEMANDA CRIADA EM dadosMaq.js
        total_usos_100.style.color = 'red' // MUDA A COR DO TEXTO TOTAL DE USO
        span_demanda_100.style.color = 'red' // MUDA A COR DO TEXTO DEMANDA DA MÁQUINA
        container_100.style.border = '3px solid red' // MUDA A COR DA BORDA DA MÁQUINA
        span_demanda_100.innerHTML = demanda_100 // ATUALIZA O VALOR DA DEMANDA DA MÁQUINA
        leg_press_media.style.display = 'none' // OCULTA CARD COM BORDA AMARELA NO CARROCEL
        leg_press_alta.style.display = 'flex' // EXIBE CARD COM BORDA VERMELHA NO CARROCEL
    }

    // VERIFICAR MAQUINAS EM ALERTA NO GRÁFICO GERAL
    // MUDAR COR DOS NUMEROS NO CARD
    if (qtdDemandaMedia >= 1) {
        span_demanda_media.style.color = '#ff8c00'
    }
    else {
        span_demanda_media.style.color = 'green'
    }

    if (qtdDemandaAlta >= 1) {
        span_demanda_alta.style.color = 'red'
    }
    else {
        span_demanda_alta.style.color = 'green'
    }
    // LEG PRESS
    if (totalUsos_100 == demandaMedia && validarContagemMedia_100) {
        validarContagemMedia_100 = false
        qtdDemandaMedia++ // AUMENTA A VARIÁVEL PARA EXIBIR NO GRÁFICO GERAL
    }
    if (totalUsos_100 == demandaAlta && validarContagemAlta_100) {
        validarContagemAlta_100 = false
        qtdDemandaMedia-- // DIMINUI A VARIÁVEL PARA EXIBIR NO GRÁFICO GERAL
        qtdDemandaAlta++ // AUMENTA A VARIÁVEL PARA EXIBIR NO GRÁFICO GERAL
    }
    if (totalUsos_103 == demandaMedia && validarContagemMedia_103) {
        validarContagemMedia_103 = false
        qtdDemandaMedia++ // AUMENTA A VARIÁVEL PARA EXIBIR NO GRÁFICO GERAL
    }
    if (totalUsos_103 == demandaAlta && validarContagemAlta_103) {
        validarContagemAlta_103 = false
        qtdDemandaMedia-- // DIMINUI A VARIÁVEL PARA EXIBIR NO GRÁFICO GERAL
        qtdDemandaAlta++ // AUMENTA A VARIÁVEL PARA EXIBIR NO GRÁFICO GERAL
    }

    // VERIFICAR TOTAL DE USOS POR CATEGORIA EM ALERTA NO GRÁFICO GERAL
    // PEITO
    if (totalUsosPeito == demandaMedia) {
        span_demanda_peito.style.color = '#ff8c00'
    }
    if (totalUsosPeito == demandaAlta) {
        span_demanda_peito.style.color = 'red'
    }

}