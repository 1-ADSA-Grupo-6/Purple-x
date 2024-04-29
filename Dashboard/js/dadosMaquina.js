//VARIÁVEL LIMITADORA DO FOR
let idMaximo = 99

// LEG PRESS

// DADOS QUE VEM DO BANCO (FUTURAMENTE)
idMaximo++ //VARIÁVEL LIMITADORA DO FOR
let idMaq_100 = 100
let nomeMaq_100 = 'Leg Press'
let categoria_100 = 'Pernas'
let dataMediaDiario_100 = 200
let dataMediaTempo_100 = '10:00'
let ultimaManutencao_100 = '01/01/2024'
let totalUsos_100 = 198
let tempoInativo_100 = '10:00'
let demanda_100 = 'Baixa'
let template_musculo_100 = './img/templateMusculo/pernas.png'
let imgMaq_100 = './img/imgMaq/legPress.png'
let corGrafico_100 = '#7000ff'

let idMaq_103 = 103

// ESTRUTURA PARA O HTML
body.innerHTML += `
<main id="maq_${idMaq_100}">
    <div id="container_${idMaq_100}" class="um_container color2">
        <div class="info_maq">
            <div id="img_${idMaq_100}" class="img_maquina">
                <img src="${imgMaq_100}" id="img_leg_press">
            </div>
            <div class="dados_maq">
                <div id="nome_${idMaq_100}" class="div_nome_maq text_titulo">
                    <span>${nomeMaq_100}</span>
                </div>
                <div class="div_dados_maq text_pequeno">
                    <span>Número da máquina:</span>
                    <span id="id_${idMaq_100}">${idMaq_100}</span>
                </div>
                <div class="div_dados_maq text_pequeno">
                    <span>Ultima manutenção:</span>
                    <span id="ultima_manutencao_${idMaq_100}">${ultimaManutencao_100}</span>
                </div>
                <div class="div_dados_maq text_pequeno">
                    <span>Média de uso diário:</span>
                    <span id="mediaDiario_${idMaq_100}">${dataMediaDiario_100}</span>
                </div>
                <div class="div_dados_maq text_pequeno">
                    <span>Média de tempo inativo:</span>
                    <span id="mediaInativo_${idMaq_100}">${dataMediaTempo_100}</span>
                </div>
            </div>
            <div id="musculo_${idMaq_100}" class="div_template_musculos">
                <img src="${template_musculo_100}" class="template_musculos">
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
let idMaq_101 = 101
let nomeMaq_101 = 'Supino Inclinado'
let categoria_101 = 'Peito'
let dataMediaDiario_101 = 500
let dataMediaTempo_101 = '1:00'
let ultimaManutencao_101 = '10/04/2024'
let totalUsos_101 = 502
let tempoInativo_101 = '6:00'
let demanda_101 = 'Alta'
let template_musculo_101 = './img/templateMusculo/peito.png'
let imgMaq_101 = './img/imgMaq/supinoInclinado.webp'
let corGrafico_101 = '#ff9900'

// ESTRUTURA PARA O HTML
body.innerHTML += `
<main id="maq_${idMaq_101}">
    <div id="container_${idMaq_101}" class="um_container color2">
        <div class="info_maq">
            <div id="img_${idMaq_101}" class="img_maquina">
                <img src="${imgMaq_101}" id="img-supino">
            </div>
            <div class="dados_maq">
                <div id="nome_${idMaq_101}" class="div_nome_maq text_titulo">
                    <span>${nomeMaq_101}</span>
                </div>
                <div class="div_dados_maq text_pequeno">
                    <span>Número da máquina:</span>
                    <span id="id_${idMaq_101}">${idMaq_101}</span>
                </div>
                <div class="div_dados_maq text_pequeno">
                    <span>Ultima manutenção:</span>
                    <span id="ultima_manutencao_${idMaq_101}">${ultimaManutencao_101}</span>
                </div>
                <div class="div_dados_maq text_pequeno">
                    <span>Média de uso diário:</span>
                    <span id="mediaDiario_${idMaq_101}">${dataMediaDiario_101}</span>
                </div>
                <div class="div_dados_maq text_pequeno">
                    <span>Média de tempo inativo:</span>
                    <span id="mediaInativo_${idMaq_101}">${dataMediaTempo_101}</span>
                </div>
            </div>
            <div id="musculo_${idMaq_101}" class="div_template_musculos">
                <img src="${template_musculo_101}" class="template_musculos">
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
let idMaq_102 = 102
let nomeMaq_102 = 'Smith'
let categoria_102 = 'Pernas'
let dataMediaDiario_102 = 300
let dataMediaTempo_102 = '14:00'
let ultimaManutencao_102 = '15/01/2024'
let totalUsos_102 = 342
let tempoInativo_102 = '16:00'
let demanda_102 = 'Média'
let template_musculo_102 = './img/templateMusculo/pernas.png'
let imgMaq_102 = './img/imgMaq/smith.png'
let corGrafico_102 = 'green'

// ESTRUTURA PARA O HTML
body.innerHTML += `
<main id="maq_${idMaq_102}">
    <div id="container_${idMaq_102}" class="um_container color2">
        <div class="info_maq">
            <div id="img_${idMaq_102}" class="img_maquina">
                <img src="${imgMaq_102}" id="img_leg_press">
            </div>
            <div class="dados_maq">
                <div id="nome_${idMaq_102}" class="div_nome_maq text_titulo">
                    <span>${nomeMaq_102}</span>
                </div>
                <div class="div_dados_maq text_pequeno">
                    <span>Número da máquina:</span>
                    <span id="id_${idMaq_102}">${idMaq_102}</span>
                </div>
                <div class="div_dados_maq text_pequeno">
                    <span>Ultima manutenção:</span>
                    <span id="ultima_manutencao_${idMaq_102}">${ultimaManutencao_102}</span>
                </div>
                <div class="div_dados_maq text_pequeno">
                    <span>Média de uso diário:</span>
                    <span id="mediaDiario_${idMaq_102}">${dataMediaDiario_102}</span>
                </div>
                <div class="div_dados_maq text_pequeno">
                    <span>Média de tempo inativo:</span>
                    <span id="mediaInativo_${idMaq_102}">${dataMediaTempo_102}</span>
                </div>
            </div>
            <div id="musculo_${idMaq_102}" class="div_template_musculos">
                <img src="${template_musculo_102}" class="template_musculos">
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