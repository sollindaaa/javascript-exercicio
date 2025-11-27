// Exercício 4: Notas escolares
// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
// notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
// notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

alert("Informe às notas de 0 a 10")
let nota01 = Number.parseFloat(prompt("Digite a sua noa de Matematica"))
let nota02 = Number.parseFloat(prompt("Digite a sua noa de Portugues"))
let nota03 = Number.parseFloat(prompt("Digite a sua noa de Quimica"))
let nota04 = Number.parseFloat(prompt("Digite a sua noa de Fisica"))

let media = (nota01 + nota02 + nota03 + nota04)/4

alert("A mèdia do aluno è: " + media)

if(media >= 7){
    alert("APROVADO")
}
else if (media >=5 && media < 7){ 
    alert("RECUPERCAO")

}
else{
    alert("Reprovado")
}