function carregarCarrocel() {
carrocel.innerHTML += `
    <div id="card_todas_maq" class="div_carrocel" onclick="mostrarTodasMaquinas()">
        <div class="titulo_carrocel">
            <span>Todas Máquinas</span>
        </div>
    </div>`

<<<<<<< HEAD
// funcVerificarDados.js FAZ A TROCA DE POSIÇÃO DE CARDS
// MAQUINAS COM DEMANDA ALTA

// LEG PRESS
carrocel.innerHTML += `
    <div id="leg_press_alta" class="div_carrocel oculto alta" onclick="mostrarLegPress()">
        <div class="titulo_carrocel">
            <span>Leg Press</span>
        </div>
    </div>`

// SUPINO INCLINADO
carrocel.innerHTML += `
<div id="supino_inclinado_alta" class="div_carrocel oculto alta" onclick="mostrarSupinoInclinado()">
    <div class="titulo_carrocel">
        <span>Supino<br>Inclinado</span>
    </div>
</div>`

// SMITH
carrocel.innerHTML += `
    <div id="smith_alta" class="div_carrocel oculto alta" onclick="mostrarSmith()">
        <div class="titulo_carrocel">
            <span>Smith</span>
        </div>
    </div>`

// REMADA CONVERGENTE
carrocel.innerHTML += `
    <div id="remada_convergente_alta" class="div_carrocel oculto alta" onclick="mostrarRemadaConvergente()">
        <div class="titulo_carrocel">
            <span>Remada<br>Convergente</span>
        </div>
    </div>`

// BICEPS CONVERGENTE
carrocel.innerHTML += `
<div id="biceps_convergente_alta" class="div_carrocel oculto alta" onclick="mostrarBicepsConvergente()">
    <div class="titulo_carrocel">
        <span>Bíceps<br>Convergente</span>
    </div>
</div>`

// SHOULDER PRESS
carrocel.innerHTML += `
<div id="shoulder_press_alta" class="div_carrocel oculto alta" onclick="mostrarShoulderPress()">
    <div class="titulo_carrocel">
        <span>Shoulder Press</span>
    </div>
</div>`

// MAQUINAS COM DEMANDA MEDIA

// LEG PRESS
carrocel.innerHTML += `
<div id="leg_press_media" class="div_carrocel oculto media" onclick="mostrarLegPress()">
    <div class="titulo_carrocel">
        <span>Leg Press</span>
    </div>
</div>`

// SUPINO INCLINADO
carrocel.innerHTML += `
    <div id="supino_inclinado_media" class="div_carrocel oculto media" onclick="mostrarSupinoInclinado()">
        <div class="titulo_carrocel">
            <span>Supino<br>Inclinado</span>
        </div>
    </div>`

// SMITH
carrocel.innerHTML += `
    <div id="smith_media" class="div_carrocel oculto media" onclick="mostrarSmith()">
        <div class="titulo_carrocel">
            <span>Smith</span>
        </div>
    </div>`

// REMADA CONVERGENTE
carrocel.innerHTML += `
<div id="remada_convergente_media" class="div_carrocel oculto media" onclick="mostrarRemadaConvergente()">
    <div class="titulo_carrocel">
        <span>Remada<br>Convergente</span>
    </div>
</div>`

// BICEPS CONVERGENTE
carrocel.innerHTML += `
<div id="biceps_convergente_media" class="div_carrocel oculto media" onclick="mostrarBicepsConvergente()">
<div class="titulo_carrocel">
    <span>Bíceps<br>Convergente</span>
</div>
</div>`

// SHOULDER PRESS
carrocel.innerHTML += `
<div id="shoulder_press_media" class="div_carrocel oculto media" onclick="mostrarShoulderPress()">
<div class="titulo_carrocel">
    <span>Shoulder Press</span>
</div>
</div>`


// MAQUINAS COM DEMANDA BAIXA

// LEG PRESS
carrocel.innerHTML += `
    <div id="leg_press_baixa" class="div_carrocel baixa" onclick="mostrarLegPress()">
        <div class="titulo_carrocel">
            <span>Leg Press</span>
        </div>
    </div>`

// SUPINO INCLINADO
carrocel.innerHTML += `
    <div id="supino_inclinado_baixa" class="div_carrocel baixa" onclick="mostrarSupinoInclinado()">
        <div class="titulo_carrocel">
            <span>Supino<br>Inclinado</span>
        </div>
    </div>`

// SMITH
carrocel.innerHTML += `
    <div id="smith_baixa" class="div_carrocel baixa" onclick="mostrarSmith()">
        <div class="titulo_carrocel">
            <span>Smith</span>
        </div>
    </div>`

// REMADA CONVERGENTE
carrocel.innerHTML += `
<div id="remada_convergente_baixa" class="div_carrocel baixa" onclick="mostrarRemadaConvergente()">
    <div class="titulo_carrocel">
        <span>Remada<br>Convergente</span>
    </div>
</div>`

// BICEPS CONVERGENTE
carrocel.innerHTML += `
<div id="biceps_convergente_baixa" class="div_carrocel baixa" onclick="mostrarBicepsConvergente()">
<div class="titulo_carrocel">
    <span>Bíceps<br>Convergente</span>
</div>
</div>`

// SHOULDER PRESS
carrocel.innerHTML += `
<div id="shoulder_press_baixa" class="div_carrocel baixa" onclick="mostrarShoulderPress()">
<div class="titulo_carrocel">
    <span>Shoulder Press</span>
</div>
</div>`

//Hack Squat Machine
carrocel.innerHTML += `
<div id="hack_squat_machine_baixa" class="div_carrocel baixa" onclick="mostrarHackSquatMachine()">
<div class="titulo_carrocel">
    <span>Hack Squat Machine</span>
</div>
</div>`

//Abdominal Machine
carrocel.innerHTML += `
<div id="abdominal_machine_baixa" class="div_carrocel baixa" onclick="mostrarAbdominalMachine()">
<div class="titulo_carrocel">
    <span>Abdominal Machine</span>
</div>
</div>`

//Elíptico
carrocel.innerHTML += `
<div id="eliptico_baixa" class="div_carrocel baixa" onclick="mostrarEliptico()">
<div class="titulo_carrocel">
    <span>Elíptico</span>
</div>
</div>`

//Remo
carrocel.innerHTML += `
<div id="remo_baixa" class="div_carrocel baixa" onclick="mostrarRemo()">
<div class="titulo_carrocel">
    <span>Remo</span>
</div>
</div>`

// CARDS DE TESTE
// for (c = idMaximo + 1; c <= idMaximo + 5; c++) {
//     carrocel.innerHTML += `
//         <div class="div_carrocel" onclick="">
//             <div class="titulo_carrocel">
//                 <span>Máquina - ${c}</span>
//             </div>
//         </div>`
// }
=======
    for (let index = 0; index < maquinas.length; index++) {
        carrocel.innerHTML += `
        <div id="card_${maquinas[index].idAparelho}" class="div_carrocel" onclick="selecionarMaquinas()">
            <div class="titulo_carrocel">
                <span>${maquinas[index].nome}</span>
            </div>
        </div>`
        
    }
}
>>>>>>> d2ea1b17e26aa100ddd9b561077cf5122aea4f78

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