// AQUI ELE PEGA TODOS OS ELEMENTOS QUE TENHAM A CALSSE .lnr-eye
let btns = document.querySelectorAll('.lnr-eye');
// AI FAZ UM FOREACH (É A MESMA LÓGICA DE UM FOR PORÉM COM ALGUMAS DIFERENÇAS)
btns.forEach(function (btn) {
    // PARA CADA ELEMENTO ELE ADICIONA UM "OUVIDOR" QUE VERIFICA OS CLICKS
    btn.addEventListener('click', function () {
        
        // PEGA O ID DO ATRIBUTO ANTERIOR AO BOTÃO NO CASO O INPUT
        let targetId = btn.previousElementSibling.getAttribute('id');

        // AQUI ELE DETERMINA QUE A VAERIVÉL INPUT SERÁ DE ACOROD COM O INPUT
        let input = document.getElementById(targetId);

        // AQUI VERIFICA SE O INPUT FOI CLICADO E SE O TIPO É PASSWORD SE FOR ALTERA PARA TEXTO E TROCA A IMAGEM DO OLHO
        if (input && input.type === 'password') {
            input.type = 'text';
            btn.src = '../assets/loginCadastro/olho.svg';
        } else if (input) // ESSE SÓ VERIFICA SE ELE FOI CLICADO NOVAMENTE PARA VOLTAR PARA PASSWORD E TROCAR O OLHO DNV
        {
            input.type = 'password';
            btn.src = '../assets/loginCadastro/olho-fechado.png';
        }
    });
});