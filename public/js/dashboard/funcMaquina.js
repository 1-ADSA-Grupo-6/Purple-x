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
                carregarCarrocel()
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

function carregarMaquinas(){
    
        main_alert.innerHTML += `
        <main id="main_graficoGeral">
            <div id="container_grafico_geral">
                <div id="container_info_maquinas">
                    <div class="container_alerta_geral">
                        <span>NÚMERO DE MÁQUINAS EM ALERTA</span>
                        <div class="div_valor_alerta_geral">
                            <span>DEMANDA MÉDIA:</span>
                            <span id="span_demanda_media" class="green"></span>
                        </div>
                        <div class="div_valor_alerta_geral">
                            <span>DEMANDA ALTA:</span>
                            <span id="span_demanda_alta" class="green"></span>
                        </div>
                    </div>
                    <div id="container_dado_geral">
                    <span>MÉDIA DE USOS POR CATEGORIA</span>
                        <div class="container_categoria">
                            <div class="div_categoria">
                                <div class="div_valor_geral">
                                    <span>PEITO:</span>
                                    <span id="span_demanda_peito" class="green"></span>
                                </div>
                                <div class="div_valor_geral">
                                    <span>COSTAS:</span>
                                    <span id="span_demanda_costas" class="green"></span>
                                </div>
                            </div>
                            <div class="div_categoria">
                                <div class="div_valor_geral">
                                    <span>BRAÇO:</span>
                                    <span id="span_demanda_braco" class="green"></span>
                                </div>
                                <div class="div_valor_geral">
                                    <span>PERNAS:</span>
                                    <span id="span_demanda_pernas" class="green"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="div_grafico_geral">
                    <div id="container_grafico_linha" class="div_grafico">
                        <canvas id="grafico_linha"></canvas>
                    </div>
                </div>
            </div>
        </main>`
    for (let index = 0; index < maquinas.length; index++) {
        main_alert.innerHTML += `
<main id="main_id">
    <div id="container_${idMaq_100}" class="container_maq color2">
        <div class="info_maq">
            <div id="nome_${idMaq_100}" class="div_nome_maq text_titulo">
                <span>${nomeMaq_legPress}</span>
            </div>
            <div class="div_idMaq">
                <span class="">Máquina exibida:</span>
                <select id="select_legPress" class="select_maq" onclick="mudarMaquinaExibida()">
                    <option value="todas">Todas</option>
                    <option value="${idMaq_100}">${idMaq_100}</option>
                    <option value="${idMaq_103}">${idMaq_103}</option>
                </select>
            </div>
            <div id="img_${idMaq_100}" class="img_maquina">
                <img src="${imgMaq_legPress}" id="img_leg_press">
            </div>
            <div class="dados_maq">
                <div class="div_dados_maq ">
                    <span>Categoria:</span>
                    <span id="categoria_${idMaq_100}">${categoria_LegPress}</span>
                </div>
                <div class="div_dados_maq ">
                    <span>Quantidade de máquinas:</span>
                    <span id="qtdMaq_${idMaq_100}">${qtdMaq_legPress}</span>
                </div>
                <div class="div_dados_maq ">
                    <span>Tempo de uso na sexta-feira:</span>
                    <span id="mediaDiario_${idMaq_100}">${MediaDiario_legPress}</span>
                </div>
            </div>
        </div>
        <div id="index_${idMaq_100}" class="index_maq">
            <div class="container_grafico">
                <div class="grafico_maq">
                    <canvas id="grafico_${idMaq_100}"></canvas>
                </div>
            </div>
            <div class="container_valor">
                <div class="div_valor ">
                    <span>Total de usos:</span>
                    <span id="total_usos_${idMaq_100}" class="green">${totalUsos_100}</span>
                </div>
                <div class="div_valor ">
                    <span>Demanda da máquina:</span>
                    <span id="span_demanda_${idMaq_100}" class="green">${demanda_100}</span>
                </div>
            </div>
        </div>
    </div>
</main>`
}}