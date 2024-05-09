//USAR SOMENTE SE O BANCO NÃO ESTIVER CONECTADO
function verificarDados() {
    // VERIFICAR MAQUINAS USO DE MAQUINAS
    //LEG PRESS
    if (totalUsos_100 == demandaMedia) {
        demanda_100 = 'Média' // TROCA VARIAVEL DEMANDA CRIADA EM dadosMaq.js
        total_usos_100.style.color = '#ff8c00' // MUDA A COR DO TEXTO TOTAL DE USO
        span_demanda_100.style.color = '#ff8c00' // MUDA A COR DO TEXTO DEMANDA DA MÁQUINA
        container_100.style.border = '3px solid #ff8c00' // MUDA A COR DA BORDA DA MÁQUINA
        span_demanda_100.innerHTML = demanda_100 // ATUALIZA O VALOR DA DEMANDA DA MÁQUINA
        leg_press_baixa.style.display = 'none' // OCULTA CARD COM BORDA VERDE NO CARROCEL
        leg_press_media.style.display = 'flex' // EXIBE CARD COM BORDA AMARELA NO CARROCEL
    }
    else if (totalUsos_100 == demandaAlta) {
        demanda_100 = 'Alta' // TROCA VARIAVEL DEMANDA CRIADA EM dadosMaq.js
        total_usos_100.style.color = 'red' // MUDA A COR DO TEXTO TOTAL DE USO
        span_demanda_100.style.color = 'red' // MUDA A COR DO TEXTO DEMANDA DA MÁQUINA
        container_100.style.border = '3px solid red' // MUDA A COR DA BORDA DA MÁQUINA
        span_demanda_100.innerHTML = demanda_100 // ATUALIZA O VALOR DA DEMANDA DA MÁQUINA
        leg_press_media.style.display = 'none' // OCULTA CARD COM BORDA AMARELA NO CARROCEL
        leg_press_alta.style.display = 'flex' // EXIBE CARD COM BORDA VERMELHA NO CARROCEL
    }

    //SUPINO INCLINADO
    if (totalUsos_101 == demandaMedia) {
        demanda_101 = 'Média' // TROCA VARIAVEL DEMANDA CRIADA EM dadosMaq.js
        total_usos_101.style.color = '#ff8c00' // MUDA A COR DO TEXTO TOTAL DE USO
        span_demanda_101.style.color = '#ff8c00' // MUDA A COR DO TEXTO DEMANDA DA MÁQUINA
        container_101.style.border = '3px solid #ff8c00' // MUDA A COR DA BORDA DA MÁQUINA
        span_demanda_101.innerHTML = demanda_101 // ATUALIZA O VALOR DA DEMANDA DA MÁQUINA
        supino_inclinado_baixa.style.display = 'none' // OCULTA CARD COM BORDA VERDE NO CARROCEL
        supino_inclinado_media.style.display = 'flex' // EXIBE CARD COM BORDA AMARELA NO CARROCEL
    }
    else if (totalUsos_101 == demandaAlta) {
        demanda_101 = 'Alta' // TROCA VARIAVEL DEMANDA CRIADA EM dadosMaq.js
        total_usos_101.style.color = 'red' // MUDA A COR DO TEXTO TOTAL DE USO
        span_demanda_101.style.color = 'red' // MUDA A COR DO TEXTO DEMANDA DA MÁQUINA
        container_101.style.border = '3px solid red' // MUDA A COR DA BORDA DA MÁQUINA
        span_demanda_101.innerHTML = demanda_101 // ATUALIZA O VALOR DA DEMANDA DA MÁQUINA
        supino_inclinado_media.style.display = 'none' // OCULTA CARD COM BORDA AMARELA NO CARROCEL
        supino_inclinado_alta.style.display = 'flex' // EXIBE CARD COM BORDA VERMELHA NO CARROCEL
    }

    // SMITH
    if (totalUsos_102 == demandaMedia) {
        demanda_102 = 'Média' // TROCA VARIAVEL DEMANDA CRIADA EM dadosMaq.js
        total_usos_102.style.color = '#ff8c00' // MUDA A COR DO TEXTO TOTAL DE USO
        span_demanda_102.style.color = '#ff8c00' // MUDA A COR DO TEXTO DEMANDA DA MÁQUINA
        container_102.style.border = '3px solid #ff8c00' // MUDA A COR DA BORDA DA MÁQUINA
        span_demanda_102.innerHTML = demanda_102 // ATUALIZA O VALOR DA DEMANDA DA MÁQUINA
        smith_baixa.style.display = 'none' // OCULTA CARD COM BORDA VERDE NO CARROCEL
        smith_media.style.display = 'flex' // EXIBE CARD COM BORDA AMARELA NO CARROCEL
    }
    else if (totalUsos_102 == demandaAlta) {
        demanda_102 = 'Alta' // TROCA VARIAVEL DEMANDA CRIADA EM dadosMaq.js
        total_usos_102.style.color = 'red' // MUDA A COR DO TEXTO TOTAL DE USO
        span_demanda_102.style.color = 'red' // MUDA A COR DO TEXTO DEMANDA DA MÁQUINA
        container_102.style.border = '3px solid red' // MUDA A COR DA BORDA DA MÁQUINA
        span_demanda_102.innerHTML = demanda_102 // ATUALIZA O VALOR DA DEMANDA DA MÁQUINA
        smith_media.style.display = 'none' // OCULTA CARD COM BORDA VERDE NO CARROCEL
        smith_alta.style.display = 'flex' // EXIBE CARD COM BORDA AMARELA NO CARROCEL
    }

    // VERIFICAR MAQUINAS EM ALERTA NO GRÁFICO GERAL
    // MUDAR COR DOS NUMEROS NO CARD
    if (qtdDemandaMedia >= 1) {
        span_demanda_media.style.color = '#ff8c00'
    }
    else {
        span_demanda_media.style.color = 'green'
    }

    if (qtdDemandaAlta >= 1) {
        span_demanda_alta.style.color = 'red'
    }
    else {
        span_demanda_alta.style.color = 'green'
    }
    // LEG PRESS
    if (totalUsos_100 == demandaMedia && validarContagemMedia_100) {
        validarContagemMedia_100 = false
        qtdDemandaMedia++ // AUMENTA A VARIÁVEL PARA EXIBIR NO GRÁFICO GERAL
    }
    if (totalUsos_100 == demandaAlta && validarContagemAlta_100) {
        validarContagemAlta_100 = false
        qtdDemandaMedia-- // DIMINUI A VARIÁVEL PARA EXIBIR NO GRÁFICO GERAL
        qtdDemandaAlta++ // AUMENTA A VARIÁVEL PARA EXIBIR NO GRÁFICO GERAL
    }
    if (totalUsos_103 == demandaMedia && validarContagemMedia_103) {
        validarContagemMedia_103 = false
        qtdDemandaMedia++ // AUMENTA A VARIÁVEL PARA EXIBIR NO GRÁFICO GERAL
    }
    if (totalUsos_103 == demandaAlta && validarContagemAlta_103) {
        validarContagemAlta_103 = false
        qtdDemandaMedia-- // DIMINUI A VARIÁVEL PARA EXIBIR NO GRÁFICO GERAL
        qtdDemandaAlta++ // AUMENTA A VARIÁVEL PARA EXIBIR NO GRÁFICO GERAL
    }

    // SUPINO INCLINADO
    if (totalUsos_101 == demandaMedia && validarContagemMedia_101) {
        validarContagemMedia_101 = false
        qtdDemandaMedia++ // AUMENTA A VARIÁVEL PARA EXIBIR NO GRÁFICO GERAL
    }
    if (totalUsos_101 == demandaAlta && validarContagemAlta_101) {
        validarContagemAlta_101 = false
        qtdDemandaMedia-- // DIMINUI A VARIÁVEL PARA EXIBIR NO GRÁFICO GERAL
        qtdDemandaAlta++ // AUMENTA A VARIÁVEL PARA EXIBIR NO GRÁFICO GERAL
    }

    // SMITH
    if (totalUsos_102 == demandaMedia && validarContagemMedia_102) {
        validarContagemMedia_102 = false
        qtdDemandaMedia++ // AUMENTA A VARIÁVEL PARA EXIBIR NO GRÁFICO GERAL
    }
    if (totalUsos_102 == demandaAlta && validarContagemAlta_102) {
        validarContagemAlta_102 = false
        qtdDemandaMedia-- // DIMINUI A VARIÁVEL PARA EXIBIR NO GRÁFICO GERAL
        qtdDemandaAlta++ // AUMENTA A VARIÁVEL PARA EXIBIR NO GRÁFICO GERAL
    }

    // VERIFICAR TOTAL DE USOS POR CATEGORIA EM ALERTA NO GRÁFICO GERAL
    // PEITO
    if (totalUsosPeito == (demandaMedia * qtdMaqPeito)) {
        span_demanda_peito.style.color = '#ff8c00'
    }
    if (totalUsosPeito == (demandaAlta * qtdMaqPeito)) {
        span_demanda_peito.style.color = 'red'
    }

    // COSTAS
    if (totalUsosCostas == (demandaMedia * qtdMaqCostas)) {
        span_demanda_costas.style.color = '#ff8c00'
    }
    if (totalUsosCostas == (demandaAlta * qtdMaqCostas)) {
        span_demanda_costas.style.color = 'red'
    }

    // BRACO
    if (totalUsosBraco == (demandaMedia * qtdMaqBraco)) {
        span_demanda_braco.style.color = '#ff8c00'
    }
    if (totalUsosBraco == (demandaAlta * qtdMaqBraco)) {
        span_demanda_braco.style.color = 'red'
    }

    // PERNAS
    if (totalUsosPernas == (demandaMedia * qtdMaqPernas)) {
        span_demanda_pernas.style.color = '#ff8c00'
    }
    if (totalUsosPernas == (demandaAlta * qtdMaqPernas)) {
        span_demanda_pernas.style.color = 'red'
    }

}

// REPETIR A FUNÇÃO EM UM INTERVALO DE TEMPO
setInterval(function () {
    verificarDados()
}, tempoSetInterval)