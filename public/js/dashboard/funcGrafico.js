function carregarGraficos() {
    let data = []
    let labels = 'teste'
    
    for(let contador = 0; contador < maquinas.length; contador++){
        const nomeMaquina = maquinas[contador].nomeMaquina
        const dataMaquina = tempoAtivo[contador].tempo

        data[contador] = {
            label: nomeMaquina,
            data: dataMaquina,
            borderColor: 'black',
            borderWidth: 4,
        }
    }

    let graficoGeral = new Chart(grafico_linha, {
        type: 'line',
        data: {
            labels: labels,
            datasets: data
        }
    })
}