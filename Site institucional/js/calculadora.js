function Resultado() {
    var btnAbrirModal = document.getElementById("btn_simular");
    var modal = document.getElementById("myModal");
    var btnFecharModal = document.getElementsByClassName("close")[0];
    var matriculados = document.getElementById("matriculados_input");
    var mensalidade = document.getElementById("mensalidade_input");
    var exibir = document.getElementById("exibir");
    var erroDisplay = document.getElementById("error");

    if (matriculados.value == "" || mensalidade.value == "") {
        alert("preencha todos os campos para continuar");
    } else {
        btnAbrirModal.onclick = function () {
            modal.style.display = "block";
            const Valormatriculados = Number(matriculados.value);
            const Valormensalidade = Number(mensalidade.value);
            const totalAnualSemProjeto = (Valormatriculados * Valormensalidade) * 12;
            const perdaSemProjetoAnual = (totalAnualSemProjeto * 16) / 100;
            const totalMensalPerda = perdaSemProjetoAnual / 12;
            const totalAnualComProjeto = totalAnualSemProjeto + perdaSemProjetoAnual;

            exibir.innerHTML = `Sem a implementação do projeto PurpleX, sua empresa está perdendo uma média mensal de R$${totalMensalPerda.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}, 
            o que totaliza uma perda anual de R$${perdaSemProjetoAnual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}. No entanto, com a execução do nosso projeto, você pode reduzir a evasão 
            de matrículas decorrente da superlotação em 16%, resultando em um lucro total de R$${totalAnualComProjeto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} por ano. 
            Não deixe que essas oportunidades escapem por entre os dedos. Investir no projeto PurpleX é investir 
            no crescimento sustentável e no sucesso futuro da sua empresa.`;
        };

        btnFecharModal.onclick = function () {
            modal.style.display = "none";
        };

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }


}
