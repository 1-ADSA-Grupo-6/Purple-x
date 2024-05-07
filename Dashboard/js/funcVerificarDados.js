//USAR SOMENTE SE O BANCO NÃO ESTIVER CONECTADO
function verificarDados() {
    //LEG PRESS
    if (totalUsos_100 > demandaMedia && totalUsos_100 <= demandaAlta) {
        demanda_100 = 'Média'
        total_usos_100.style.color = 'yellow'
        container_100.style.border = '5px solid yellow'
        span_demanda_100.style.color = 'yellow'
        span_demanda_100.innerHTML = demanda_100
    }
    else if (totalUsos_100 > demandaAlta) {
        demanda_100 = 'Alta'
        total_usos_100.style.color = 'red'
        container_100.style.border = '5px solid red'
        span_demanda_100.style.color = 'red'
        span_demanda_100.innerHTML = demanda_100

    }
    else {
        total_usos_100.style.color = 'green'
    }

    //SUPINO INCLINADO
    if (totalUsos_101 > demandaMedia && totalUsos_101 <= demandaAlta) {
        demanda_101 = 'Média'
        total_usos_101.style.color = 'yellow'
        container_101.style.border = '5px solid yellow'
        span_demanda_101.style.color = 'yellow'
        span_demanda_101.innerHTML = demanda_101
    }
    else if (totalUsos_101 > demandaAlta) {
        demanda_101 = 'Alta'
        total_usos_101.style.color = 'red'
        container_101.style.border = '5px solid red'
        span_demanda_101.style.color = 'red'
        span_demanda_101.innerHTML = demanda_101
    }
    else {
        total_usos_101.style.color = 'green'
    }

    // SMITH
    if (totalUsos_102 > demandaMedia && totalUsos_102 <= demandaAlta) {
        demanda_102 = 'Média'
        total_usos_102.style.color = 'yellow'
        container_102.style.border = '5px solid yellow'
        span_demanda_102.style.color = 'yellow'
        span_demanda_102.innerHTML = demanda_102
    }
    else if (totalUsos_102 > demandaAlta) {
        demanda_102 = 'Alta'
        total_usos_102.style.color = 'red'
        container_102.style.border = '5px solid red'
        span_demanda_102.style.color = 'red'
        span_demanda_102.innerHTML = demanda_102
    }
    else {
        total_usos_102.style.color = 'green'
    }
}

// REPETIR A FUNÇÃO EM UM INTERVALO DE TEMPO
setInterval(function () {
    verificarDados()
}, 1500) // EM MILISSEGUNDOS