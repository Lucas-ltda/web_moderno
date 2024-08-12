const resultado = (aluno,notas) =>{
    
    let maisGrande = notas [0]

    for (let index = 1; index < notas.length; index++) {
        if (notas[0] > maisGrande) {
            maisGrande = notas[index]
        }
    }
    
   
}

console.log(resultado(10,2,5))