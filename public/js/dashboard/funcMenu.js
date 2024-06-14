function esconderMenu() {
    menu_lateral.innerHTML = `
        <div id="esconder_menu" class="div_menu_oculto" onclick="mostrarMenu()">
            <div id="logo" class="menu_icon">
                <img src="../assets/dashboard/icon_exibir.png" class="lateral_icon">
            </div>
            <div class="menu_func">
                <span>Exibir o menu lateral</span>
            </div>
        </div>`
    menu_lateral.classList.add('menu_oculto')
    carrocel.style.width = '95.2%'
    carrocel.style.marginLeft = '4.8%'
}
function mostrarMenu() {
    menu_lateral.classList.remove('menu_oculto')
    carrocel.style.width = '100%'
    carrocel.style.marginLeft = '0%'
    menu_lateral.innerHTML = `
    <div id="container_menu_lateral">
        <div class="menu_purple_x">
            <div id="logo" class="menu_icon">
                <img src="../assets/dashboard/logo.png" class="logo">
            </div>
            <div class="menu_titulo">
                <span>Purple-X</span>
            </div>
        </div>
        <div class="menu" onclick="esconderMenu()">
            <div id="esconder_menu" class="menu_icon">
                <img src="../assets/dashboard/icon_ocultar.png" class="lateral_icon">
            </div>
            <div class="menu_func">
                <span>Ocultar menu lateral</span>
            </div>
        </div>
        <div class="menu" onclick="removerMaquina()">
            <div id="remover_maq" class="menu_icon">
                <img src="../assets/dashboard/icon-gym.png" class="lateral_icon">
            </div>
            <div class="menu_func">
                <span>Gerenciar Máquinas</span>
            </div>
        </div>
        <div class="menu" onclick="abrirNotificações()">
            <div id="sino" class="menu_icon">
                <img src="../assets/dashboard/sino.png" class="lateral_icon">
                <div id="divNotificacao">
                    <!-- <p>●</p> -->
                    <div id="div_circulo">
                        <div id="circulo_alerta"></div>
                    </div>
                </div>
            </div>
            <div class="menu_func">
                <span>Exibir Notificações</span>
            </div>
        </div>
    </div>
    <div class="menu_logout">
        <a href="../Login e Cadastro/login.html">
            <div id="logout" class="menu_icon">
                <img src="../assets/dashboard/door.png" class="lateral_icon">
            </div>
            <div class="menu_func">
                <span>Logout</span>
            </div>
        </a>
    </div>`
}

function abrirNotificações() {
    alerta.style.display = 'flex';
}

function fecharNotificacoes() {
    alerta.style.display = 'none';
}

function removerMaquina() {
    window.location.href = 'removerMaquina.html';
}