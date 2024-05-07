// USO DO FOR SOMENTE DEPOIS DE CONECTAR COM O BANCO 

// window.onload = function verificarDados() {

//     for (id = 100; id <= idMaximo; id++) {
//         let totalUsos = 1

//         if (totalUsos_102 > 200 && totalUsos_102 <= 500) {
//             total_usos_102.style.color = 'yellow'
//             container_102.style.border = '5px solid yellow'
//         }
//         else if (totalUsos_102 > 500) {
//             total_usos_102.style.color = 'red'
//             um_container.style.border = '5px solid red'
//         }
//         else {
//             total_usos_102.style.color = 'green'
//         }

//         if (demanda_102 == 'Média') {
//             span_demanda_102.style.color = 'yellow'
//         }
//         else if (demanda_102 == 'Alta') {
//             span_demanda_102.style.color = 'red'
//         }
//         else {
//             span_demanda_102.style.color = 'green'
//         }
//     }
// }

function mostrarTodasMaquinas() {
    main_graficoGeral.style.display = 'flex'
    main_legPress.style.display = 'none'
    main_supinoInclinado.style.display = 'none'
    main_smith.style.display = 'none'
}

function mostrarLegPress(){
    main_graficoGeral.style.display = 'none'
    main_legPress.style.display = 'flex'
    main_supinoInclinado.style.display = 'none'
    main_smith.style.display = 'none'
}

function mostrarSupinoInclinado(){
    main_graficoGeral.style.display = 'none'
    main_legPress.style.display = 'none'
    main_supinoInclinado.style.display = 'flex'
    main_smith.style.display = 'none'
}

function mostrarSmith(){
    main_graficoGeral.style.display = 'none'
    main_legPress.style.display = 'none'
    main_supinoInclinado.style.display = 'none'
    main_smith.style.display = 'flex'
}

// ATUALIZAR DADOS CONSTANTEMENTE
function atualizarDados() {
        total_usos_100.innerHTML = totalUsos_100
        total_usos_101.innerHTML = totalUsos_101
        total_usos_102.innerHTML = totalUsos_102
}


setInterval(atualizarDados, 1500) // DEVE SER O MESMO TEMPO DO GRÁFICO 