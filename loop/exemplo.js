// for - loop contato

// Contador do 0 a 10
// for(inicializador; condicao; contador)

//for(let num = 0; num <= 10; num++){
   // console.log("Eu vim Barganhar" + num)
//}

// let salario = 1000

// while(salario < 5000){
//       //salario = 100 + salario
//       salario += 100

//       console.log("O salario è de R$: " + salario)
// }

// let aumento = 1000

// do{

// console.log("Esse è o seu saldo: " + aumento)
// aumento += 100

// }while(aumento < 5000)

//Array
let frutas = ["Banana", "Laranja", "Abacaxi", "Pitaya", "Melancia", "Uva"]

// console.log(fruta[2])
// console.log(fruta[3])

// forEach >= percorre uma lista
frutas.forEach(qualquer => {
    console.log("a fruta è: " + qualquer)
})

//Percorrer uma lista com for
for (let indice = 0; indice < frutas.length; indice++){
    console.log(frutas[indice])

    if(frutas[indice] == "Uva"){
        console.log ("Eu gosto de " + frutas[indice])
    }
}

