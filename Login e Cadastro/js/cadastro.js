function cadastrar() {  
    let btnAbrirModal = document.getElementById("openModal");
    // Seleciona o modal
    let modal = document.getElementById("myModal");
    // Seleciona o botão de fechar do modal
    let btnFecharModal = document.getElementsByClassName("close")[0];
    // Quando o usuário clicar no botão, abra o modal
    btnAbrirModal.onclick = function () {
        modal.style.display = "block";
    }
    // Quando o usuário clicar no botão de fechar, feche o modal
    btnFecharModal.onclick = function () {
        modal.style.display = "none";
    }
    // Quando o usuário clicar fora do modal, feche-o
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}