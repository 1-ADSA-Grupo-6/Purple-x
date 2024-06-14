let empresas = []
function obterEmpresas() {
    fetch("/empresas/obterEmpresas", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                empresas = json
                console.log("Empresas:", empresas);
            });
        } else {
            console.log("Houve um erro ao tentar obter as empresas!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }
    }).catch(function (erro) {
        console.log("Erro na requisição:", erro);
    });
}

// function login() {
//     const emailVar = emailInput.value;
//     const senhaVar = senhaInput.value;

//     if (emailVar == "" || senhaVar == "") {
//         div_erro_login.innerHTML = `
//         Preencha todos os campos para realizar o login!`
//         return false;
//     }
//     fetch("/usuarios/autenticar", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             emailServer: emailVar,
//             senhaServer: senhaVar,
//         })
//     }).then(function (resposta) {
//         if (resposta.ok) {
//             console.log(resposta);

//             resposta.json().then(json => {
//                 console.log('Usuario:', json);
//                 sessionStorage.EMAIL_USUARIO = json.email;
//                 sessionStorage.NOME_USUARIO = json.nomeCompleto;
//                 sessionStorage.ID_USUARIO = json.idUsuario;
//                 sessionStorage.ACADEMIA = json.fkAcademia;
//                 div_erro_login.innerHTML = `<span style="color: #007A33;">Login realizado com sucesso!</span>`
//                 setTimeout(() => {
//                     window.location = "dashboard.html";
//                 }, "600");
//             });

//         } else {

//             div_erro_login.innerHTML = `
//             As credenciais estão incorretas, tente novamente!`

//             resposta.text().then(texto => {
//                 console.error(texto);
//             });
//         }

//     }).catch(function (erro) {
//         console.log(erro);
//     })

//     return false;
// }



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
