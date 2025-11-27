// Exercicio 06
// escreva um programa 


let anoNascimento = parseInt(prompt("Digite o ano de nascimento"))

let anoAtual = new Date().getFullYear()

let idade = anoAtual - anoNascimento

if(idade >= 18){
    console.log("Maior de idade")
    console.log("Sua idade è: " + idade)
}
else{
    console.log("menor de idade")
    console.log("Sua idade è: " + idade)
}