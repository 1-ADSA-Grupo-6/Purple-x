let demanda = []
let maquinas = []
let capturas = []
let ultimasCapturas = []
const demandaMedia = 1 // VARIÁVEL PARA DEFINIR A DEMANDA MÉDIA
const demandaAlta = 2// VARIÁVEL PARA DEFINIR A DEMANDA ALTA
const tempoSetInterval = 5000 // TEMPO PARA O setInterval EM MILISSEGUNDOS

function obterDemanda() {
    fetch("/maquinas/obterDemanda", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                demanda = json
                console.log("Parametro:", demanda);
                obterMaquinas()
            });
        } else {
            console.log("Houve um erro ao tentar obter os parametros!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }
    }).catch(function (erro) {
        console.log("Erro na requisição:", erro);
    });
}

function obterMaquinas() {
    fetch("/maquinas/obter", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                for (let index = 0; index < json.length; index++) {
                    if (json[index].nome != 'Desativado') {
                        maquinas.push(json[index])
                    }
                }
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
                for (let index = 0; index < json.length; index++) {
                    if (json[index].nome != 'Desativado') {
                        capturas.push(json[index])
                    }
                }
                console.log("Capturas:", capturas);
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
                calcularTempo()
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
                    <span>MÁQUINAS EM ALERTA:</span>
                    <div class="div_valor_alerta_geral">
                        <span>DEMANDA MÉDIA:</span>
                        <span id="span_demanda_media" class="green">0</span>
                    </div>
                    <div class="div_valor_alerta_geral">
                        <span>DEMANDA ALTA:</span>
                        <span id="span_demanda_alta" class="green">0</span>
                    </div>
                </div>
                <div id="container_dado_geral">
                    <span>MÁQUINA MAIS USADA:</span>
                    <div class="div_kpi_geral">
                        <div class="div_nome_maq_mais_usada">
                            <span id="span_nome_mais_usada">Sem registro</span>
                        </div>
                        <div class="div_tempo_maq_mais_usada">
                            <span id="span_tempo_mais_usada"></span>
                        </div>
                    </div>
                    <span>MÁQUINA MENOS USADA:</span>
                    <div class="div_kpi_geral">
                        <div class="div_nome_maq_mais_usada">
                            <span id="span_nome_menos_usada">Sem registro</span>
                        </div>
                        <div class="div_tempo_maq_mais_usada">
                            <span id="span_tempo_menos_usada"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="div_grafico_geral">
                <div id="container_grafico_linha" class="div_grafico">
                    <canvas id="grafico_geral"></canvas>
                </div>
            </div>
        </div>
    </main>`

    for (let index = 0; index < maquinas.length; index++) {
        const nomeMaquina = maquinas[index].nome
        const idMaquina = maquinas[index].idAparelho
        const categoriaMaquina = maquinas[index].categoria
        const imgMaquina = maquinas[index].urlImg
        const mapeamentoMaquina = maquinas[index].mapeamento

        main_alert.innerHTML += `
            <main id="main_${idMaquina}" class="oculto">
                <div class="container_maq color2">
                    <div class="info_maq">
                        <div class="div_nome_maq text_titulo">
                            <span>${nomeMaquina}</span>
                        </div>
                        <div class="img_maquina">
                            <img src="${imgMaquina}" class="ajustar_img_maquina">
                        </div>
                        <div class="dados_maq">
                            <div class="div_categoria_maq ">
                                <span>Categoria: ${categoriaMaquina}</span>
                            </div>
                            <div class="div_dados_maq ">
                                <span>Mapeamento: ${mapeamentoMaquina}</span>
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
                                <span>Tempo ativo:</span>
                                <span id="tempo_ativo_${idMaquina}" class="green">00:00:00</span>
                            </div>
                            <div class="div_valor ">
                                <span>Tempo inativo:</span>
                                <span id="tempo_inativo_${idMaquina}" class="green">00:00:00</span>
                            </div>
                            <div class="div_valor ">
                                <span>Demanda da máquina:</span>
                                <span id="span_demanda_${idMaquina}" class="green">Baixa</span>
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

function obterUltimasCapturas() {
    ultimasCapturas.splice(0, ultimasCapturas.length)
    fetch("/maquinas/obterUltimasCapturas", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                for (let index = 0; index < json.length; index++) {
                    if (json[index].nome != 'Desativado') {
                        ultimasCapturas.push(json[index])
                    }
                }
                console.log("Últimas Capturas:", ultimasCapturas);
                atualizarTempo()
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