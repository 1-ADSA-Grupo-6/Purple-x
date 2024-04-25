const charGraph = new Chart(lineChart, {
    type: 'line',
    data: {
        labels: ['teste', 'teste2', 'teste3', ''],
        datasets: [{
            label: 'testando',
            data: [0,1.2, 2, 3],
            borderWidth: 4,
            borderColor: '#7000ff'
        }],
        options : {}
    }
})