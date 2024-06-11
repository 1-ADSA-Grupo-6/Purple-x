let maquinas = []
let capturas = []
function mostrarTodasMaquinas() {
    main_graficoGeral.style.display = 'flex'
    main_legPress.style.display = 'none'
    main_supinoInclinado.style.display = 'none'
    main_smith.style.display = 'none'
    main_remada_convergente.style.display = 'none'
    main_biceps_convergente.style.display = 'none'
    main_shoulder_press.style.display = 'none'
}

function mostrarLegPress() {
    main_graficoGeral.style.display = 'none'
    main_legPress.style.display = 'flex'
    main_supinoInclinado.style.display = 'none'
    main_smith.style.display = 'none'
    main_remada_convergente.style.display = 'none'
    main_biceps_convergente.style.display = 'none'
    main_shoulder_press.style.display = 'none'
}

function mostrarSupinoInclinado() {
    main_graficoGeral.style.display = 'none'
    main_legPress.style.display = 'none'
    main_supinoInclinado.style.display = 'flex'
    main_smith.style.display = 'none'
    main_remada_convergente.style.display = 'none'
    main_biceps_convergente.style.display = 'none'
    main_shoulder_press.style.display = 'none'
}

function mostrarSmith() {
    main_graficoGeral.style.display = 'none'
    main_legPress.style.display = 'none'
    main_supinoInclinado.style.display = 'none'
    main_smith.style.display = 'flex'
    main_remada_convergente.style.display = 'none'
    main_biceps_convergente.style.display = 'none'
    main_shoulder_press.style.display = 'none'
}

function mostrarRemadaConvergente() {
    main_graficoGeral.style.display = 'none'
    main_legPress.style.display = 'none'
    main_supinoInclinado.style.display = 'none'
    main_smith.style.display = 'none'
    main_remada_convergente.style.display = 'flex'
    main_biceps_convergente.style.display = 'none'
    main_shoulder_press.style.display = 'none'
}

function mostrarBicepsConvergente() {
    main_graficoGeral.style.display = 'none'
    main_legPress.style.display = 'none'
    main_supinoInclinado.style.display = 'none'
    main_smith.style.display = 'none'
    main_remada_convergente.style.display = 'none'
    main_biceps_convergente.style.display = 'flex'
    main_shoulder_press.style.display = 'none'
}

function mostrarShoulderPress() {
    main_graficoGeral.style.display = 'none'
    main_legPress.style.display = 'none'
    main_supinoInclinado.style.display = 'none'
    main_smith.style.display = 'none'
    main_remada_convergente.style.display = 'none'
    main_biceps_convergente.style.display = 'none'
    main_shoulder_press.style.display = 'flex'
}

function mostrarHackSquatMachine() {
    main_graficoGeral.style.display = 'none'
    main_legPress.style.display = 'none'
    main_supinoInclinado.style.display = 'none'
    main_smith.style.display = 'none'
    main_remada_convergente.style.display = 'none'
    main_biceps_convergente.style.display = 'none'
    main_shoulder_press.style.display = 'flex'
}


function mostrarAbdominalMachine() {
    main_graficoGeral.style.display = 'none'
    main_legPress.style.display = 'none'
    main_supinoInclinado.style.display = 'none'
    main_smith.style.display = 'none'
    main_remada_convergente.style.display = 'none'
    main_biceps_convergente.style.display = 'none'
    main_shoulder_press.style.display = 'flex'
}

function mostrarEliptico() {
    main_graficoGeral.style.display = 'none'
    main_legPress.style.display = 'none'
    main_supinoInclinado.style.display = 'none'
    main_smith.style.display = 'none'
    main_remada_convergente.style.display = 'none'
    main_biceps_convergente.style.display = 'none'
    main_shoulder_press.style.display = 'flex'
}

function mostrarRemo() {
    main_graficoGeral.style.display = 'none'
    main_legPress.style.display = 'none'
    main_supinoInclinado.style.display = 'none'
    main_smith.style.display = 'none'
    main_remada_convergente.style.display = 'none'
    main_biceps_convergente.style.display = 'none'
    main_shoulder_press.style.display = 'flex'
}

// ATUALIZAR DADOS CONSTANTEMENTE
function atualizarDados() {
    // VARIÁVEIS
    totalUsosPeito = totalUsos_101
    totalUsosBraco = totalUsos_105 + totalUsos_106
    totalUsosCostas = totalUsos_104
    totalUsosPernas = totalUsos_100 + totalUsos_102 + totalUsos_103
    // GRÁFICO GERAL
    if (qtdDemandaMedia < 0) {
        qtdDemandaMedia = 0
    }
    span_demanda_media.innerHTML = qtdDemandaMedia
    span_demanda_alta.innerHTML = qtdDemandaAlta
    span_demanda_peito.innerHTML = (totalUsosPeito / qtdMaqPeito).toFixed()
    span_demanda_costas.innerHTML = (totalUsosCostas / qtdMaqCostas).toFixed()
    span_demanda_braco.innerHTML = (totalUsosBraco / qtdMaqBraco).toFixed()
    span_demanda_pernas.innerHTML = (totalUsosPernas / qtdMaqPernas).toFixed()
    // MAQUINAS
    total_usos_100.innerHTML = totalUsos_100
    total_usos_101.innerHTML = totalUsos_101
    total_usos_102.innerHTML = totalUsos_102
    total_usos_104.innerHTML = totalUsos_104
    total_usos_105.innerHTML = totalUsos_105
    total_usos_106.innerHTML = totalUsos_106

}

// REPETIR A FUNÇÃO EM UM INTERVALO DE TEMPO
setInterval(function () {
    atualizarDados()
}, tempoSetInterval)

function obterMaquinas() {
    fetch("/maquinas/obter", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                maquinas = json
                obterCapturas()
                console.log("máquinas:", maquinas);
            });
        } else {
            console.log("Houve um erro ao tentar obter as máquinas!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }
    }).catch(function (erro) {
        console.log("Erro na requisição:", erro);
    });
}

function obterCapturas() {
    fetch("/maquinas/obterCapturas", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                capturas = json
                console.log("Captura:", capturas);
            });
        } else {
            console.log("Houve um erro ao tentar obter as capturas!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }
    }).catch(function (erro) {
        console.log("Erro na requisição:", erro);
    });
}