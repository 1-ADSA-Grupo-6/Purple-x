function controle() {
    if (ativar_controle.checked) {
        control.style.display = 'flex'
    }
    else {
        control.style.display = 'none'
    }
}

function filtro() {
    let categoria = select_categoria.value

    if (categoria != '') {
        div_check.style.display = 'block'
    }

    if (categoria == '') {
        chk_peito.style.display = 'none'
        chk_braco.style.display = 'none'
        chk_costas.style.display = 'none'
        chk_pernas.style.display = 'none'
    }
    else if (categoria == 'todos') {
        chk_peito.style.display = 'block'
        chk_braco.style.display = 'block'
        chk_costas.style.display = 'block'
        chk_pernas.style.display = 'block'
    }
    else if (categoria == 'peito') {
        chk_peito.style.display = 'block'
        chk_braco.style.display = 'none'
        chk_costas.style.display = 'none'
        chk_pernas.style.display = 'none'
    }
    else if (categoria == 'braco') {
        chk_peito.style.display = 'none'
        chk_braco.style.display = 'block'
        chk_costas.style.display = 'none'
        chk_pernas.style.display = 'none'
    }
    else if (categoria == 'costas') {
        chk_peito.style.display = 'none'
        chk_braco.style.display = 'none'
        chk_costas.style.display = 'block'
        chk_pernas.style.display = 'none'
    }
    else if (categoria == 'perna') {
        chk_peito.style.display = 'none'
        chk_braco.style.display = 'none'
        chk_costas.style.display = 'none'
        chk_pernas.style.display = 'block'
    }
}

function grafico() {
    if (ativar_grafico.checked) {
        main_grafico_geral.style.display = 'flex'
    }
    else {
        main_grafico_geral.style.display = 'none'
    }

    if (chk_grafico_barra.checked) {
        container_grafico_barra.style.display = 'flex'
    }
    else {
        container_grafico_barra.style.display = 'none'
    }

    if (chk_grafico_linha.checked) {
        container_grafico_linha.style.display = 'flex'
    }
    else {
        container_grafico_linha.style.display = 'none'
    }
}