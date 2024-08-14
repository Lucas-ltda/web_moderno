const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b , c: c}
console.log(obj1)

const obj2 = {a, b, c}
console.log(obj2)


const nomeDoAtributo = "Nota Da Pessoa"
const valorDoAtributo = 8.75

const obj3 = {}

obj3[nomeDoAtributo] = valorDoAtributo
console.log(obj3)

const obj4 = {[nomeDoAtributo]:valorDoAtributo}

console.log(obj4)

const obj5 = {
    funcao1: function (){
        //...
    },
    function(){
        //...
    }
}
console.log(obj5)