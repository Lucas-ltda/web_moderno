// criação literal
const obj1 = {}

console.log(obj1)
console.log("============")
//object JS

const obj2 = new Object 
console.log(obj2)
console.log("============")

//funções construtoras
function Produto  (nome, preco, desconto) {
    this.nome = nome 
    // pode ser alterado enquanto o preço e o desconto são restritos a função
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto ('caneta', 8.00, 0.10)
const p2 = new Produto ('notebook', 3050.99,0.20)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome,salarioBase,faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase / 30) *(30 - faltas)
        }
    }
}

const f1 = criarFuncionario ('Jao', 7980 , 4)
const f2 = criarFuncionario ('Maria', 8000 , 4)
console.log(f1.getSalario(), f2.getSalario())

