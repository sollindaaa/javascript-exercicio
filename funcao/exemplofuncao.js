function cumprimento(){
    let nomepessoa = prompt("Digite seu nome: ")

    let horaatual = new Date().getHours()

     if(horaatual > 6 && horaatual < 13){
        alert("Bom dia " + nomepessoa)
     }else if(horaatual >= 13 && horaatual < 18){
        alert("Boa Tarde " + nomepessoa)
     }else{
        alert("Boa noite " + nomepessoa)
     }
}


cumprimento()

let pessoa = {
    nome: "Sol",
    idade: 17,
    sobrenome: "Linda",
    estado: "SP",

}


console.log(pessoa.nome)
console.log(pessoa.idade)                                  