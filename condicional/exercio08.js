let peso = parseFloat(prompt("Informe o seu peso (em kg): "))
let altura = parseFloat(prompt("Informe a sua altura (em metro): "))

let imc = peso / (altura*altura)

console.log("Seu IMC è: " + imc + imc.toFixed(2)) 


if(imc < 18.5){
    console.log("Abaixo do peso")
}
else if(imc >= 18.5 && imc <= 24.9){
    console.log("Pessi normal")
}
else if(imc >= 25 && imc <=29.9){
    console.log("Sobrepeso")
}
else if(imc >= 30 && imc <= 34.9){
    console.log("Obsidade grau 1")
}
else if(imc >= 35 && imc <= 39.9){
    console.log("Obsidade grau 2")
}
else{
    console.log("Obsidade grau 3")
}