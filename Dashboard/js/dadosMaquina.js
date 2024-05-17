let tempoSetInterval = 1500 // TEMPO PARA O setInterval EM MILISSEGUNDOS
let idMaximo = 99 //VARIÁVEL LIMITADORA DO FOR
let demandaMedia = 1 // VARIÁVEL PARA DEFINIR A DEMANDA MÉDIA
let demandaAlta = 2// VARIÁVEL PARA DEFINIR A DEMANDA ALTA
let qtdMaqPeito = 0
let qtdMaqCostas = 0
let qtdMaqBraco = 0
let qtdMaqPernas = 0

// GRÁFICO GERAL
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

// LEG PRESS
// DADOS QUE VEM DO BANCO (FUTURAMENTE)
idMaximo++ //VARIÁVEL LIMITADORA DO FOR
qtdMaqPernas++
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
let corGrafico_100 = '#2C6CBF'

idMaximo++
qtdMaqPernas++
let idMaq_103 = 103
let ultimaManutencao_103 = '01/01/2024'
let usosInicial_103 = 0
let totalUsos_103 = usosInicial_103
let tempoInativo_103 = '09:00'
let demanda_103 = 'Baixa'
let corGrafico_103 = '#59D986'

// ESTRUTURA PARA O HTML
main_alert.innerHTML += `
<main id="main_legPress">
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
                    <span>Média de uso na sexta-feira:</span>
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

// SUPINO INCLINADO
// DADOS QUE VEM DO BANCO
idMaximo++ //VARIÁVEL LIMITADORA DO FOR
qtdMaqPeito++
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
let corGrafico_101 = '#F20574'

// ESTRUTURA PARA O HTML
main_alert.innerHTML += `
<main id="main_supinoInclinado">
    <div id="container_${idMaq_101}" class="container_maq color2">
        <div class="info_maq">
            <div id="nome_${idMaq_101}" class="div_nome_maq text_titulo">
                <span>${nomeMaq_101}</span>
            </div>
            <div class="div_idMaq">
                <span class="">Máquina exibida:</span>
                <select id="select_supinoInclinado" class="select_maq">
                    <option value="${idMaq_101}">${idMaq_101}</option>
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
                    <span>Média de uso na sexta-feira:</span>
                    <span id="mediaDiario_${idMaq_101}">${MediaDiario_101}</span>
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
qtdMaqPernas++
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
let corGrafico_102 = '#84B130'

// ESTRUTURA PARA O HTML
main_alert.innerHTML += `
<main id="main_smith">
    <div id="container_${idMaq_102}" class="container_maq color2">
        <div class="info_maq">
            <div id="nome_${idMaq_102}" class="div_nome_maq text_titulo">
                <span>${nomeMaq_102}</span>
            </div>
            <div class="div_idMaq">
                <span class="">Máquina exibida:</span>
                <select id="select_smith" class="select_maq">
                    <option value="${idMaq_102}">${idMaq_102}</option>
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
                    <span>Média de uso na sexta-feira</span>
                    <span id="mediaDiario_${idMaq_102}">${MediaDiario_102}</span>
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
                    <span>Demanda da máquina:</span>
                    <span id="span_demanda_${idMaq_102}" class="green">${demanda_102}</span>
                </div>
            </div>
        </div>
    </div>
</main>`

// REMADA CONVERGENTE
// DADOS QUE VEM DO BANCO
idMaximo++ //VARIÁVEL LIMITADORA DO FOR
qtdMaqCostas++
let nomeMaq_104 = 'Remada Convergente'
let categoria_104 = 'Costas'
let qtdMaq_remadaConvergente = 2
let MediaDiario_104 = 0
let MediaTempo_104 = ''

let idMaq_104 = 104
let ultimaManutencao_104 = ''
let usosInicial_104 = 0
let totalUsos_104 = usosInicial_104
let tempoInativo_104 = ''
let demanda_104 = 'Baixa'
let imgMaq_104 = './img/imgMaq/RemadaConvergente.png'
let corGrafico_104 = '#DC2D4E'

idMaximo++ //VARIÁVEL LIMITADORA DO FOR
qtdMaqCostas++
let idMaq_107 = 107
let ultimaManutencao_107 = ''
let usosInicial_107 = 0
let totalUsos_107 = usosInicial_104
let tempoInativo_107 = ''
let demanda_107 = 'Baixa'
let imgMaq_107 = './img/imgMaq/remadaConvergente.png'
let corGrafico_107 = '#3F8A40'

