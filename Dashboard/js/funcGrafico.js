function carregarGraficos() {

    let labels = [];
    let data = [];

    function gerarNumeroAleatorio() {

        // GERA NÚMEROS ALEATÓRIOS, ADICIONAR UM PARA CADA MÁQUINA
        let aleatorio_100 = Math.round(Math.random());
        let aleatorio_101 = Math.round(Math.random());
        let aleatorio_102 = Math.round(Math.random());
        let aleatorio_103 = Math.round(Math.random());

        // SOMA COM OS NÚMEROS ANTERIORES, ADICIONAR UM PARA CADA MÁQUINA
        totalUsos_100 += aleatorio_100
        totalUsos_101 += aleatorio_101
        totalUsos_102 += aleatorio_102
        totalUsos_103 += aleatorio_103

        // PEGA O MOMENTO DA CRIAÇÃO DO DADO
        labels.push(new Date().toLocaleTimeString())

        // FORMATA O DADO PARA ATUALIZAR NO GRÁFICO
        data.push(totalUsos_101)

        // SUBSTITUIR DADOS ANTIGOS
        if (labels.length > 10) {
            labels.shift()
            data.shift()
        }

        // EXECUTA A FUNÇÃO
        atualizarGrafico()
    }

    function atualizarGrafico() {
        graficoGeral.data.labels = labels;
        graficoGeral.data.datasets[0].data = data;
        graficoGeral.update();
    }

    // REPETIR A FUNÇÃO EM UM INTERVALO DE TEMPO
    setInterval(function () {
        gerarNumeroAleatorio()
    }, 5000) // EM MILISSEGUNDOS

    // GRÁFICO GERAL

    let graficoGeral = new Chart(grafico_linha, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'teste',
                data: data,
                borderColor: 'rgb(75, 192, 192)',
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
    let charGraph_100 = new Chart(grafico_100, {
        type: 'line',
        data: {
            labels: labels,
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

    // simulateDataCollection(graficoGeralLinha, intervaloDeAtualizacao);
    // simulateDataCollection(charGraph_100, intervaloDeAtualizacao);
    // simulateDataCollection(charGraph_101, intervaloDeAtualizacao);
    // simulateDataCollection(charGraph_102, intervaloDeAtualizacao);
}

// let valor = 100
// // Função para simular a coleta de dados
// function simulateDataCollection(chart, interval) {
//     setInterval(() => {
//         // Gerar um novo valor de dados fictícios
//         const newValue = Math.floor(Math.round(Math.random())); // Gera um valor 0 ou 1
//         valor += newValue

//         console.log(`${newValue}`)

//         // Obter o tempo atual para adicionar ao rótulo de tempo
//         let currentDate = new Date();
//         let hours = currentDate.getHours();
//         let minutes = currentDate.getMinutes();
//         let seconds = currentDate.getSeconds();
//         let timeLabel = `${hours}`;

//         // Adicionar o novo valor e rótulo de tempo ao gráfico
//         chart.data.labels.push(timeLabel);
//         chart.data.datasets[0].data.push(valor);

//         // Remover o valor mais antigo se houver mais pontos do que o limite definido
//         if (chart.data.datasets[0].data.length > numPoints) {
//             chart.data.datasets[0].data.shift();
//             chart.data.labels.shift();
//         }

//         // Atualizar o gráfico
//         chart.update();
//     }, interval);
// }

// // Agora você pode chamar a função para simular a coleta de dados
// const intervaloDeAtualizacao = 5000; // em milissegundos (por exemplo, a cada 5 segundos)
// const numPoints = 1;

// ---------------------------------------------------

// let contador = 100;
// let numeroAnterior = null;
// let labels = [];
// let data = [];

// function gerarNumeroAleatorioEntreZeroEUm() {
//   let numero = Math.round(Math.random());
//   let numero2 = Math.round(Math.random());
//   let numero3 = Math.round(Math.random());
//   console.log(`${numero} | ${numero2} | ${numero3}`)
//   contador += numero;
//   numeroAnterior = numero;
//   labels.push(new Date().toLocaleTimeString());
//   data.push(contador);
//   if (labels.length > 10) {
//     labels.shift();
//     data.shift();
//   }
//   atualizarGrafico();
// }

// function atualizarGrafico() {
//   meuGrafico.data.labels = labels;
//   meuGrafico.data.datasets[0].data = data;
//   meuGrafico.update();
// }

// setInterval(function() {
//   gerarNumeroAleatorioEntreZeroEUm();
// }, 3000); // 5000 milissegundos = 5 segundos

// var ctx = document.getElementById('grafico_linha').getContext('2d');
// var meuGrafico = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: labels,
//     datasets: [{
//       label: 'Contador',
//       data: data,
//       borderColor: 'rgb(75, 192, 192)',
//       tension: 0.1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: false
//       }
//     }
//   }
// });