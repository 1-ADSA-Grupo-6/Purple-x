
function abrirNotificações() {
    let divAlerta = document.getElementById('alerta');
    divAlerta.style.display = 'block';
    popUp();
}

function popUp() {
    let avisosLaranja_100 = document.getElementsByClassName('aviso_laranja_100');
    let avisosLaranja_101 = document.getElementsByClassName('aviso_laranja_101');
    let avisosLaranja_102 = document.getElementsByClassName('aviso_laranja_102');
    let avisosLaranja_104 = document.getElementsByClassName('aviso_laranja_104');
    let avisosLaranja_105 = document.getElementsByClassName('aviso_laranja_105');
    let avisosLaranja_106 = document.getElementsByClassName('aviso_laranja_106');
    let avisosVermelho_100 = document.getElementsByClassName('aviso_vermelho_100');
    let avisosVermelho_101 = document.getElementsByClassName('aviso_vermelho_101');
    let avisosVermelho_102 = document.getElementsByClassName('aviso_vermelho_102');
    let avisosVermelho_104 = document.getElementsByClassName('aviso_vermelho_104');
    let avisosVermelho_105 = document.getElementsByClassName('aviso_vermelho_105');
    let avisosVermelho_106 = document.getElementsByClassName('aviso_vermelho_106');

    let textoAlerta = document.getElementById('alerta_texto');


    if (demanda_100 != "Média" && demanda_100 != "Alta"
        && demanda_101 != "Média" && demanda_101 != "Alta"
        && demanda_102 != "Média" && demanda_102 != "Alta"
        && demanda_103 != "Média" && demanda_103 != "Alta"
        && demanda_104 != "Média" && demanda_104 != "Alta"
        && demanda_105 != "Média" && demanda_105 != "Alta"
        && demanda_106 != "Média" && demanda_106 != "Alta"
        && demanda_107 != "Média" && demanda_107 != "Alta"
    ) {
        hideElements(avisosLaranja_100);
        hideElements(avisosLaranja_101);
        hideElements(avisosLaranja_102);
        hideElements(avisosLaranja_104);
        hideElements(avisosLaranja_105);
        hideElements(avisosLaranja_106);
        hideElements(avisosVermelho_100);
        hideElements(avisosVermelho_101);
        hideElements(avisosVermelho_102);
        hideElements(avisosVermelho_104);
        hideElements(avisosVermelho_105);
        hideElements(avisosVermelho_106);
        textoAlerta.style.display = 'block';
    } else {
        textoAlerta.style.display = 'none';
        div_circulo.style.display = 'flex'
    }

    if (qtdDemandaMedia > 0 && qtdDemandaAlta <= 0) {
        circulo_alerta.style.backgroundColor = '#ff8c00'
    }
    else if (qtdDemandaAlta > 0) {
        circulo_alerta.style.backgroundColor = 'red'
    }

    if (demanda_100 == "Média" && validarAlertaMedia_100) {
        validarAlertaMedia_100 = false
        showElements(avisosLaranja_100);
        hideElements(avisosVermelho_100);
        alerta.style.display = 'flex'
    } else if (demanda_100 == "Alta" && validarAlertaAlta_100) {
        validarAlertaAlta_100 = false
        showElements(avisosVermelho_100);
        hideElements(avisosLaranja_100);
        alerta.style.display = 'flex'
    }

    if (demanda_101 == "Média" && validarAlertaMedia_101) {
        validarAlertaMedia_101 = false
        showElements(avisosLaranja_101);
        hideElements(avisosVermelho_101);
        alerta.style.display = 'flex'
    } else if (demanda_101 == "Alta" && validarAlertaAlta_101) {
        validarAlertaAlta_101 = false
        showElements(avisosVermelho_101);
        hideElements(avisosLaranja_101);
        alerta.style.display = 'flex'
    }

    if (demanda_102 == "Média" && validarAlertaMedia_102) {
        validarAlertaMedia_102 = false
        showElements(avisosLaranja_102);
        hideElements(avisosVermelho_102);
        alerta.style.display = 'flex'
    } else if (demanda_102 == "Alta" && validarAlertaAlta_102) {
        validarAlertaAlta_102 = false
        showElements(avisosVermelho_102);
        hideElements(avisosLaranja_102);
        alerta.style.display = 'flex'
    }

    if (demanda_104 == "Média" && validarAlertaMedia_104) {
        validarAlertaMedia_104 = false
        showElements(avisosLaranja_104);
        hideElements(avisosVermelho_104);
        alerta.style.display = 'flex'
    } else if (demanda_104 == "Alta" && validarAlertaAlta_104) {
        validarAlertaAlta_104 = false
        showElements(avisosVermelho_104);
        hideElements(avisosLaranja_104);
        alerta.style.display = 'flex'
    }

    if (demanda_105 == "Média" && validarAlertaMedia_105) {
        validarAlertaMedia_105 = false
        showElements(avisosLaranja_105);
        hideElements(avisosVermelho_105);
        alerta.style.display = 'flex'
    } else if (demanda_105 == "Alta" && validarAlertaAlta_105) {
        validarAlertaAlta_105 = false
        showElements(avisosVermelho_105);
        hideElements(avisosLaranja_105);
        alerta.style.display = 'flex'
    }

    if (demanda_106 == "Média" && validarAlertaMedia_106) {
        validarAlertaMedia_106 = false
        showElements(avisosLaranja_106);
        hideElements(avisosVermelho_106);
        alerta.style.display = 'flex'
    } else if (demanda_106 == "Alta" && validarAlertaAlta_106) {
        validarAlertaAlta_106 = false
        showElements(avisosVermelho_106);
        hideElements(avisosLaranja_106);
        alerta.style.display = 'flex'
    }
}

setInterval(function () {
    popUp();
}, tempoSetInterval);


function hideElements(elements) {
    for (let contador = 0; contador < elements.length; contador++) { /*Enquanto contador for menor que a quantidade de elementos ele vai rodar o for*/
        elements[contador].style.display = 'none'; /*no elemento x do contador vai ser aplicado o estilo x*/
    }
}
function showElements(elements) {
    for (let contador2 = 0; contador2 < elements.length; contador2++) {
        elements[contador2].style.display = 'block';
    }
}

function fecharNotificacoes() {
    let divAlerta = document.getElementById('alerta');
    divAlerta.style.display = 'none';
}


/* showElements uma função que facilite a exibição de elementos HTML de uma lista. Essa função recebe como entrada uma lista de elementos e, em seguida, itera sobre essa lista, alterando o estilo de cada elemento para torná-lo visível na página da web. */
/*"Hidden elements" se refere a elementos HTML que estão ocultos na página da web e, portanto, não são visíveis para o usuário, aqui ela é uma função que foi definida para simplificar o código.*/