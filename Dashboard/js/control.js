function controle() {
    if (ativar_controle.checked) {
        control.style.display = 'flex'
    }
    else {
        control.style.display = 'none'
    }
}

function filtro() {
    const categoria = select_categoria.value
    if (categoria != '') {
        div_check.style.display = 'block'

        if (categoria == 'peito') {
            chk_peito.style.display = 'block'
            chk_pernas.style.display = 'none'
        }
        else if (categoria == 'perna') {
            chk_peito.style.display = 'none'
            chk_pernas.style.display = 'block'
        }
    }
    else {
        div_check.style.display = 'none'
    }
}