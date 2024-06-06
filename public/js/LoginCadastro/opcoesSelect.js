function selectOption(value, element) {
    let lis = document.querySelectorAll('.custom-select li');
    lis.forEach(li => {
      li.classList.remove('selected');
    });
    element.classList.add('selected');
  
    let valorSelect =  document.getElementById("selectTipo").value = value;;
    console.log(valorSelect);
  }