function Resultado() {
    var modal = document.getElementById("myModal");
    var btnFecharModal = document.getElementsByClassName("close")[0];
    var matriculados = document.getElementById("matriculados_input");
    var mensalidade = document.getElementById("mensalidade_input");
    var exibir = document.getElementById("exibir");

    var imagemMatriculado = document.getElementById("imagemInputMatriculado");
    var imagemMensalidade = document.getElementById("imagemInputMensalidade");
    var errorMatricula = document.getElementById("textoMatricula");
    var errorMensalidade = document.getElementById("textoMensalidade");

    if (matriculados.value == "" && mensalidade.value == "") {
        imagemMatriculado.style.display = "block";
        errorMatricula.style.display = "block";
        imagemMensalidade.style.display = "block";
        errorMensalidade.style.display = "block";
    } else if (matriculados.value == "" && mensalidade.value != "") {
        imagemMatriculado.style.display = "block";
        errorMatricula.style.display = "block";
        imagemMensalidade.style.display = "none";
        errorMensalidade.style.display = "none";
    } else if (mensalidade.value == "" && matriculados != "") {
        imagemMensalidade.style.display = "block";
        errorMensalidade.style.display = "block";
        imagemMatriculado.style.display = "none";
        errorMatricula.style.display = "none";
    } else {
        imagemMensalidade.style.display = "none";
        errorMensalidade.style.display = "none";
        imagemMatriculado.style.display = "none";
        errorMatricula.style.display = "none";

        modal.style.display = "block";
        const Valormatriculados = Number(matriculados.value);
        const Valormensalidade = Number(mensalidade.value);

        const totalAno = (Valormatriculados * Valormensalidade) * 12;
        const perdaTotal = (totalAno * 16) / 100;

        exibir.innerHTML = `No Brasil, 16% da evasão de matrículas nas academias ocorre devido à superlotação. 
        Com base nos dados fornecidos, você está <span style="color:red"><b>perdendo um total de ${perdaTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b></span> por ano. 
        Ao investir em nosso projeto, você poderá obter um <span style="color: green"><b>ganho anual de ${totalAno.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b></span>. 
        Não perca tempo, invista na <span style="color: #6F0F77"><b>PurpleX</b></span> e impulsione o crescimento da sua empresa!
        <br>
        Entre em contato! <a href="#contato_id" id="contatoButton">Contato</a>`;

        var fecharModal = document.getElementById("contatoButton");

        btnFecharModal.onclick = function () {
            modal.style.display = "none";
        };

        fecharModal.onclick = function() {
            modal.style.display = "none";   
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }
}


