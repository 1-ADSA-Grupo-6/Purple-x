function popUp() {
    let avisosLaranja_100 = document.getElementsByClassName('aviso_laranja_100');
    let avisosLaranja_101 = document.getElementsByClassName('aviso_laranja_101');
    let avisosLaranja_102 = document.getElementsByClassName('aviso_laranja_102');
    let avisosVermelho_100 = document.getElementsByClassName('aviso_vermelho_100');
    let avisosVermelho_101 = document.getElementsByClassName('aviso_vermelho_101');
    let avisosVermelho_102 = document.getElementsByClassName('aviso_vermelho_102');

    hideElements(avisosLaranja_100); /*"Hidden elements" se refere a elementos HTML que estão ocultos na página da web e, portanto, não são visíveis para o usuário, aqui ela é uma função que foi definida para simplificar o código.*/
    hideElements(avisosLaranja_101);
    hideElements(avisosLaranja_102);
    hideElements(avisosVermelho_100);
    hideElements(avisosVermelho_101);
    hideElements(avisosVermelho_102);


    if (demanda_100 == "Média") {
        showElements(avisosLaranja_100); /* showElements uma função que facilite a exibição de elementos HTML de uma lista. Essa função recebe como entrada uma lista de elementos e, em seguida, itera sobre essa lista, alterando o estilo de cada elemento para torná-lo visível na página da web. */
    } else if (demanda_100 == "Alta") {
        showElements(avisosVermelho_100);
    }

    if (demanda_101 == "Média") {
        showElements(avisosLaranja_101);
    } else if (demanda_101 == "Alta") {
        showElements(avisosVermelho_101);
    }

    if (demanda_102 == "Média") {
        showElements(avisosLaranja_102);
    } else if (demanda_102 == "Alta") {
        showElements(avisosVermelho_102);
    }

}

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

setInterval(function () {
    popUp();
}, 1500);

/*showElements exibe os elementos
hideElements oculta os elementos
*/