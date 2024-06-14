let maquinas = []
let capturas = []
let ultimasCapturas = []
const demandaMedia = 1 // VARIÁVEL PARA DEFINIR A DEMANDA MÉDIA
const demandaAlta = 2// VARIÁVEL PARA DEFINIR A DEMANDA ALTA
const tempoSetInterval = 5000 // TEMPO PARA O setInterval EM MILISSEGUNDOS

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
                                <span id="span_maior_demanda">MÁQUINA MAIS USADA: <br></span>
                                <span id="span_demanda_peito" class="green"></span>
                            </div>
                            <div style="margin-top:10px" class="div_valor_geral">
                                <span id="span_menos_demanda">MÁQUINA MENOS USADA: <br></span>
                                <span id="span_demanda_costas" class="green"></span>
                            </div>
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
                            <span id="span_media_${idMaquina}"></span>
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
                            <span id="total_usos_${idMaquina}" class="green">Sem registro</span>
                        </div>
                        <div class="div_valor ">
                            <span>Tempo inativo:</span>
                            <span id="span_demanda_${idMaquina}" class="green">Sem registro</span>
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
            obterInatividade(idMaquina);
            obterMediaDia(idMaquina);
        } else {
            divMaquina.classList.add('oculto');
        }
    }
}

function obterUltimasCapturas() {
    fetch("/maquinas/obterUltimasCapturas", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                ultimasCapturas = json
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

function obterInatividade(id) {
    fetch(`/informacoesDash/obterInatividade/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {
        if (resposta.status === 404) {
            console.log("Máquina não encontrada (404)");
        } else if (resposta.ok) {
            resposta.json().then(function(resultado) {
                const tempoAtivoElement = document.getElementById(`span_demanda_${id}`);
                const totalUsosElement = document.getElementById(`total_usos_${id}`);
                
                tempoAtivoElement.textContent = `${resultado[0].tempo_ativo_minutos} minutos e ${resultado[0].tempo_ativo_segundos_restantes} segundos`;
                totalUsosElement.textContent = `${resultado[0].tempo_inativo_minutos} minutos e ${resultado[0].tempo_inativo_segundos_restantes} segundos`;
            });
        } else {
            console.log("Houve um erro ao tentar obter as capturas!");

            resposta.text().then(function(texto) {
                console.error(texto);
            });
        }
    }).catch(function (erro) {
        console.log("Erro na requisição:", erro);
    });
}

function obterMediaDia(id) {
    fetch(`/informacoesDash/obterMediaDia/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {
        if (resposta.status === 404) {
            console.log("Máquina não encontrada (404)");
        } else if (resposta.ok) {
            resposta.json().then(function(resultado) {
                const span = document.getElementById(`span_media_${id}`);
                span.innerHTML = resultado[0].media_usos;
                console.log(resultado[0].media_usos);
            });
        } else {
            console.log("Houve um erro ao tentar obter as capturas!");

            resposta.text().then(function(texto) {
                console.error(texto);
            });
        }
    }).catch(function (erro) {
        console.log("Erro na requisição:", erro);
    });
}