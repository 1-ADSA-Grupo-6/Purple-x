let labels = []
let graficos = []
let dataGraficoGeral = []
let graficoGeral = ''
function carregarGraficos() {
    const momento = capturas[0].momento
    labels.push(momento)

    for(let contador = 0; contador < maquinas.length; contador++){
        const nomeMaquina = maquinas[contador].nome
        const dataMaquina = tempoAtivo[contador].tempo

        dataGraficoGeral[contador] = {
            label: [nomeMaquina],
            data: [dataMaquina],
            borderWidth: 4,
        }
    }

    graficoGeral = new Chart(grafico_geral, {
        type: 'line',
        data: {
            labels: labels,
            datasets: dataGraficoGeral
        }
    })

    for (let index = 0; index < maquinas.length; index++) {
        const nomeMaquina = maquinas[index].nome
        const idMaquina = maquinas[index].idAparelho
        const dataGraficoMaquina = dataGraficoGeral[index].data[0]

        const idGrafico = `grafico_${idMaquina}`

        graficos[index] = new Chart(idGrafico, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: [nomeMaquina],
                    data: [dataGraficoMaquina],
                    borderWidth: 4,
                }]
            }
        })
    }
    console.log('Graficos:', graficos)

    setTimeout(function () {
        setInterval(function () {
            obterUltimasCapturas()
        }, tempoSetInterval)
    }, tempoSetInterval);
}

function atualizarGraficos() {
    const momento = ultimasCapturas[0].momento
    labels.push(momento)

    // if (labels.length > 10) {
    //     labels.splice(0, 1)
    // }
    for (let index = 0; index < ultimasCapturas.length; index++) {
        const posicaoMaquina = Number(ultimasCapturas[index].idAparelho) - 1
        const tempoAtualizado = [tempoAtivo[posicaoMaquina].tempo]
        graficoGeral.data.datasets[posicaoMaquina].data.push(tempoAtualizado)
        graficos[posicaoMaquina].data.datasets[0].data.push(tempoAtualizado)
        graficos[posicaoMaquina].update()
        graficoGeral.update()
    }
}