const calculadora = (numero1,  operador, numero2) => {
    switch (operador) {
        case '+':
            return numero1 + numero2
        case '-':
            return numero1 - numero2

        case '*':
            return numero1 * numero2

        case '/':
            return numero1 / numero2

        default:
            return "Errou não funcionou amigão melhore"
    }
}

console.log(calculadora(1,"a",2))