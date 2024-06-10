function cadastrar() {
    const nomeVar = input_cadastro_username.value;
    const emailVar = input_cadastro_email.value;
    const senhaVar = input_cadastro_senha.value;
    const confirmacaoSenhaVar = input_confirmacao_senha.value;

    if (nomeVar == "" || emailVar == "" || senhaVar == "" || confirmacaoSenhaVar == "") {
        div_erro_cadastro.innerHTML = `Preencha todos os campos para realizar o cadastro!`
        return false;
    } else if (senhaVar.length < 5) {
        div_erro_cadastro.innerHTML = `Sua Senha deve ter mais de 5 caracteres para realizar o cadastro!`
        return false;
    }
    else if (confirmacaoSenhaVar != senhaVar) {
        div_erro_cadastro.innerHTML = `Os campos Senha e Confirmação de Senha devem ser iguais para realizar o cadastro!`
        return false;
    }

    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                div_erro_cadastro.innerHTML = `<span style="color: #007A33;">Cadastro realizado com sucesso!</span>`
                setTimeout(mostrarLogin, 600)
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
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