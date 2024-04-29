function carregarGraficos() {
    // GRÁFICO GERAL - BARRA

    let graficoGeralBarra = new Chart(grafico_barra, {
        type: 'bar',
        data: {
            labels: ['Total usos'],
            datasets: [{
                label: 'Peito',
                data: [675],
                borderWidth: 1,
            },
            {
                label: 'Braço',
                data: [421],
                borderWidth: 1,
            },
            {
                label: 'Costas',
                data: [203],
                borderWidth: 1,
            },
            {
                label: 'Pernas',
                data: [279],
                borderWidth: 1,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // GRÁFICO GERAL - LINHA

    let graficoGeralLinha = new Chart(grafico_linha, {
        type: 'line',
        data: {
            labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
            datasets: [{
                label: `${nomeMaq_100}-100`,
                data: [0, 12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144, 156, 168, 180, 192],
                borderWidth: 4,
                borderColor: corGrafico_100,
            },
            {
                label: `${nomeMaq_100}-103`,
                data: [0, 9, 34, 43, 48, 52, 59, 79, 85, 99, 108, 123, 139, 150, 165, 178, 184],
                borderWidth: 4,
                borderColor: 'lightblue'
            },
            {
                label: nomeMaq_101,
                data: [0, 41, 65, 80, 114, 142, 198, 219, 231, 266, 293, 342, 370, 421, 450, 487, 502],
                borderWidth: 4,
                borderColor: corGrafico_101
            },
            {
                label: `${nomeMaq_102}-${idMaq_102}`,
                data: [0, 12, 29, 44, 57, 66, 73, 87, 94, 100, 132, 172, 190, 241, 274, 301, 342],
                borderWidth: 4,
                borderColor: corGrafico_102
            }],
            options: {}
        }
    })

    // LEG PRESS
    let charGraph_100 = new Chart(grafico_100, {
        type: 'line',
        data: {
            labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
            datasets: [{
                label: idMaq_100,
                data: [0, 12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144, 156, 168, 180, 192],
                borderWidth: 4,
                borderColor: corGrafico_100
            },
            {
                label: idMaq_103,
                data: [0, 9, 34, 43, 48, 52, 59, 79, 85, 99, 108, 123, 139, 150, 165, 178, 184],
                borderWidth: 4,
                borderColor: 'lightblue'
            }
            ],
            options: {}
        }
    })

    // SUPINO INCLINADO
    let charGraph_101 = new Chart(grafico_101, {
        type: 'line',
        data: {
            labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
            datasets: [{
                label: nomeMaq_101,
                data: [0, 41, 65, 80, 114, 142, 198, 219, 231, 266, 293, 342, 370, 421, 450, 487, 502],
                borderWidth: 4,
                borderColor: corGrafico_101
            }],
            options: {}
        }
    })

    // SMITH
    let charGraph_102 = new Chart(grafico_102, {
        type: 'line',
        data: {
            labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
            datasets: [{
                label: `${nomeMaq_102}-${idMaq_102}`,
                data: [0, 12, 29, 44, 57, 66, 73, 87, 94, 100, 132, 172, 190, 241, 274, 301, 342],
                borderWidth: 4,
                borderColor: corGrafico_102
            }],
            options: {}
        }
    })
}