function carregarGraficos() {

    // FUNÇÃO GERAR NÚMEROS ALEATÓRIOS
    let labels = []
    let data_100 = []
    let data_101 = []
    let data_102 = []
    let data_103 = []
    let data_104 = []
    let data_105 = []
    let data_106 = []
    let data_107 = []
    let data_totalUsosPeito = []
    let data_totalUsosCosta = []
    let data_totalUsosBraco = []
    let data_totalUsosPernas = []
    let data_demandaMedia = []
    let data_demandaAlta = []

    function gerarNumeroAleatorio() {

        // GERA NÚMEROS ALEATÓRIOS, ADICIONAR UM PARA CADA MÁQUINA
        let aleatorio_100 = Math.round(Math.random())
        let aleatorio_101 = Math.round(Math.random())
        let aleatorio_102 = Math.round(Math.random())
        let aleatorio_103 = Math.round(Math.random())
        let aleatorio_104 = Math.round(Math.random())
        let aleatorio_105 = Math.round(Math.random())
        let aleatorio_106 = Math.round(Math.random())
        let aleatorio_107 = Math.round(Math.random())

        // console.log(`${aleatorio_100} | ${aleatorio_101} | ${aleatorio_102} | ${aleatorio_103} | ${data_demandaMedia}`)

        // SOMA COM OS NÚMEROS ANTERIORES, ADICIONAR UM PARA CADA MÁQUINA
        totalUsos_100 += aleatorio_100
        totalUsos_101 += aleatorio_101
        totalUsos_102 += aleatorio_102
        totalUsos_103 += aleatorio_103
        totalUsos_104 += aleatorio_104
        totalUsos_105 += aleatorio_105
        totalUsos_106 += aleatorio_106
        totalUsos_107 += aleatorio_107

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
        data_104.push(totalUsos_104)
        data_105.push(totalUsos_105)
        data_106.push(totalUsos_106)
        data_107.push(totalUsos_107)
        data_totalUsosPeito.push(totalUsosPeito)
        data_totalUsosCosta.push(totalUsosCostas)
        data_totalUsosBraco.push(totalUsosBraco)
        data_totalUsosPernas.push(totalUsosPernas)
        data_demandaMedia.push(demandaMedia)
        data_demandaAlta.push(demandaAlta)

        // SUBSTITUIR DADOS ANTIGOS
        if (labels.length > 20) {
            labels.shift()
            data_100.shift()
            data_101.shift()
            data_102.shift()
            data_103.shift()
            data_104.shift()
            data_105.shift()
            data_106.shift()
            data_107.shift()
            data_totalUsosPeito.shift()
            data_totalUsosCosta.shift()
            data_totalUsosBraco.shift()
            data_totalUsosPernas.shift()
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

        graficoRemadaConvergente.data.labels = labels
        graficoRemadaConvergente.data.datasets[0].data = data_104
        graficoRemadaConvergente.update()

        graficoBicepsConvergente.data.labels = labels
        graficoBicepsConvergente.data.datasets[0].data = data_105
        graficoBicepsConvergente.update()

        graficoShoulderPress.data.labels = labels
        graficoShoulderPress.data.datasets[0].data = data_106
        graficoShoulderPress.update()

        let notificacao = document.getElementById('divNotificacao');
        // console.log(demanda_100, demanda_101, demanda_102);
        if (demanda_100 == "Baixa" && demanda_101 == "Baixa" && demanda_102 == "Baixa") {
            notificacao.style.display = 'none';
        } else {
            notificacao.style.display = 'block';
        }
    }

    // REPETIR A FUNÇÃO EM UM INTERVALO DE TEMPO
    setInterval(function () {
        gerarNumeroAleatorio()
    }, tempoSetInterval)

    // GRÁFICOS

    // GRÁFICO GERAL
    let graficoGeral = new Chart(grafico_linha, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: `Máquinas de Peito`,
                    data: data_totalUsosPeito,
                    borderColor: '#F20574',
                    borderWidth: 4,
                },
                {
                    label: `Máquinas de Braço`,
                    data: data_totalUsosBraco,
                    borderColor: '#04D9D9',
                    borderWidth: 4,
                },
                {
                    label: `Máquinas de Costas`,
                    data: data_totalUsosCosta,
                    borderColor: '#ABD904',
                    borderWidth: 4,
                },
                {
                    label: `Máquinas de Pernas`,
                    data: data_totalUsosPernas,
                    borderColor: '#7000ff',
                    borderWidth: 4,
                },
                {
                    label: `Demanda média`,
                    data: data_demandaMedia,
                    borderColor: '#ff8c00',
                    borderWidth: 2
                },
                {
                    label: `Demanda Alta`,
                    data: data_demandaAlta,
                    borderColor: 'red',
                    borderWidth: 2
                }
                //,
                // {
                //     label: `${nomeMaq_104}-${idMaq_104}`,
                //     data: data_104,
                //     borderWidth: 4,
                //     borderColor: corGrafico_104
                // },
                // {
                //     label: `${nomeMaq_104}-${idMaq_107}`,
                //     data: data_107,
                //     borderWidth: 4,
                //     borderColor: corGrafico_107
                // },
                // {
                //     label: `${nomeMaq_105}-${idMaq_105}`,
                //     data: data_105,
                //     borderWidth: 4,
                //     borderColor: corGrafico_105
                // },
                // {
                //     label: `${nomeMaq_106}-${idMaq_106}`,
                //     data: data_106,
                //     borderWidth: 4,
                //     borderColor: corGrafico_106
                // }
            ]
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
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `${nomeMaq_legPress}-${idMaq_100}`,
                data: data_100,
                borderWidth: 4,
                borderColor: corGrafico_100
            },
            {
                label: `${nomeMaq_legPress}-${idMaq_103}`,
                data: data_103,
                borderWidth: 4,
                borderColor: corGrafico_103
            },
            {
                label: `Demanda Média`,
                data: data_demandaMedia,
                borderColor: '#ff8c00',
                borderWidth: 2
            },
            {
                label: `Demanda Alta`,
                data: data_demandaAlta,
                borderColor: 'red',
                borderWidth: 2
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
            },
            {
                label: `Demanda Média`,
                data: data_demandaMedia,
                borderColor: '#ff8c00',
                borderWidth: 2
            },
            {
                label: `Demanda Alta`,
                data: data_demandaAlta,
                borderColor: 'red',
                borderWidth: 2
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
            },
            {
                label: `Demanda Média`,
                data: data_demandaMedia,
                borderColor: '#ff8c00',
                borderWidth: 2
            },
            {
                label: `Demanda Alta`,
                data: data_demandaAlta,
                borderColor: 'red',
                borderWidth: 2
            }],
            options: {}
        }
    })

    // REMADA CONVERGENTE
    let graficoRemadaConvergente = new Chart(grafico_104, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `${nomeMaq_104}-${idMaq_104}`,
                data: data_104,
                borderWidth: 4,
                borderColor: corGrafico_104
            },
            {
                label: `${nomeMaq_104}-${idMaq_107}`,
                data: data_107,
                borderWidth: 4,
                borderColor: corGrafico_107
            },
            {
                label: `Demanda Média`,
                data: data_demandaMedia,
                borderColor: '#ff8c00',
                borderWidth: 2
            },
            {
                label: `Demanda Alta`,
                data: data_demandaAlta,
                borderColor: 'red',
                borderWidth: 2
            }],
            options: {}
        }
    })

    // BICEPS CONVERGENTE
    let graficoBicepsConvergente = new Chart(grafico_105, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `${nomeMaq_105}-${idMaq_105}`,
                data: data_105,
                borderWidth: 4,
                borderColor: corGrafico_105
            },
            {
                label: `Demanda Média`,
                data: data_demandaMedia,
                borderColor: '#ff8c00',
                borderWidth: 2
            },
            {
                label: `Demanda Alta`,
                data: data_demandaAlta,
                borderColor: 'red',
                borderWidth: 2
            }],
            options: {}
        }
    })

    // SHOULDER PRESS
    let graficoShoulderPress = new Chart(grafico_106, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `${nomeMaq_106}-${idMaq_106}`,
                data: data_106,
                borderWidth: 4,
                borderColor: corGrafico_106
            },
            {
                label: `Demanda Média`,
                data: data_demandaMedia,
                borderColor: '#ff8c00',
                borderWidth: 2
            },
            {
                label: `Demanda Alta`,
                data: data_demandaAlta,
                borderColor: 'red',
                borderWidth: 2
            }],
            options: {}
        }
    })
}