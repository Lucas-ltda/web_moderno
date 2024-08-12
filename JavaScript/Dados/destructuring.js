const pessoa = { //objeto
    nome: 'Lucas',
    idade: 5,
    endereco:{
        logradoro: 'Rua xereca',
        numero:'150',
        CEP:'57035010'
    }

}

//destructuing é o ato de tirar elementos de um objeto ou de um array

const {nome,idade,endereco:{logradoro}} = pessoa

console.log(nome,idade,logradoro)