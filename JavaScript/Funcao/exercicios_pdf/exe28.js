const vetorpar = (numeros)=>{
    let pares = 0 
    let impar = 0 

    for (let index = 0; index < numeros.length; index++) {

        if (numeros[index] % 2 == 0 ) {
            pares++
            
        }else{
            impar++
        }
    }
    console.log(`${pares} - numeros pares e  ${impar} - numeros impares`)
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

console.log(vetorpar(vetor))