// ESTRUTURA PARA O HTML
main_alert.innerHTML += `
<main id="main_remada_convergente">
    <div id="container_${idMaq_104}" class="container_maq color2">
        <div class="info_maq">
            <div id="nome_${idMaq_104}" class="div_nome_maq text_titulo">
                <span>${nomeMaq_104}</span>
            </div>
            <div class="div_idMaq">
                <span class="">Máquina exibida:</span>
                <select id="select_remada_convergente" class="select_maq" onclick="mudarMaquinaExibida()">
                    <option value="todas">Todas</option>
                    <option value="${idMaq_104}">${idMaq_104}</option>
                    <option value="${idMaq_107}">${idMaq_107}</option>
                </select>
            </div>
            <div id="img_${idMaq_104}" class="img_maquina">
                <img src="${imgMaq_104}" id="img_leg_press">
            </div>
            <div class="dados_maq">
                <div class="div_dados_maq ">
                    <span>Categoria:</span>
                    <span id="categoria_${idMaq_104}">${categoria_104}</span>
                </div>
                <div class="div_dados_maq ">
                    <span>Quantidade de máquinas:</span>
                    <span id="qtdMaq_${nomeMaq_104}">${qtdMaq_remadaConvergente}</span>
                </div>
                <div class="div_dados_maq ">
                    <span>Média de uso na sexta-feira:</span>
                    <span id="mediaDiario_${idMaq_104}">${MediaDiario_104}</span>
                </div>
            </div>
        </div>
        <div id="index_${idMaq_104}" class="index_maq">
            <div class="container_grafico">
                <div class="grafico_maq">
                    <canvas id="grafico_${idMaq_104}"></canvas>
                </div>
            </div>
            <div class="container_valor">
                <div class="div_valor ">
                    <span>Total de usos:</span>
                    <span id="total_usos_${idMaq_104}" class="green">${totalUsos_104}</span>
                </div>
                <div class="div_valor ">
                    <span>Demanda da máquina:</span>
                    <span id="span_demanda_${idMaq_104}" class="green">${demanda_104}</span>
                </div>
            </div>
        </div>
    </div>
</main>`

// BICEPS CONVERGENTE
// DADOS QUE VEM DO BANCO
idMaximo++ //VARIÁVEL LIMITADORA DO FOR
qtdMaqBraco++
let nomeMaq_105 = 'Bíceps Convergente'
let categoria_105 = 'Braço'
let qtdMaq_bicepsConvergente = 1
let MediaDiario_105 = 0
let MediaTempo_105 = ''

let idMaq_105 = 105
let ultimaManutencao_105 = ''
let usosInicial_105 = 0
let totalUsos_105 = usosInicial_105
let tempoInativo_105 = ''
let demanda_105 = 'Baixa'
let imgMaq_105 = './img/imgMaq/bicepsConvergente.png'
let corGrafico_105 = '#04D9D9'

// ESTRUTURA PARA O HTML
main_alert.innerHTML += `
<main id="main_biceps_convergente">
    <div id="container_${idMaq_105}" class="container_maq color2">
        <div class="info_maq">
            <div id="nome_${idMaq_105}" class="div_nome_maq text_titulo">
                <span>${nomeMaq_105}</span>
            </div>
            <div class="div_idMaq">
                <span class="">Máquina exibida:</span>
                <select id="select_biceps_convergente" class="select_maq">
                    <option value="${idMaq_105}">${idMaq_105}</option>
                </select>
            </div>
            <div id="img_${idMaq_105}" class="img_maquina">
                <img src="${imgMaq_105}" id="img_leg_press">
            </div>
            <div class="dados_maq">
                <div class="div_dados_maq ">
                    <span>Categoria:</span>
                    <span id="categoria_${idMaq_105}">${categoria_105}</span>
                </div>
                <div class="div_dados_maq ">
                    <span>Quantidade de máquinas:</span>
                    <span id="qtdMaq_${nomeMaq_105}">${qtdMaq_bicepsConvergente}</span>
                </div>
                <div class="div_dados_maq ">
                    <span>Média de uso na sexta-feira:</span>
                    <span id="mediaDiario_${idMaq_105}">${MediaDiario_105}</span>
                </div>
            </div>
        </div>
        <div id="index_${idMaq_105}" class="index_maq">
            <div class="container_grafico">
                <div class="grafico_maq">
                    <canvas id="grafico_${idMaq_105}"></canvas>
                </div>
            </div>
            <div class="container_valor">
                <div class="div_valor ">
                    <span>Total de usos:</span>
                    <span id="total_usos_${idMaq_105}" class="green">${totalUsos_105}</span>
                </div>
                <div class="div_valor ">
                    <span>Demanda da máquina:</span>
                    <span id="span_demanda_${idMaq_105}" class="green">${demanda_105}</span>
                </div>
            </div>
        </div>
    </div>
</main>`

