const intervaloConta = (numeros) =>{
    let intervalo = 0
    let foraDoIntervalo = 0

    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] >= 10 && numeros[index] <= 20) {
            intervalo++
        } else{
            foraDoIntervalo++
        }
        
    }
    console.log(`${intervalo} -  numeros no intervalo || ${foraDoIntervalo} -  fora do intervalo`)
}

let vetor = [7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

intervaloConta(vetor)