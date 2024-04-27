// Função para formatar CNPJ
function formatarCNPJ(cnpj) {
    cnpj = cnpj.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    cnpj = cnpj.replace(/^(\d{2})(\d)/, '$1.$2');
    cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    cnpj = cnpj.replace(/\.(\d{3})(\d)/, '.$1/$2');
    cnpj = cnpj.replace(/(\d{4})(\d)/, '$1-$2');

    // Corrige a posição do cursor após a formatação
    let posicao = cnpj.length;
    if (posicao === 15 || posicao === 16) {
        posicao += 1;
    } else if (posicao === 17) {
        posicao += 2;
    }

    return [cnpj, posicao];
}

// Função para formatar CPF
function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    // Corrige a posição do cursor após a formatação
    let posicao = cpf.length;
    if (posicao === 4 || posicao === 5) {
        posicao += 1;
    } else if (posicao === 8 || posicao === 9) {
        posicao += 2;
    }

    return [cpf, posicao];
}

// Função para aplicar a formatação enquanto o usuário digita
function formatarCampo(input, formatter) {
    input.addEventListener('input', function() {
        let start = input.selectionStart;
        let end = input.selectionEnd;

        // Chamando a função de formatação
        let [valorFormatado, novaPosicao] = formatter(input.value);
        input.value = valorFormatado;

        // Ajustando a posição do cursor
        input.setSelectionRange(novaPosicao, novaPosicao);
    });
}

// Função para formatar data de nascimento
function formatarDataNascimento(dataNasc) {
    dataNasc = dataNasc.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    dataNasc = dataNasc.replace(/^(\d{2})(\d)/, '$1/$2'); // Adiciona barra após os dois primeiros dígitos
    dataNasc = dataNasc.replace(/^(\d{2})\/(\d{2})(\d)/, '$1/$2/$3'); // Adiciona barra após o quarto dígito

    // Corrige a posição do cursor após a formatação
    let posicao = dataNasc.length;
    if (posicao === 3 || posicao === 4) {
        posicao += 1;
    } else if (posicao === 6 || posicao === 7) {
        posicao += 2;
    }

    return [dataNasc, posicao];
}

// Função para aplicar a formatação enquanto o usuário digita
function formatarCampo(input, formatter) {
    input.addEventListener('input', function() {
        let start = input.selectionStart;
        let end = input.selectionEnd;

        // Chamando a função de formatação
        let [valorFormatado, novaPosicao] = formatter(input.value);
        input.value = valorFormatado;

        // Ajustando a posição do cursor
        input.setSelectionRange(novaPosicao, novaPosicao);
    });
}


// Selecionando os campos que iremos formatar
let cnpj = document.getElementById('cnpjInput');
let cpf = document.getElementById('cpfInput');
let dataNasc = document.getElementById('dtNascInput');

// Chamando a função enquanto o usuario digita
formatarCampo(cnpj, formatarCNPJ);
formatarCampo(cpf, formatarCPF);
formatarCampo(dataNasc, formatarDataNascimento);
