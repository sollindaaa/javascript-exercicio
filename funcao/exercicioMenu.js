// Cada exercício deve ser encapsulado em uma função, e
// o menu deve executar essas funções;
// • O usuário poderá escolher qual exercício ele quer
// visualizar;
// • O usuário deverá digitar 0 para sair do menu;

// sintaxe = escrita de codigo

let opcaoEscholida = 0

do {
    opcaoEscholida = parseInt(prompt(` 
        =========👀 MENU DE EXERCICIO 👀=========

        Digite o número das opções:

        0 - Sair
        1 - Login
        2 - IMC
        3 - Par ou Impar
        4 - Média do aluno
        5 - Número crescente, decrescente e aleatório

        ========================================
    `))

    switch (opcaoEscholida) {
        case 0:
            alert("Volte sempre! 🤲🏽")
            break;
        case 1:
            login()
            break;
        case 2:
            calculoIMC()
            break;
        case 3:
            verificarNumeroParOuImpar()
            break;
        case 4:
            calvuloMediaAluno()
            break;
        case 5:
            verificarSequenciaNumeros()
            break;

        default:
            alert("Opção invàlida! escolha uma opção do nosso sistema 😒")
            break;
    }

}
while (opcaoEscholida != 0)

function login() {
    alert("Parabens, Login realizado com sucesso!")
}
function calculoIMC() {
    let peso = parseFloat(prompt("Informe o seu peso (em kg): "))
    let altura = parseFloat(prompt("Informe a sua altura (em metro): "))

    let imc = peso / (altura * altura)

    alert("Seu IMC è: " + imc)


    if (imc < 18.5) {
        alert("Abaixo do peso")
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        alert("Pessi normal")
    }
    else if (imc >= 25 && imc <= 29.9) {
        alert("Sobrepeso")
    }
    else if (imc >= 30 && imc <= 34.9) {
        alert("Obsidade grau 1")
    }
    else if (imc >= 35 && imc <= 39.9) {
        alert("Obsidade grau 2")
    }
    else {
        alert("Obsidade grau 3")
    }
}
function verificarNumeroParOuImpar() {

}
function calculoMediaAluno() {
    alert("Informe às notas de 0 a 10")
    let nota01 = Number.parseFloat(prompt("Digite a sua noa de Matematica"))
    let nota02 = Number.parseFloat(prompt("Digite a sua noa de Portugues"))
    let nota03 = Number.parseFloat(prompt("Digite a sua noa de Quimica"))
    let nota04 = Number.parseFloat(prompt("Digite a sua noa de Fisica"))

    let media = (nota01 + nota02 + nota03 + nota04) / 4

    alert("A mèdia do aluno è: " + media)

    if (media >= 7) {
        alert("APROVADO")
    }
    else if (media >= 5 && media < 7) {
        alert("RECUPERCAO")

    }
    else {
        alert("Reprovado")
    }
}
function verificarSequenciaNumeros() {

}