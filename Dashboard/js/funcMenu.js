function esconderMenu() {
    if (chk_ocultar.checked) {
        menu_lateral.classList.add('hide_menu_lateral')
        menu_lateral.innerHTML = `
        <div id="esconder_menu" class="fixo" onclick="esconderMenu()">
            <input type="checkbox" id="chk_ocultar" >
            <label for="chk_ocultar" class="ocultar_menu">
                <img src="./img/icon-eye.png" class="lateral_icon">
            </label>
        </div>`
    }
    else {
        menu_lateral.classList.remove('hide_menu_lateral')
        menu_lateral.innerHTML = `
        <div id="help" class="menu">
                <img src="./img/menu.png" class="lateral_icon">
            </div>
            <div id="esconder_menu" class="fixo" onclick="esconderMenu()">
                <input type="checkbox" id="chk_ocultar">
                <label for="chk_ocultar" class="ocultar_menu">
                    <img src="./img/icon-eye.png" class="lateral_icon">
                </label>
            </div>
            <div id="trocar_academia" class="fixo">
                <img src="./img/icon-gym.png" class="lateral_icon">
            </div>
            <div id="adicionar_maq" class="fixo">
                <img src="./img/icon-plus.png" class="lateral_icon">
            </div>
            <div id="remover_maq" class="fixo">
                <img src="./img/icon-minus.png" class="lateral_icon">
            </div>
            <div id="help" class="help">
                <img src="./img/help.png" class="lateral_icon">
            </div>
            <div id="logout" class="logout">
                <img src="./img/door.png" class="lateral_icon">
            </div>`
    }
}