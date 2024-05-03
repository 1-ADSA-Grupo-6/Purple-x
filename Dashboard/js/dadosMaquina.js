//VARIÁVEL LIMITADORA DO FOR
let idMaximo = 99
let demandaMedia = 200
let demandaAlta = 500

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
let usosInicial_100 = 198
let totalUsos_100 = usosInicial_100 
let tempoInativo_100 = '10:00'
let demanda_100 = 'Baixa'
let corGrafico_100 = '#7000ff'

idMaximo++
let idMaq_103 = 103
let ultimaManutencao_103 = '01/01/2024'
let usosInicial_103 = 190
let totalUsos_103 = usosInicial_103 
let tempoInativo_103 = '09:00'
let demanda_103 = 'Baixa'
let corGrafico_103 = '#5A00CC'

// ESTRUTURA PARA O HTML
body.innerHTML += `
<main id="maq_${idMaq_100}">
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
let usosInicial_101 = 502
let totalUsos_101 = usosInicial_101
let tempoInativo_101 = '6:00'
let demanda_101 = 'Alta'
let imgMaq_101 = './img/imgMaq/supinoInclinado.webp'
let corGrafico_101 = '#ff9900'

// ESTRUTURA PARA O HTML
body.innerHTML += `
<main id="maq_${idMaq_101}">
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
let usosInicial_102 = 342
let totalUsos_102 = usosInicial_102
let tempoInativo_102 = '16:00'
let demanda_102 = 'Média'
let imgMaq_102 = './img/imgMaq/smith.png'
let corGrafico_102 = 'green'

// ESTRUTURA PARA O HTML
body.innerHTML += `
<main id="maq_${idMaq_102}">
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
    </div>
</main>`