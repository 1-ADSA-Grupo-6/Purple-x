let labels = []
let graficos = []
let dataGraficoGeral = []
let graficoGeral = ''
function carregarGraficos() {
    const momento = new Date(capturas[0].momento)
    let hora = momento.getUTCHours() - 3
    let minutos = momento.getUTCMinutes()
    let segundos = momento.getUTCSeconds()

    if (hora < 10) {
        hora = `0${hora}`
    }
    if (minutos < 10) {
        minutos = `0${minutos}`
    }
    if (segundos < 10) {
        segundos = `0${segundos}`
    }
    const momentoFormatado = `${hora}:${minutos}:${segundos}`
    labels.push(momentoFormatado)

    for (let contador = 0; contador < maquinas.length; contador++) {
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
        obterUltimasCapturas();
        setInterval(function () {
            obterUltimasCapturas()
        }, tempoSetInterval)
    }, tempoSetInterval);
}

function atualizarGraficos() {
    const momento = new Date(ultimasCapturas[0].momento);
    let hora = momento.getUTCHours() - 3;
    let minutos = momento.getUTCMinutes();
    let segundos = momento.getUTCSeconds();

    if (hora < 10) {
        hora = `0${hora}`;
    }
    if (minutos < 10) {
        minutos = `0${minutos}`;
    }
    if (segundos < 10) {
        segundos = `0${segundos}`;
    }
    const momentoFormatado = `${hora}:${minutos}:${segundos}`;
    labels.push(momentoFormatado);

    for (let index = 0; index < ultimasCapturas.length; index++) {
        const posicaoMaquina = Number(ultimasCapturas[index].idAparelho) - 1
        const tempoAtualizado = tempoAtivo[posicaoMaquina].tempo

        graficoGeral.data.datasets[posicaoMaquina].data.push(tempoAtualizado)
        graficos[posicaoMaquina].data.datasets[0].data.push(tempoAtualizado)
        graficos[posicaoMaquina].update();
        graficoGeral.update();
    }

    if (labels.length >= 10) {
        labels.splice(0, 1);
        for (let index = 0; index < graficos.length; index++) {
            graficos[index].data.datasets[0].data.splice(0, 1);
        }

        for (let index = 0; index < dataGraficoGeral.length; index++) {
            dataGraficoGeral[index].data.splice(0, 1);
        }

        for (let index = 0; index < graficos.length; index++) {
            graficos[index].update();
        }
        graficoGeral.update();
    }
}
