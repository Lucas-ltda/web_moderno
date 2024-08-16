const acharMaiorEMenor = vetor =>{
let maior = vetor [0] // valores iniciais
let menor = vetor [0] 

for (const index of vetor) {
    if (index > maior){
        maior = index
    }
    if(index < menor){
        menor = index
    }
}
return[maior, menor]
}

vetor = [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(acharMaiorEMenor(vetor))