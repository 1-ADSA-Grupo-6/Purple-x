//VARIÁVEL LIMITADORA DO FOR
let idMaximo = 99
let demandaMedia = 200
let demandaAlta = 500

// <!-- GRÁFICO GERAL -->
function mostrarTodasMaquinas() {
    main.innerHTML = `
    <div id="container_grafico_geral">
            <div id="div_chk_graficos">
                <div>
                    <input type="checkbox" id="chk_grafico_barra" onclick="grafico()">
                    <label for="chk_grafico_barra" class="text">Gráfico de Barras</label>
                </div>
                <div>
                    <input type="checkbox" id="chk_grafico_linha" onclick="grafico()" checked>
                    <label for="chk_grafico_linha" class="text">Gráfico de Linhas</label>
                </div>
            </div>
            <div id="container_graficos" class="container_dois_grafico">
                <div id="container_grafico_barra" class="div_grafico">
                    <canvas id="grafico_barra"></canvas>
                </div>
                <div id="container_grafico_linha" class="div_grafico">
                    <canvas id="grafico_linha"></canvas>
                </div>
            </div>
        </div>`

        // GRÁFICO GERAL

    let graficoGeral = new Chart(grafico_linha, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
            // {
            //     label: `Demanda média`,
            //     data: data_demandaMedia,
            //     borderColor: 'yellow',
            //     tension: 0.1,
            //     borderWidth: 1
            // },
            // {
            //     label: `Demanda Alta`,
            //     data: data_demandaAlta,
            //     borderColor: 'red',
            //     tension: 0.1,
            //     borderWidth: 1
            // },
            {
                label: `${nomeMaq_legPress}-${idMaq_100}`,
                data: data_100,
                borderColor: corGrafico_100,
                tension: 0.1
            },
            {
                label: `${nomeMaq_101}-${idMaq_101}`,
                data: data_101,
                borderColor: corGrafico_101,
                tension: 0.1
            },
            {
                label: `${nomeMaq_102}-${idMaq_102}`,
                data: data_102,
                borderColor: corGrafico_102,
                tension: 0.1
            },
            {
                label: `${nomeMaq_legPress}-${idMaq_103}`,
                data: data_103,
                borderColor: corGrafico_103,
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}

// LEG PRESS

// DADOS QUE VEM DO BANCO (FUTURAMENTE)
idMaximo++ //VARIÁVEL LIMITADORA DO FOR
let nomeMaq_legPress = 'Leg Press'
let categoria_LegPress = 'Pernas'
let qtdMaq_legPress = 2
let MediaDiario_legPress = 200
let MediaTempo_legPress = '10:00'
let imgMaq_legPress = './img/imgMaq/legPress.png'

let idMaq_100 = 100
let ultimaManutencao_100 = '01/01/2024'
let usosInicial_100 = 0
let totalUsos_100 = usosInicial_100
let tempoInativo_100 = '10:00'
let demanda_100 = 'Baixa'
let corGrafico_100 = '#7000ff'

idMaximo++
let idMaq_103 = 103
let ultimaManutencao_103 = '01/01/2024'
let usosInicial_103 = 0
let totalUsos_103 = usosInicial_103
let tempoInativo_103 = '09:00'
let demanda_103 = 'Baixa'
let corGrafico_103 = '#5A00CC'

// ESTRUTURA PARA O HTML
function mostrarLegPress() {
    main.innerHTML = `
    <div id="container_${idMaq_100}" class="um_container color2">
        <div class="info_maq">
            <div id="nome_${idMaq_100}" class="div_nome_maq text_titulo">
                <span>${nomeMaq_legPress}</span>
            </div>
            <div class="div_idMaq">
                <span class="text_pequeno">Máquina exibida:</span>
                <select id="select_legPress" class="select_maq">
                    <option value="todas">Todas</option>
                    <option value="100">100</option>
                    <option value="103">103</option>
                </select>
            </div>
            <div id="img_${idMaq_100}" class="img_maquina">
                <img src="${imgMaq_legPress}" id="img_leg_press">
            </div>
            <div class="dados_maq">
                <div class="div_dados_maq text_pequeno">
                    <span>Categoria:</span>
                    <span id="categoria_${idMaq_100}">${categoria_LegPress}</span>
                </div>
                <div class="div_dados_maq text_pequeno">
                    <span>Quantidade de máquinas:</span>
                    <span id="qtdMaq_${idMaq_100}">${qtdMaq_legPress}</span>
                </div>
                <div class="div_dados_maq text_pequeno">
                    <span>Ultima manutenção:</span>
                    <span id="ultima_manutencao_${idMaq_100}">${ultimaManutencao_100}</span>
                </div>
                <div class="div_dados_maq text_pequeno">
                    <span>Média de uso diário:</span>
                    <span id="mediaDiario_${idMaq_100}">${MediaDiario_legPress}</span>
                </div>
                <div class="div_dados_maq text_pequeno">
                    <span>Média de tempo inativo:</span>
                    <span id="mediaInativo_${idMaq_100}">${MediaTempo_legPress}</span>
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
                <div class="div_valor text">
                    <span>Total de usos:</span>
                    <span id="total_usos_${idMaq_100}">${totalUsos_100}</span>
                </div>
                <div class="div_valor text">
                    <span>Tempo inativo:</span>
                    <span id="tempo_inativo_${idMaq_100}">${tempoInativo_100}</span>
                </div>
                <div class="div_valor text">
                    <span>Demanda da máquina:</span>
                    <span id="span_demanda_${idMaq_100}">${demanda_100}</span>
                </div>
            </div>
        </div>
    </div>`

    // LEG PRESS
    let graficoLegPress = new Chart(grafico_100, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `${nomeMaq_legPress}-${idMaq_100}`,
                data: data_100,
                borderWidth: 4,
                borderColor: corGrafico_100
            },
            {
                label: `${nomeMaq_legPress}-${idMaq_103}`,
                data: data_103,
                borderWidth: 4,
                borderColor: corGrafico_103
            }
            ],
            options: {}
        }
    })
}


