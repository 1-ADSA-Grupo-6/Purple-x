function esconderMenu() {
    menu_lateral.innerHTML = `
        <div id="esconder_menu" class="fixo_oculto" onclick="mostrarMenu()">
        <img src="./img/icon-eye.png" class="lateral_icon">
        </div>`
    menu_lateral.classList.add('hide_menu_lateral')
}
function mostrarMenu() {
    menu_lateral.classList.remove('hide_menu_lateral')
    menu_lateral.innerHTML = `
            <div id="help" class="fixo">
                <img src="./img/menu.png" class="lateral_icon">
            </div>
            <div id="esconder_menu" class="fixo">
            <input type="checkbox" id="chk_ocultar" class="oculto">
            <label for="chk_ocultar" style="height: 100%; width: 100%; display: flex; justify-content: center; align-items: center;">
            <img src="./img/icon-eye.png" class="lateral_icon" onclick="esconderMenu()">
            </label>
                </div>
            <!-- </label> -->
            <div id="trocar_academia" class="fixo">
                <img src="./img/icon-gym.png" class="lateral_icon">
            </div>
            <div id="adicionar_maq" class="fixo">
                <img src="./img/icon-plus.png" class="lateral_icon">
            </div>
            <div id="remover_maq" class="fixo">
                <img src="./img/icon-minus.png" class="lateral_icon">
            </div>
            <div id="help" class="fixo">
                <img src="./img/help.png" class="lateral_icon">
            </div>
            <div id="logout" class="fixo">
                <img src="./img/door.png" class="lateral_icon">
            </div>`
}