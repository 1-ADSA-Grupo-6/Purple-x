// let cMax = 112
// let func_99 = 'mostrarTodasMaquinas()'
// let func_100 = 'mostrarLegPress()'
// let func_101 = 'mostrarSupinoInclinado()'
// let func_102 = 'mostrarSmith()'


// for (c = 99; c <= cMax; c++) {

//     if (c <= 102) {
//         carrocel.innerHTML += `
// <div class="div_carrocel" onclick="${func_$c}">
//         <div class="img_carrocel">
//             <img src="" alt="">
//         </div>
//         <div class="titulo_carrocel">
//             <span>${`nomeMaq_${c}`}</span>
//         </div>
//     </div>`
//     }
//     else {
//         carrocel.innerHTML += `
//         <div class="div_carrocel">
//                 <div class="img_carrocel">
//                     <img src="" alt="">
//                 </div>
//                 <div class="titulo_carrocel">
//                     <span>TESTE</span>
//                 </div>
//             </div>`
//     }
// }


// CARREGA CARDS DAS MÁQUINAS

// GRÁFICO GERAL
carrocel.innerHTML += `
    <div class="div_carrocel" onclick="mostrarTodasMaquinas()">
        <div class="img_carrocel">
            <img src="" alt="">
        </div>
        <div class="titulo_carrocel">
            <span>Todas Máquinas</span>
        </div>
    </div>`

// LEG PRESS
carrocel.innerHTML +=`
    <div class="div_carrocel" onclick="mostrarLegPress()">
        <div class="img_carrocel">
            <img src="" alt="">
        </div>
        <div class="titulo_carrocel">
            <span>Leg Press</span>
        </div>
    </div>`

// SUPINO INCLINADO
carrocel.innerHTML += `
    <div class="div_carrocel" onclick="mostrarSupinoInclinado()">
        <div class="img_carrocel">
            <img src="" alt="">
        </div>
        <div class="titulo_carrocel">
            <span>Supino Inclinado</span>
        </div>
    </div>`

// SMITH
carrocel.innerHTML += `
    <div class="div_carrocel" onclick="mostrarSmith()">
        <div class="img_carrocel">
            <img src="" alt="">
        </div>
        <div class="titulo_carrocel">
            <span>Smith</span>
        </div>
    </div>`

// CARDS DE TESTE
for (c = 1; c <= 10; c++) {
    carrocel.innerHTML += `
        <div class="div_carrocel" onclick="">
            <div class="img_carrocel">
                <img src="" alt="">
            </div>
            <div class="titulo_carrocel">
                <span>TESTE</span>
            </div>
        </div>`
}

// FUNÇÃO SCROLL CARROCEL
let posicaoScroll = 0;

function scrollCarrocel(direction) {
    const tamanhoScroll = carrocel.scrollWidth - carrocel.clientWidth;

    if (direction === 'left' && posicaoScroll > 0) {
        posicaoScroll -= 200;
    } 
    else if (direction === 'right' && posicaoScroll < tamanhoScroll) {
        posicaoScroll += 200;
    }

    // ANIMAÇÃO SCROLL SUAVE
    carrocel.scrollTo({
        top: 0,
        left: posicaoScroll,
        behavior: 'smooth'
    });
}