// SUPINO INCLINADO

// DADOS QUE VEM DO BANCO
idMaximo++ //VARIÁVEL LIMITADORA DO FOR
let nomeMaq_101 = 'Supino Inclinado'
let categoria_101 = 'Peito'
let qtdMaq_supinoInclinado = 1
let MediaDiario_101 = 500
let MediaTempo_101 = '1:00'

let idMaq_101 = 101
let ultimaManutencao_101 = '10/04/2024'
let usosInicial_101 = 0
let totalUsos_101 = usosInicial_101
let tempoInativo_101 = '6:00'
let demanda_101 = 'Alta'
let imgMaq_101 = './img/imgMaq/supinoInclinado.webp'
let corGrafico_101 = '#ff9900'

// ESTRUTURA PARA O HTML
function mostrarSupinoInclinado() {
    main.innerHTML = `
    <div id="container_${idMaq_101}" class="um_container color2">
        <div class="info_maq">
            <div id="nome_${idMaq_101}" class="div_nome_maq text_titulo">
                <span>${nomeMaq_101}</span>
            </div>
            <div class="div_idMaq">
                <span class="text_pequeno">Máquina exibida:</span>
                <select id="select_legPress" class="select_maq">
                    <option value="todas">Todas</option>
                    <option value="101">101</option>
                </select>
            </div>
            <div id="img_${idMaq_101}" class="img_maquina">
                <img src="${imgMaq_101}" id="img-supino">
            </div>
            <div class="dados_maq">
                <div class="div_dados_maq text_pequeno">
                    <span>Categoria:</span>
                    <span id="categoria_${idMaq_101}">${categoria_101}</span>
                </div>
                <div class="div_dados_maq text_pequeno">
                    <span>Quantidade de máquinas:</span>
                    <span id="qtdMaq_${nomeMaq_101}">${qtdMaq_supinoInclinado}</span>
                </div>
                <div class="div_dados_maq text_pequeno">
                    <span>Ultima manutenção:</span>
                    <span id="ultima_manutencao_${idMaq_101}">${ultimaManutencao_101}</span>
                </div>
                <div class="div_dados_maq text_pequeno">
                    <span>Média de uso diário:</span>
                    <span id="mediaDiario_${idMaq_101}">${MediaDiario_101}</span>
                </div>
                <div class="div_dados_maq text_pequeno">
                    <span>Média de tempo inativo:</span>
                    <span id="mediaInativo_${idMaq_101}">${MediaTempo_101}</span>
                </div>
            </div>
        </div>
        <div id="index_${idMaq_101}" class="index_maq">
            <div class="container_grafico">
                <div class="grafico_maq">
                    <canvas id="grafico_${idMaq_101}"></canvas>
                </div>
            </div>
            <div class="container_valor">
                <div class="div_valor text">
                    <span>Total de usos:</span>
                    <span id="total_usos_${idMaq_101}">${totalUsos_101}</span>
                </div>
                <div class="div_valor text">
                    <span>Tempo inativo:</span>
                    <span id="tempo_inativo_${idMaq_101}">${tempoInativo_101}</span>
                </div>
                <div class="div_valor text">
                    <span>Demanda da máquina:</span>
                    <span id="span_demanda_${idMaq_101}">${demanda_101}</span>
                </div>
            </div>
        </div>
    </div>`

    // SUPINO INCLINADO
    let graficoSupinoInclinado = new Chart(grafico_101, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `${nomeMaq_101}-${idMaq_101}`,
                data: data_101,
                borderWidth: 4,
                borderColor: corGrafico_101
            }],
            options: {}
        }
    })
}

