let elementosporclass = document.getElementsByClassName("texto")
let elementoportag = document.getElementsByTagName("a")
let elementoporid = document.getElementById("formulario")


console.log(elementosporclass);
console.log(elementoporid);
console.log(elementoportag);

elementoportag[0].textContent = "Video do veinho"; //modifica o conteudo elemento
elementoportag[0].style.color = "red"
elementoportag[0].style.fontSize = "30px"


console.log(elementoportag[0].textContent);

//exiba o 2 elemento da variavel elementos
//Crie uma variavel que tenha o valor de um elemento buscado pela sua tag
//Acesse a propriedade innerText da variavel elementopotTag e exiba
//Acesse a propriedade style.color e atribui uma nova cor para a possição 1 da varialvel elementoportag



