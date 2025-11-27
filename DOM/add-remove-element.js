let secao = document.getElementsByTagName("section")
let novoparagrafo = document.createElement("p") //cria um elemento no meu HTML
let formularioElemento = document.getElementById("formulario")
let labelElemento = document.getElementById("label")

novoparagrafo.textcontent = "paragrafo criado via JS" //poe um conteudo no p
// secao[0].appendChild(novoparagrafo)

document.body.appendChild(novoparagrafo)

formularioElemento.removeChild()