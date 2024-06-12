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