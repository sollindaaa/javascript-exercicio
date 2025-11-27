// 6. Calcular a soma dos números de 1 a 100 utilizando a estrutura
// while.

// let s = parseInt(prompt("Escolha um numero: "))
// let n = 1
// let m = 0

// while(n <= s){
//     m = m + n
//     n++
// }

// console,console.log("Soma total: " , m)

let numero = 1
let soma = 0

while(numero <= 100){
    soma = soma + numero
    //soma += numero

    console.log(soma)
    // numero + numero + 1
    numero++
}

console.log("A soma dos numeros de 1 a 100 è: " + soma)