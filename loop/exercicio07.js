//7. Faça um programa que receba um número do usuário e mostre
//no console a contagem regressiva até 0.

// let numero = parseInt(prompt("Digite um numero para a contagem regressiva: "))

// console.log("contagem regressiva está comecando em: " + numero)

// while(numero <= 0){
//     console.log(numero)
//     // numero + numero - 1
//     numero--
// }

// console.log("Contagem regressiva fnalizada!")

let numero  = parseInt(prompt("Digite um numero: "))

do{
    console.log("Contagem regressiva: " + numero)
    numero--
} while(numero >= 0)
    console.log("Contagem regressiva finalizada")