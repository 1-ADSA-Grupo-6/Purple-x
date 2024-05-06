//USAR SOMENTE SE O BANCO NÃO ESTIVER CONECTADO
function verificarDados() {
    //LEG PRESS
    if (totalUsos_100 > demandaMedia && totalUsos_100 <= demandaAlta) {
        total_usos_100.style.color = 'yellow'
        container_100.style.border = '5px solid yellow'
    }
    else if (totalUsos_100 > demandaAlta) {
        total_usos_100.style.color = 'red'
        container_100.style.border = '5px solid red'
    }
    else {
        total_usos_100.style.color = 'green'
    }

    if (demanda_100 == 'Média') {
        span_demanda_100.style.color = 'yellow'
    }
    else if (demanda_100 == 'Alta') {
        span_demanda_100.style.color = 'red'
    }
    else {
        span_demanda_100.style.color = 'green'
    }

    //SUPINO INCLINADO
    if (totalUsos_101 > demandaMedia && totalUsos_101 <= demandaAlta) {
        total_usos_101.style.color = 'yellow'
        container_101.style.border = '5px solid yellow'
    }
    else if (totalUsos_101 > demandaAlta) {
        total_usos_101.style.color = 'red'
        container_101.style.border = '5px solid red'
    }
    else {
        total_usos_101.style.color = 'green'
    }

    if (demanda_101 == 'Média') {
        span_demanda_101.style.color = 'yellow'
    }
    else if (demanda_101 == 'Alta') {
        span_demanda_101.style.color = 'red'
    }
    else {
        span_demanda_101.style.color = 'green'
    }

    if (totalUsos_102 > demandaMedia && totalUsos_102 <= demandaAlta) {
        total_usos_102.style.color = 'yellow'
        container_102.style.border = '5px solid yellow'
    }
    else if (totalUsos_102 > demandaAlta) {
        total_usos_102.style.color = 'red'
        um_container.style.border = '5px solid red'
    }
    else {
        total_usos_102.style.color = 'green'
    }

    if (demanda_102 == 'Média') {
        span_demanda_102.style.color = 'yellow'
    }
    else if (demanda_102 == 'Alta') {
        span_demanda_102.style.color = 'red'
    }
    else {
        span_demanda_102.style.color = 'green'
    }
}

// REPETIR A FUNÇÃO EM UM INTERVALO DE TEMPO
setInterval(function () {
    verificarDados()
}, 1500) // EM MILISSEGUNDOS