function mostrarTodasMaquinas() {
    main_graficoGeral.style.display = 'flex'
    main_legPress.style.display = 'none'
    main_supinoInclinado.style.display = 'none'
    main_smith.style.display = 'none'
}

function mostrarLegPress() {
    main_graficoGeral.style.display = 'none'
    main_legPress.style.display = 'flex'
    main_supinoInclinado.style.display = 'none'
    main_smith.style.display = 'none'
}

function mostrarSupinoInclinado() {
    main_graficoGeral.style.display = 'none'
    main_legPress.style.display = 'none'
    main_supinoInclinado.style.display = 'flex'
    main_smith.style.display = 'none'
}

function mostrarSmith() {
    main_graficoGeral.style.display = 'none'
    main_legPress.style.display = 'none'
    main_supinoInclinado.style.display = 'none'
    main_smith.style.display = 'flex'
}

// ATUALIZAR DADOS CONSTANTEMENTE
function atualizarDados() {
    // VARIÁVEIS
    totalUsosPeito = totalUsos_101
    totalUsosBraco = ''
    totalUsosCostas = ''
    totalUsosPernas = totalUsos_100 + totalUsos_102 + totalUsos_103
    // GRÁFICO GERAL
    if (qtdDemandaMedia < 0) {
        qtdDemandaMedia = 0
    }
    span_demanda_media.innerHTML = qtdDemandaMedia
    span_demanda_alta.innerHTML = qtdDemandaAlta
    span_demanda_peito.innerHTML = totalUsosPeito
    span_demanda_costas.innerHTML = totalUsosCostas
    span_demanda_braco.innerHTML = totalUsosBraco
    span_demanda_pernas.innerHTML = totalUsosPernas
    // MAQUINAS
    total_usos_100.innerHTML = totalUsos_100
    total_usos_101.innerHTML = totalUsos_101
    total_usos_102.innerHTML = totalUsos_102

}

// REPETIR A FUNÇÃO EM UM INTERVALO DE TEMPO
setInterval(function () {
    atualizarDados()
}, tempoSetInterval)