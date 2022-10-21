var valorEmDolarTexto = prompt ("Qual o valor em dólar você quer converter?")

var valorEmDolarNumero = parseFloat (valorEmDolarTexto)

var valorEmReal = valorEmDolarNumero * 5.27
var valorEmReal = valorEmReal.toFixed(2)

alert(valorEmReal)