// SMITH

// DADOS QUE VEM DO BANCO
idMaximo++ //VARIÁVEL LIMITADORA DO FOR
let nomeMaq_102 = 'Smith'
let categoria_102 = 'Pernas'
let qtdMaq_smith = 1
let MediaDiario_102 = 300
let MediaTempo_102 = '14:00'

let idMaq_102 = 102
let ultimaManutencao_102 = '15/01/2024'
let usosInicial_102 = 0
let totalUsos_102 = usosInicial_102
let tempoInativo_102 = '16:00'
let demanda_102 = 'Média'
let imgMaq_102 = './img/imgMaq/smith.png'
let corGrafico_102 = 'green'

// ESTRUTURA PARA O HTML
function mostrarSmith() {
    main.innerHTML = `
    <div id="container_${idMaq_102}" class="um_container color2">
        <div class="info_maq">
            <div id="nome_${idMaq_102}" class="div_nome_maq text_titulo">
                <span>${nomeMaq_102}</span>
            </div>
            <div class="div_idMaq">
                <span class="text_pequeno">Máquina exibida:</span>
                <select id="select_legPress" class="select_maq">
                    <option value="todas">Todas</option>
                    <option value="102">102</option>
                </select>
            </div>
            <div id="img_${idMaq_102}" class="img_maquina">
                <img src="${imgMaq_102}" id="img_leg_press">
            </div>
            <div class="dados_maq">
                <div class="div_dados_maq text_pequeno">
                    <span>Categoria:</span>
                    <span id="categoria_${idMaq_102}">${categoria_102}</span>
                </div>
                <div class="div_dados_maq text_pequeno">
                    <span>Quantidade de máquinas:</span>
                    <span id="qtdMaq_${nomeMaq_102}">${qtdMaq_smith}</span>
                </div>
                <div class="div_dados_maq text_pequeno">
                    <span>Ultima manutenção:</span>
                    <span id="ultima_manutencao_${idMaq_102}">${ultimaManutencao_102}</span>
                </div>
                <div class="div_dados_maq text_pequeno">
                    <span>Média de uso diário:</span>
                    <span id="mediaDiario_${idMaq_102}">${MediaDiario_102}</span>
                </div>
                <div class="div_dados_maq text_pequeno">
                    <span>Média de tempo inativo:</span>
                    <span id="mediaInativo_${idMaq_102}">${MediaTempo_102}</span>
                </div>
            </div>
        </div>
        <div id="index_${idMaq_102}" class="index_maq">
            <div class="container_grafico">
                <div class="grafico_maq">
                    <canvas id="grafico_${idMaq_102}"></canvas>
                </div>
            </div>
            <div class="container_valor">
                <div class="div_valor text">
                    <span>Total de usos:</span>
                    <span id="total_usos_${idMaq_102}">${totalUsos_102}</span>
                </div>
                <div class="div_valor text">
                    <span>Tempo inativo:</span>
                    <span id="tempo_inativo_${idMaq_102}">${tempoInativo_102}</span>
                </div>
                <div class="div_valor text">
                    <span>Demanda da máquina:</span>
                    <span id="span_demanda_${idMaq_102}">${demanda_102}</span>
                </div>
            </div>
        </div>
    </div>`

    // SMITH
    let graficoSmith = new Chart(grafico_102, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `${nomeMaq_102}-${idMaq_102}`,
                data: data_102,
                borderWidth: 4,
                borderColor: corGrafico_102
            }],
            options: {}
        }
    })
}