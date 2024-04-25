let dataMediaDiario = 500

    data_media_diario.innerHTML = dataMediaDiario

let dataMediaTempo = '10:00'

    data_media_tempo.innerHTML = dataMediaTempo

let ultimaManutencao = '01/01/2024'

    data_ultima_manutencao.innerHTML = ultimaManutencao

let demanda = 'Média'

        span_demanda.innerHTML += `${select_dia2.value}:`

        if (demanda == 'Média') {
            span_demanda_valor.style.color = 'yellow'
            span_demanda_valor.innerHTML += demanda
        }
        else if (demanda == 'Alta') {
            span_demanda_valor.style.color = 'red'
            span_demanda_valor.innerHTML += demanda
        }
        else {
            span_demanda_valor.style.color = 'green'
            span_demanda_valor.innerHTML += demanda
        }
