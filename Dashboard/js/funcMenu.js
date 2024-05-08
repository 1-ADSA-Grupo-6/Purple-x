function esconderMenu() {
    menu_lateral.innerHTML = `
        <div id="esconder_menu" class="menu_oculto" onclick="mostrarMenu()">
        <img src="./img/icon-eye.png" class="lateral_icon">
        </div>`
    menu_lateral.classList.add('hide_menu_lateral')
    carrocel.style.width = '95.2%'
    carrocel.style.marginLeft = '4.8%'
}
function mostrarMenu() {
    menu_lateral.classList.remove('hide_menu_lateral')
    carrocel.style.width = '100%'
    carrocel.style.marginLeft = '0%'
    menu_lateral.innerHTML = `
        <div id="container_menu_lateral">
            <div id="logo" class="menu">
                <img src="./img/logo.png" class="logo">
            </div>
            <div id="esconder_menu" class="menu" onclick="esconderMenu()">
                <img src="./img/icon-closedEye.png" class="lateral_icon">
            </div>
            <!-- </label> -->
            <div id="trocar_academia" class="menu">
                <img src="./img/icon-gym.png" class="lateral_icon">
            </div>
            <div id="adicionar_maq" class="menu">
                <img src="./img/icon-plus.png" class="lateral_icon">
            </div>
            <div id="remover_maq" class="menu">
                <img src="./img/icon-minus.png" class="lateral_icon">
            </div>
            <!-- <div id="help" class="menu">
                <img src="./img/help.png" class="lateral_icon">
            </div> -->
        </div>
        <a href="../Login e Cadastro/login.html" class="menu">
        <div id="logout">
                <img src="./img/door.png" class="lateral_icon">
            </div>
        </a>`
}