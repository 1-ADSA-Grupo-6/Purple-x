function popUp() {
    document.querySelector('.alert-popup').style.display = 'none';
    document.querySelector('.error-popup').style.display = 'none';
    document.querySelector('.info-popup').style.display = 'none';
    
    if (demanda_100 == "Média" || demanda_101 == "Média" || demanda_102 == "Média") {
        document.querySelector('.alert-popup').style.display = 'block';
    }
    if (demanda_100 == "Alta" || demanda_101 == "Alta" || demanda_102 == "Alta") {
        document.querySelector('.error-popup').style.display = 'block';
    }
    if (demanda_100 == "Inativa" || demanda_101 == "Inativa" || demanda_102 == "Inativa") {
        document.querySelector('.info-popup').style.display = 'block';
    }
}

setInterval(function () {
    popUp()
}, 1500) 

