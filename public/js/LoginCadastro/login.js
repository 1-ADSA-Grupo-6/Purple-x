// A FUNÇÃO ONLOAD FAZ COM QUE ESSE CÓDIGO SEJA CARREGADO PRIMEIRO NA PAGINA -- EVITA TER QUE CLICAR MULTIPLAS VEZES NO BOTAO 
window.onload = function() {
    const botao = document.getElementById("botaologin");
    let maximaTentativa = 4;
    let tentativas = 0;

    botao.onclick = function () {
        const email = document.getElementById('emailInput').value;
        const senha = document.getElementById('senhaInput').value;
        tentativas++;
        if (email !== "purple.x@gmail.com" || senha !== "123456") {
            if (tentativas >= maximaTentativa) {
                let modalBloqueado = document.getElementById("modalBloquado");
                let btnFecharModal = modalBloqueado.getElementsByClassName("close")[0];
                let botaoDesbloquear = modalBloqueado.querySelector('#desbloqueio');
                modalBloqueado.style.display = "block";
                btnFecharModal.onclick = function () {
                    modalBloqueado.style.display = "none";
                }
                window.onclick = function (event) {
                    if (event.target == modalBloqueado) {
                        modalBloqueado.style.display = "none";
                    }
                }
                botaoDesbloquear.onclick = function () {
                    modalBloqueado.style.display = "none";
                };
            } else {
                let modal = document.getElementById("myModal");
                let btnFecharModal = modal.getElementsByClassName("close")[0];
                let botaoOk = modal.querySelector('#botaoFinal');
                modal.style.display = "block";
                btnFecharModal.onclick = function () {
                    modal.style.display = "none";
                }
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
                botaoOk.onclick = function () {
                    modal.style.display = "none";
                };
            }
        } else if (email === "purple.x@gmail.com" && senha === "123456") {
            window.location.href = "../Dashboard/index.html";
        }
    };
};
