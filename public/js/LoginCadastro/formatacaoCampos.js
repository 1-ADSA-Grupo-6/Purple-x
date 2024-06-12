// Função para formatar CNPJ
// function formatarCNPJ(cnpj) {
//     cnpj = cnpj.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
//     cnpj = cnpj.replace(/^(\d{2})(\d)/, '$1.$2');
//     cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
//     cnpj = cnpj.replace(/\.(\d{3})(\d)/, '.$1/$2');
//     cnpj = cnpj.replace(/(\d{4})(\d)/, '$1-$2');

//     // Corrige a posição do cursor após a formatação
//     let posicao = cnpj.length;
//     if (posicao === 15 || posicao === 16) {
//         posicao += 1;
//     } else if (posicao === 17) {
//         posicao += 2;
//     }

//     return [cnpj, posicao];
// }

// Função para formatar telefone fixo e celular
function formatarTelefone(numero) {
    // Remove todos os caracteres não numéricos
    numero = numero.replace(/\D/g, '');

    // Verifica se é um número de celular (9 dígitos) ou um número fixo (8 dígitos)
    const celular = numero.length === 11;

    // Formata o número de acordo com o formato brasileiro
    if (celular) {
        return numero.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else {
        return numero.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
}

// Função para aplicar a formatação enquanto o usuário digita
// function formatarCampo(input, formatter) {
//     input.addEventListener('input', function() {
//         let start = input.selectionStart;
//         let end = input.selectionEnd;

//         // Chamando a função de formatação
//         let [valorFormatado, novaPosicao] = formatter(input.value);
//         input.value = valorFormatado;

//         // Ajustando a posição do cursor
//         input.setSelectionRange(novaPosicao, novaPosicao);
//     });
// }

// Função para aplicar a formatação enquanto o usuário digita
function formatarCampoTelefone(input) {
    input.addEventListener('input', function() {
        let start = input.selectionStart;
        let end = input.selectionEnd;

        // Formata o número de telefone
        input.value = formatarTelefone(input.value);

        // Mantém a posição do cursor
        let novaPosicao = start + (input.value.length - (end - start));
        input.setSelectionRange(novaPosicao, novaPosicao);
    });
}


// Selecionando os campos que iremos formatar
// let cnpj = document.getElementById('cnpjInput');
let telefone = document.getElementById('telefoneInput');

// Chamando a função enquanto o usuario digita
// formatarCampo(cnpj, formatarCNPJ);
formatarCampoTelefone(telefone);









