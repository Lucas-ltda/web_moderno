//não existe forma de ter variavel privada em Js, o uso do "_" ou "#" no nome do atributo é uma conveção para que desenvolvedores usem o atributo como privado

const sequencia = {
    _valor: 0, //somente a conveção
    get valor () {return this._valor++},
    set valor(valor){ 
        if (valor > this._valor) {
            this._valor= valor
        }
    }
}

sequencia.valor= 1000


console.log(sequencia.valor, sequencia.valor, sequencia.valor)



