const acharNegativos = vetor => {
    let positivos = 0
    let negativos = 0
    let vetorNegativos = []

    for (const index of vetor) {
        if (index >= 0) {
            positivos++
        } else {
            negativos++
            
            vetorNegativos.push(index)
        }
    }

    return `A quantidade de numeros negativos é: ${negativos} e o valores são: ${vetorNegativos}`
    
}

vetor = [10, -5, 7, -3, 1, 3, -11, 20, -6, 9]

console.log(acharNegativos(vetor))