// SHOLDER PRESS
// DADOS QUE VEM DO BANCO
idMaximo++ //VARIÁVEL LIMITADORA DO FOR
qtdMaqBraco++
let nomeMaq_106 = 'Shoulder Press'
let categoria_106 = 'Braço'
let qtdMaq_shoulderPress = 1
let MediaDiario_106 = 0
let MediaTempo_106 = ''

let idMaq_106 = 106
let ultimaManutencao_106 = ''
let usosInicial_106 = 0
let totalUsos_106 = usosInicial_106
let tempoInativo_106 = ''
let demanda_106 = 'Baixa'
let imgMaq_106 = './img/imgMaq/shoulderPress.png'
let corGrafico_106 = '#F20574'

// ESTRUTURA PARA O HTML
main_alert.innerHTML += `
<main id="main_shoulder_press">
    <div id="container_${idMaq_106}" class="container_maq color2">
        <div class="info_maq">
            <div id="nome_${idMaq_106}" class="div_nome_maq text_titulo">
                <span>${nomeMaq_106}</span>
            </div>
            <div class="div_idMaq">
                <span class="">Máquina exibida:</span>
                <select id="select_shoulder_press" class="select_maq">
                    <option value="${idMaq_106}">${idMaq_106}</option>
                </select>
            </div>
            <div id="img_${idMaq_106}" class="img_maquina">
                <img src="${imgMaq_106}" id="img_leg_press">
            </div>
            <div class="dados_maq">
                <div class="div_dados_maq ">
                    <span>Categoria:</span>
                    <span id="categoria_${idMaq_106}">${categoria_106}</span>
                </div>
                <div class="div_dados_maq ">
                    <span>Quantidade de máquinas:</span>
                    <span id="qtdMaq_${nomeMaq_106}">${qtdMaq_bicepsConvergente}</span>
                </div>
                <div class="div_dados_maq ">
                    <span>Média de uso na sexta-feira:</span>
                    <span id="mediaDiario_${idMaq_106}">${MediaDiario_106}</span>
                </div>
            </div>
        </div>
        <div id="index_${idMaq_106}" class="index_maq">
            <div class="container_grafico">
                <div class="grafico_maq">
                    <canvas id="grafico_${idMaq_106}"></canvas>
                </div>
            </div>
            <div class="container_valor">
                <div class="div_valor ">
                    <span>Total de usos:</span>
                    <span id="total_usos_${idMaq_106}" class="green">${totalUsos_106}</span>
                </div>
                <div class="div_valor ">
                    <span>Demanda da máquina:</span>
                    <span id="span_demanda_${idMaq_106}" class="green">${demanda_106}</span>
                </div>
            </div>
        </div>
    </div>
</main>`

// VARIÁVEIS PARA O GRÁFICO POR CATEGORIA
let totalUsosPeito = totalUsos_101
let totalUsosBraco = totalUsos_105 + totalUsos_106
let totalUsosCostas = totalUsos_104
let totalUsosPernas = totalUsos_100 + totalUsos_102 + totalUsos_103
let qtdDemandaMedia = 0
let qtdDemandaAlta = 0

// VARIAVEIS PARA LIMITAR A CONTAGEM DA DEMANDA DO GRÁFICO GERAL
// LEG PRESS
let validarContagemMedia_100 = true
let validarContagemAlta_100 = true
let validarContagemMedia_103 = true
let validarContagemAlta_103 = true
// SUPINO INCLINADO
let validarContagemMedia_101 = true
let validarContagemAlta_101 = true
// SMITH
let validarContagemMedia_102 = true
let validarContagemAlta_102 = true
// REMADA CONVERGENTE
let validarContagemMedia_104 = true
let validarContagemAlta_104 = true
let validarContagemMedia_107 = true
let validarContagemAlta_107 = true
// BICEPS CONVERGENTE
let validarContagemMedia_105 = true
let validarContagemAlta_105 = true
// SHOULDER PRESS
let validarContagemMedia_106 = true
let validarContagemAlta_106 = true

// VARIAVEIS PARA LIMITAR A EXIBIÇÃO DO ALERTA
// LEG PRESS
let validarAlertaMedia_100 = true
let validarAlertaAlta_100 = true
let validarAlertaMedia_103 = true
let validarAlertaAlta_103 = true
// SUPINO INCLINADO
let validarAlertaMedia_101 = true
let validarAlertaAlta_101 = true
// SMITH
let validarAlertaMedia_102 = true
let validarAlertaAlta_102 = true
// REMADA CONVERGENTE
let validarAlertaMedia_104 = true
let validarAlertaAlta_104 = true
let validarAlertaMedia_107 = true
let validarAlertaAlta_107 = true
// BICEPS CONVERGENTE
let validarAlertaMedia_105 = true
let validarAlertaAlta_105 = true
// SHOULDER PRESS
let validarAlertaMedia_106 = true
let validarAlertaAlta_106 = true