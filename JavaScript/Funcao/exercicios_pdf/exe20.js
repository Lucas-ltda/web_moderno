const caixaDeBanco = valorParaTrocar => {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5  = 0
    let contador1 = 0

    let valorNota = calcularValorNota(valorParaTrocar)

    while (valorParaTrocar >= valorNota) {
        switch (valorNota) {
            case 100:
                valorParaTrocar -= 100
                contador100++
                break
            
            case 50:
                valorParaTrocar -= 50
                contador50++
                break

            case 10:
                valorParaTrocar -= 10
                contador10++
                break

            case 5:
                valorParaTrocar -= 5
                contador5++
                break

            case 1:
                valorParaTrocar -= 1
                contador1++
                break
        }

        valorNota = calcularValorNota(valorParaTrocar)
    }

    return resultado(contador100, contador50, contador10, contador5, contador1)
}


const calcularValorNota = valorParaTrocar => {
    if (valorParaTrocar >= 100) {
        return 100
    } else if (valorParaTrocar >= 50) {
        return 50
    } else if (valorParaTrocar >= 10){
        return 10
    }else if (valorParaTrocar >= 5){
        return 5
    } else if (valorParaTrocar >= 1){
        return 1
    }
}

const resultado = (contador100,contador50,contador10,contador5,contador1) => {
    let mensagem = ''
    
    if (contador100 > 0) {
        mensagem += `${contador100} nota(s) de R$ 100. `
    } 

    if (contador50 > 0) {
        mensagem += `${contador50} nota(s) de R$ 50.  `
    }

    if (contador10 > 0) {
        mensagem += `${contador10} nota(s) de R$ 10.  `
    }

    if (contador5 > 0) {
        mensagem += `${contador5} nota(s) de R$ 5.  `
    }

    if (contador1 > 0) {
        mensagem += `${contador1} nota(s) de R$ 1.  `
    }
    return mensagem
}



console.log(caixaDeBanco(153));