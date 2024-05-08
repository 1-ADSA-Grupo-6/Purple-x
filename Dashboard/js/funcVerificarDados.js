//USAR SOMENTE SE O BANCO NÃO ESTIVER CONECTADO
function verificarDados() {
    //LEG PRESS
    if (totalUsos_100 >= demandaMedia && totalUsos_100 < demandaAlta) {
        demanda_100 = 'Média' // TROCA VARIAVEL DEMANDA CRIADA EM dadosMaq.js
        total_usos_100.style.color = 'yellow' // MUDA A COR DO TEXTO TOTAL DE USO
        span_demanda_100.style.color = 'yellow' // MUDA A COR DO TEXTO DEMANDA DA MÁQUINA
        container_100.style.border = '5px solid yellow' // MUDA A COR DA BORDA DA MÁQUINA
        span_demanda_100.innerHTML = demanda_100 // ATUALIZA O VALOR DA DEMANDA DA MÁQUINA
        leg_press_baixa.style.display = 'none' // OCULTA CARD COM BORDA VERDE NO CARROCEL
        leg_press_media.style.display = 'flex' // EXIBE CARD COM BORDA AMARELA NO CARROCEL
    }
    else if (totalUsos_100 >= demandaAlta) {
        demanda_100 = 'Alta' // TROCA VARIAVEL DEMANDA CRIADA EM dadosMaq.js
        total_usos_100.style.color = 'red' // MUDA A COR DO TEXTO TOTAL DE USO
        span_demanda_100.style.color = 'red' // MUDA A COR DO TEXTO DEMANDA DA MÁQUINA
        container_100.style.border = '5px solid red' // MUDA A COR DA BORDA DA MÁQUINA
        span_demanda_100.innerHTML = demanda_100 // ATUALIZA O VALOR DA DEMANDA DA MÁQUINA
        leg_press_media.style.display = 'none' // OCULTA CARD COM BORDA AMARELA NO CARROCEL
        leg_press_alta.style.display = 'flex' // EXIBE CARD COM BORDA VERMELHA NO CARROCEL
    }

    //SUPINO INCLINADO
    if (totalUsos_101 >= demandaMedia && totalUsos_101 < demandaAlta) {
        demanda_101 = 'Média' // TROCA VARIAVEL DEMANDA CRIADA EM dadosMaq.js
        total_usos_101.style.color = 'yellow' // MUDA A COR DO TEXTO TOTAL DE USO
        span_demanda_101.style.color = 'yellow' // MUDA A COR DO TEXTO DEMANDA DA MÁQUINA
        container_101.style.border = '5px solid yellow' // MUDA A COR DA BORDA DA MÁQUINA
        span_demanda_101.innerHTML = demanda_101 // ATUALIZA O VALOR DA DEMANDA DA MÁQUINA
        supino_inclinado_baixa.style.display = 'none' // OCULTA CARD COM BORDA VERDE NO CARROCEL
        supino_inclinado_media.style.display = 'flex' // EXIBE CARD COM BORDA AMARELA NO CARROCEL
    }
    else if (totalUsos_101 >= demandaAlta) {
        demanda_101 = 'Alta' // TROCA VARIAVEL DEMANDA CRIADA EM dadosMaq.js
        total_usos_101.style.color = 'red' // MUDA A COR DO TEXTO TOTAL DE USO
        span_demanda_101.style.color = 'red' // MUDA A COR DO TEXTO DEMANDA DA MÁQUINA
        container_101.style.border = '5px solid red' // MUDA A COR DA BORDA DA MÁQUINA
        span_demanda_101.innerHTML = demanda_101 // ATUALIZA O VALOR DA DEMANDA DA MÁQUINA
        supino_inclinado_media.style.display = 'none' // OCULTA CARD COM BORDA AMARELA NO CARROCEL
        supino_inclinado_alta.style.display = 'flex' // EXIBE CARD COM BORDA VERMELHA NO CARROCEL
    }

    // SMITH
    if (totalUsos_102 >= demandaMedia && totalUsos_102 < demandaAlta) {
        demanda_102 = 'Média' // TROCA VARIAVEL DEMANDA CRIADA EM dadosMaq.js
        total_usos_102.style.color = 'yellow' // MUDA A COR DO TEXTO TOTAL DE USO
        span_demanda_102.style.color = 'yellow' // MUDA A COR DO TEXTO DEMANDA DA MÁQUINA
        container_102.style.border = '5px solid yellow' // MUDA A COR DA BORDA DA MÁQUINA
        span_demanda_102.innerHTML = demanda_102 // ATUALIZA O VALOR DA DEMANDA DA MÁQUINA
        smith_baixa.style.display = 'none' // OCULTA CARD COM BORDA VERDE NO CARROCEL
        smith_media.style.display = 'flex' // EXIBE CARD COM BORDA AMARELA NO CARROCEL
    }
    else if (totalUsos_102 >= demandaAlta) {
        demanda_102 = 'Alta' // TROCA VARIAVEL DEMANDA CRIADA EM dadosMaq.js
        total_usos_102.style.color = 'red' // MUDA A COR DO TEXTO TOTAL DE USO
        span_demanda_102.style.color = 'red' // MUDA A COR DO TEXTO DEMANDA DA MÁQUINA
        container_102.style.border = '5px solid red' // MUDA A COR DA BORDA DA MÁQUINA
        span_demanda_102.innerHTML = demanda_102 // ATUALIZA O VALOR DA DEMANDA DA MÁQUINA
        smith_media.style.display = 'none' // OCULTA CARD COM BORDA VERDE NO CARROCEL
        smith_alta.style.display = 'flex' // EXIBE CARD COM BORDA AMARELA NO CARROCEL
    }
}

// REPETIR A FUNÇÃO EM UM INTERVALO DE TEMPO
setInterval(function () {
    verificarDados()
}, 1500) // EM MILISSEGUNDOS