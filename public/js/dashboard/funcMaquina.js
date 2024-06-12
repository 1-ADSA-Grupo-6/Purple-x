let maquinas = []
let capturas = []
const demandaMedia = 1 // VARIÁVEL PARA DEFINIR A DEMANDA MÉDIA
const demandaAlta = 2// VARIÁVEL PARA DEFINIR A DEMANDA ALTA
const tempoSetInterval = 1500 // TEMPO PARA O setInterval EM MILISSEGUNDOS

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
// setInterval(function () {
//     atualizarDados()
// }, tempoSetInterval)

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
                console.log("máquinas:", maquinas);
                obterCapturas()
                carregarCarrocel()
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

                for (let index = 0; index < maquinas.length; index++) {
                    const idMaquina = maquinas[index].idAparelho
                    tempoAtivo[index] = {
                        idMaquina: idMaquina,
                        tempo: 0
                    }
                    tempoInativo[index] = {
                        idMaquina: idMaquina,
                        tempo: 0
                    }
                }
                calcularSegundos()
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

function carregarMaquinas() {
    main_alert.innerHTML += `
    <main id="main_0">
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
                <div class="txt_dash">
                <span>TEMPO DE USO <br> POR CATEGORIA</span>
                </div>
                    <div class="container_categoria">
                        <div class="div_categoria">
                            <div class="div_valor_geral">
                                <span>MÁQUINA MAIS <br> USADA:</span>
                                <span id="span_demanda_peito" class="green"></span>
                            </div>
                            <div style="margin-top:10px" class="div_valor_geral">
                                <span>MÁQUINA MENOS <br> USADA:</span>
                                <span id="span_demanda_costas" class="green"></span>
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
        const idMaquina = maquinas[index].idAparelho
        const nomeMaquina = maquinas[index].nome
        const categoriaMaquina = maquinas[index].categoria
        const imgMaquina = maquinas[index].urlImg

        main_alert.innerHTML += `
        <main id="main_${idMaquina}" class="oculto">
            <div class="container_maq color2">
                <div class="info_maq">
                    <div class="div_nome_maq text_titulo">
                        <span>${nomeMaquina}</span>
                    </div>
                    <div class="div_idMaq">
                        
                    </div>
                    <div class="img_maquina">
                        <img src="${imgMaquina}" class="ajustar_img_maquina">
                    </div>
                    <div class="dados_maq">
                        <div class="div_dados_maq ">
                            <span>Categoria:</span>
                            <span>${categoriaMaquina}</span>
                        </div>
                        <div class="div_dados_maq ">
                            <span>Média de uso na sexta-feira:</span>
                            <span>0</span>
                        </div>
                    </div>
                </div>
                <div class="index_maq">
                    <div class="container_grafico">
                        <div class="grafico_maq">
                            <canvas id="grafico_${idMaquina}"></canvas>
                        </div>
                    </div>
                    <div class="container_valor">
                        <div class="div_valor ">
                            <span>Total de usos:</span>
                            <span id="total_usos_${idMaquina}" class="green">10</span>
                        </div>
                        <div class="div_valor ">
                            <span>Demanda da máquina:</span>
                            <span id="span_demanda_${idMaquina}" class="green">nada</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>`
    }
}

function mostrarMaquinas() {
    const elemento = event.target.closest('.div_carrocel');
    const idMaquinaExibir = elemento.id;

    for (let index = 0; index <= maquinas.length; index++) {
        const idMaquina = index;
        const divMaquina = document.getElementById(`main_${idMaquina}`);

        if (idMaquina == idMaquinaExibir) {
            divMaquina.classList.remove('oculto');
        } else {
            divMaquina.classList.add('oculto');
        }
    }
}