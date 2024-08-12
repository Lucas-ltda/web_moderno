const Aumento = (plano,salario) => {
    switch (plano) {
        case 'A':
            return salario * 1.1

        case 'B':
            return salario * 1.15

        case 'C':
            return salario * 1.2
    
        default:
            return "Valor não reconhecido"
    }
}

console.log(Aumento('A', 1000));
console.log(Aumento('B', 1000));
console.log(Aumento('C', 1000));
console.log(Aumento('D', 1000));