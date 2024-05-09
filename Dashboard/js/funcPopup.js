document.addEventListener("DOMContentLoaded", function () {
    // Oculta todos os popups inicialmente
    document.querySelector('.alert-popup').style.display = 'none';
    document.querySelector('.error-popup').style.display = 'none';
    document.querySelector('.info-popup').style.display = 'none';

    // Verifica a demanda e exibe o popup correspondente
    if (demanda_100 == "Baixa") {
        document.querySelector('.alert-popup').style.display = 'block';
    }
    if (demanda_100 == "Alta") {
        document.querySelector('.error-popup').style.display = 'block';
    }
    if (demanda_100 == "Inativa") {
        document.querySelector('.info-popup').style.display = 'block';
    }
});