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

function cadastrar() {
    let podeCadastrar = false
    const nomeVar = nomeInput.value;
    const token = (tokenInput.value).toUpperCase()
    const telefone = telefoneInput.value
    const emailVar = emailInput.value;
    const senhaVar = txtSenha.value;
    const confirmacaoSenhaVar = txtSenha_confirmation.value;

    if (nomeVar == "" || emailVar == "" || senhaVar == "" || confirmacaoSenhaVar == "") {
        div_erro_cadastro.innerHTML = `Preencha todos os campos para realizar o cadastro!`
        return false;
    }
    else if (senhaVar.length < 5) {
        div_erro_cadastro.innerHTML = `Sua Senha deve ter mais de 5 caracteres para realizar o cadastro!`
        return false;
    }
    else if (confirmacaoSenhaVar != senhaVar) {
        div_erro_cadastro.innerHTML = `Os campos Senha e Confirmação de Senha devem ser iguais para realizar o cadastro!`
        return false;
    }
    else if (telefone.length != 15) {
        div_erro_cadastro.innerHTML = `O campos Telefone é inválido!`
        return false;
    }

    let academia = ''
    for (let posicao = 0; posicao < empresas.length; posicao++) {
        if (token == empresas[posicao].token) {
            podeCadastrar = true
            academia = empresas[posicao].idAcademia
            break
        }
    }

    if (podeCadastrar) {
        const telefoneFomartado = telefone.replace(/\D/g, '')

        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nomeServer: nomeVar,
                telefoneServer: telefoneFomartado,
                emailServer: emailVar,
                senhaServer: senhaVar,
                academiaServer: academia
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    div_erro_cadastro.innerHTML = `<span style="color: #007A33;">Cadastro realizado com sucesso!</span>`
                    setTimeout(() => {
                        window.location = "login.html";
                    }, "600");
                } else {
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });

        return false;
    }
    else {
        div_erro_cadastro.innerHTML = `Token Inválido!`
    }
}

// function cadastrar() {
//     let btnAbrirModal = document.getElementById("openModal");
//     // Seleciona o modal
//     let modal = document.getElementById("myModal");
//     // Seleciona o botão de fechar do modal
//     let btnFecharModal = document.getElementsByClassName("close")[0];
//     // Quando o usuário clicar no botão, abra o modal
//     btnAbrirModal.onclick = function () {
//         modal.style.display = "block";
//     }
//     // Quando o usuário clicar no botão de fechar, feche o modal
//     btnFecharModal.onclick = function () {
//         modal.style.display = "none";
//     }
//     // Quando o usuário clicar fora do modal, feche-o
//     window.onclick = function (event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }
// }