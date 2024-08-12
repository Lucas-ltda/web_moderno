function getInteiroAleatorio(min, max){
    const valor = Math.random() *(max - min ) + min
    return Math.floor(valor)
}


do{
    var aux = 0 
    console.log(`${aux} --> Valor da variavel`)
    aux++
}while(aux <=20 )

// while (aux <= 50) {
//     console.log(`${aux} -- valor da variavel`)
//     aux++
// }
