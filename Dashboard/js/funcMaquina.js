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

function mostrarMaquinas() {

    if (chk_legPress.checked) {
        maq_100.style.display = 'flex'
    }
    else {
        maq_100.style.display = 'none'
    }

    if (chk_supino.checked) {
        maq_101.style.display = 'flex'
    }
    else {
        maq_101.style.display = 'none'
    }

    if (chk_smith.checked) {
        maq_102.style.display = 'flex'
    }
    else {
        maq_102.style.display = 'none'
    }
}