// duas formas
// math
const potencia = (base,expoente) =>{

const resultado = Math.pow(base,expoente)
    return resultado
}

console.log(potencia(2,4)) // 2*2*2*2 = 16

console.log("==================================================================")
//operador de potencia em js

const potencia2 = (base,expoente) =>{

    const resultado = base ** expoente
        return resultado
    }
    
    console.log(potencia2(2,4))