function carregarGraficos() {

    // FUNÇÃO GERAR NÚMEROS ALEATÓRIOS
    let labels = []
    let data_100 = []
    let data_101 = []
    let data_102 = []
    let data_103 = []
    let data_demandaMedia = []
    let data_demandaAlta = []

    function gerarNumeroAleatorio() {

        // GERA NÚMEROS ALEATÓRIOS, ADICIONAR UM PARA CADA MÁQUINA
        let aleatorio_100 = Math.round(Math.random())
        let aleatorio_101 = Math.round(Math.random())
        let aleatorio_102 = Math.round(Math.random())
        let aleatorio_103 = Math.round(Math.random())

        console.log(`${aleatorio_100} | ${aleatorio_101} | ${aleatorio_102} | ${aleatorio_103} | ${data_demandaMedia}`)

        // SOMA COM OS NÚMEROS ANTERIORES, ADICIONAR UM PARA CADA MÁQUINA
        totalUsos_100 += aleatorio_100
        totalUsos_101 += aleatorio_101
        totalUsos_102 += aleatorio_102
        totalUsos_103 += aleatorio_103

        //// CAPTURA MOMENTO ATUAL E SEPARA 
        // let horaAtual = new Date();
        // let hora = horaAtual.getHours();
        // let minuto = horaAtual.getMinutes();
        // let segundo = horaAtual.getSeconds();
        // let timeLabel = `${hora}:${minuto}:${segundo}`;

        // PEGA O MOMENTO DA CRIAÇÃO DO DADO
        labels.push(new Date().toLocaleTimeString())
        // labels.push(hora)

        // FORMATA O DADO PARA ATUALIZAR NO GRÁFICO
        data_100.push(totalUsos_100)
        data_101.push(totalUsos_101)
        data_102.push(totalUsos_102)
        data_103.push(totalUsos_103)
        data_demandaMedia.push(demandaMedia)
        data_demandaAlta.push(demandaAlta)

        // SUBSTITUIR DADOS ANTIGOS
        if (labels.length > 20) {
            labels.shift()
            data_100.shift()
            data_101.shift()
            data_102.shift()
            data_103.shift()
            data_demandaMedia.shift()
            data_demandaAlta.shift()
        }

        // EXECUTA A FUNÇÃO
        atualizarGrafico()
    }

    function atualizarGrafico() {
        graficoGeral.data.labels = labels
        graficoGeral.data.datasets[0].data = data_100
        graficoGeral.update()

        graficoLegPress.data.labels = labels
        graficoLegPress.data.datasets[0].data = data_100
        graficoLegPress.update()

        graficoSupinoInclinado.data.labels = labels
        graficoSupinoInclinado.data.datasets[0].data = data_101
        graficoSupinoInclinado.update()

        graficoSmith.data.labels = labels
        graficoSmith.data.datasets[0].data = data_102
        graficoSmith.update()

        let notificacao = document.getElementById('divNotificacao');
        console.log(demanda_100, demanda_101, demanda_102);
        if (demanda_100 == "Baixa" && demanda_101 == "Baixa" && demanda_102 == "Baixa") {
            notificacao.style.display = 'none';
        } else {
            notificacao.style.display = 'block';
        }
    }

    // REPETIR A FUNÇÃO EM UM INTERVALO DE TEMPO
    setInterval(function () {
        gerarNumeroAleatorio()
    }, 1500) // EM MILISSEGUNDOS

    // GRÁFICOS
    // GRÁFICO GERAL

    let graficoGeral = new Chart(grafico_linha, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                // {
                //     label: `Demanda média`,
                //     data: data_demandaMedia,
                //     borderColor: '#ff8c00',
                //     tension: 0.1,
                //     borderWidth: 1
                // },
                // {
                //     label: `Demanda Alta`,
                //     data: data_demandaAlta,
                //     borderColor: 'red',
                //     tension: 0.1,
                //     borderWidth: 1
                // },
                {
                    label: `${nomeMaq_legPress}-${idMaq_100}`,
                    data: data_100,
                    borderColor: corGrafico_100,
                    tension: 0.1
                },
                {
                    label: `${nomeMaq_101}-${idMaq_101}`,
                    data: data_101,
                    borderColor: corGrafico_101,
                    tension: 0.1
                },
                {
                    label: `${nomeMaq_102}-${idMaq_102}`,
                    data: data_102,
                    borderColor: corGrafico_102,
                    tension: 0.1
                },
                {
                    label: `${nomeMaq_legPress}-${idMaq_103}`,
                    data: data_103,
                    borderColor: corGrafico_103,
                    tension: 0.1
                }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });

    // LEG PRESS
    let graficoLegPress = new Chart(grafico_100, {
        data: {
            labels: labels,
            datasets: [{
                type: 'line',
                label: `Demanda Média`,
                data: demandaMedia,
                borderWidth: 4,
                borderColor: '#ff8c00'
            },
            {
                type: 'bar',
                label: `${nomeMaq_legPress}-${idMaq_100}`,
                data: data_100,
                borderWidth: 1,
                borderColor: corGrafico_100
            },
            {
                type: 'bar',
                label: `${nomeMaq_legPress}-${idMaq_103}`,
                data: data_103,
                borderWidth: 1,
                borderColor: corGrafico_103
            }
            ],
            options: {}
        }
    })

    // SUPINO INCLINADO
    let graficoSupinoInclinado = new Chart(grafico_101, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `${nomeMaq_101}-${idMaq_101}`,
                data: data_101,
                borderWidth: 4,
                borderColor: corGrafico_101
            }],
            options: {}
        }
    })

    // SMITH
    let graficoSmith = new Chart(grafico_102, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `${nomeMaq_102}-${idMaq_102}`,
                data: data_102,
                borderWidth: 4,
                borderColor: corGrafico_102
            }],
            options: {}
        }
    })
}