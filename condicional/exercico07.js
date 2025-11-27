let valortotal = parseFloat(prompt("Informe o valor total da compra"))

let desconto

if(valortotal <= 100){
    desconto = 0
    console.log("O valor de desconto foi: " + desconto)
}
else if(valortotal <= 200){
    desconto = 0.1
    console.log("O valor de desconto foi: " + (desconto*100) + "%")
}
else{
    desconto = 0.2
    console.log("O valor total de desconto foi: " + (desconto*100) + "%")
}