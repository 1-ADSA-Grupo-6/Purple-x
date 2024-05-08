let idMaximo = 99 //VARIÁVEL LIMITADORA DO FOR
let demandaMedia = 5
let demandaAlta = 10

let nomeMaq_99 = 'Todas Máquinas'

// <!-- GRÁFICO GERAL -->
header_main.innerHTML += `
<main id="main_graficoGeral">
    <div id="container_grafico_geral">
        <div id="container_graficos" class="container_dois_grafico">
            <div id="container_grafico_linha" class="div_grafico">
                <canvas id="grafico_linha"></canvas>
            </div>
        </div>
    </div>
</main>`

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
header_main.innerHTML += `
<main id="main_legPress">
    <div id="container_${idMaq_100}" class="container_maq color2">
        <div class="info_maq">
            <div id="nome_${idMaq_100}" class="div_nome_maq text_titulo">
                <span>${nomeMaq_legPress}</span>
            </div>
            <div class="div_idMaq">
                <span class="">Máquina exibida:</span>
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
                <div class="div_dados_maq ">
                    <span>Categoria:</span>
                    <span id="categoria_${idMaq_100}">${categoria_LegPress}</span>
                </div>
                <div class="div_dados_maq ">
                    <span>Quantidade de máquinas:</span>
                    <span id="qtdMaq_${idMaq_100}">${qtdMaq_legPress}</span>
                </div>
                <div class="div_dados_maq ">
                    <span>Ultima manutenção:</span>
                    <span id="ultima_manutencao_${idMaq_100}">${ultimaManutencao_100}</span>
                </div>
                <div class="div_dados_maq ">
                    <span>Média de uso diário:</span>
                    <span id="mediaDiario_${idMaq_100}">${MediaDiario_legPress}</span>
                </div>
                <div class="div_dados_maq ">
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
                <div class="div_valor ">
                    <span>Total de usos:</span>
                    <span id="total_usos_${idMaq_100}" class="green">${totalUsos_100}</span>
                </div>
                <div class="div_valor ">
                    <span>Tempo inativo:</span>
                    <span id="tempo_inativo_${idMaq_100}">${tempoInativo_100}</span>
                </div>
                <div class="div_valor ">
                    <span>Demanda da máquina:</span>
                    <span id="span_demanda_${idMaq_100}" class="green">${demanda_100}</span>
                </div>
            </div>
        </div>
    </div>
</main>`

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
let demanda_101 = 'Baixa'
let imgMaq_101 = './img/imgMaq/supinoInclinado.webp'
let corGrafico_101 = '#ff9900'

// ESTRUTURA PARA O HTML
header_main.innerHTML += `
<main id="main_supinoInclinado">
    <div id="container_${idMaq_101}" class="container_maq color2">
        <div class="info_maq">
            <div id="nome_${idMaq_101}" class="div_nome_maq text_titulo">
                <span>${nomeMaq_101}</span>
            </div>
            <div class="div_idMaq">
                <span class="">Máquina exibida:</span>
                <select id="select_legPress" class="select_maq">
                    <option value="todas">Todas</option>
                    <option value="101">101</option>
                </select>
            </div>
            <div id="img_${idMaq_101}" class="img_maquina">
                <img src="${imgMaq_101}" id="img-supino">
            </div>
            <div class="dados_maq">
                <div class="div_dados_maq ">
                    <span>Categoria:</span>
                    <span id="categoria_${idMaq_101}">${categoria_101}</span>
                </div>
                <div class="div_dados_maq ">
                    <span>Quantidade de máquinas:</span>
                    <span id="qtdMaq_${nomeMaq_101}">${qtdMaq_supinoInclinado}</span>
                </div>
                <div class="div_dados_maq ">
                    <span>Ultima manutenção:</span>
                    <span id="ultima_manutencao_${idMaq_101}">${ultimaManutencao_101}</span>
                </div>
                <div class="div_dados_maq ">
                    <span>Média de uso diário:</span>
                    <span id="mediaDiario_${idMaq_101}">${MediaDiario_101}</span>
                </div>
                <div class="div_dados_maq ">
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
                <div class="div_valor ">
                    <span>Total de usos:</span>
                    <span id="total_usos_${idMaq_101}" class="green">${totalUsos_101}</span>
                </div>
                <div class="div_valor ">
                    <span>Tempo inativo:</span>
                    <span id="tempo_inativo_${idMaq_101}">${tempoInativo_101}</span>
                </div>
                <div class="div_valor ">
                    <span>Demanda da máquina:</span>
                    <span id="span_demanda_${idMaq_101}" class="green">${demanda_101}</span>
                </div>
            </div>
        </div>
    </div>
</main>`

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
let demanda_102 = 'Baixa'
let imgMaq_102 = './img/imgMaq/smith.png'
let corGrafico_102 = 'green'

// ESTRUTURA PARA O HTML
header_main.innerHTML += `
<main id="main_smith">
    <div id="container_${idMaq_102}" class="container_maq color2">
        <div class="info_maq">
            <div id="nome_${idMaq_102}" class="div_nome_maq text_titulo">
                <span>${nomeMaq_102}</span>
            </div>
            <div class="div_idMaq">
                <span class="">Máquina exibida:</span>
                <select id="select_legPress" class="select_maq">
                    <option value="todas">Todas</option>
                    <option value="102">102</option>
                </select>
            </div>
            <div id="img_${idMaq_102}" class="img_maquina">
                <img src="${imgMaq_102}" id="img_leg_press">
            </div>
            <div class="dados_maq">
                <div class="div_dados_maq ">
                    <span>Categoria:</span>
                    <span id="categoria_${idMaq_102}">${categoria_102}</span>
                </div>
                <div class="div_dados_maq ">
                    <span>Quantidade de máquinas:</span>
                    <span id="qtdMaq_${nomeMaq_102}">${qtdMaq_smith}</span>
                </div>
                <div class="div_dados_maq ">
                    <span>Ultima manutenção:</span>
                    <span id="ultima_manutencao_${idMaq_102}">${ultimaManutencao_102}</span>
                </div>
                <div class="div_dados_maq ">
                    <span>Média de uso diário:</span>
                    <span id="mediaDiario_${idMaq_102}">${MediaDiario_102}</span>
                </div>
                <div class="div_dados_maq ">
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
                <div class="div_valor ">
                    <span>Total de usos:</span>
                    <span id="total_usos_${idMaq_102}" class="green">${totalUsos_102}</span>
                </div>
                <div class="div_valor ">
                    <span>Tempo inativo:</span>
                    <span id="tempo_inativo_${idMaq_102}">${tempoInativo_102}</span>
                </div>
                <div class="div_valor ">
                    <span>Demanda da máquina:</span>
                    <span id="span_demanda_${idMaq_102}" class="green">${demanda_102}</span>
                </div>
            </div>
        </div>
    </div>
</main>`

// VARIÁVEIS PARA O GRÁFICO POR CATEGORIA
let totalUsosPeito = totalUsos_101
let totalUsosBraco = ''
let totalUsosCostas = ''
let totalUsosPerna = totalUsos_100 + totalUsos_102 + totalUsos_103