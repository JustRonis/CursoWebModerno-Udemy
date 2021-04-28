console.log(Math.ceil(6.1)) //Math.ceil arredonda o valor para cima.
console.log(Math.floor(6.1)) //Math.floor arredonda o valor para baixo.

//Math é um objeto dentro de js
console.log(typeof Math)
//ceil é uma função que esta dentro do objeto Math
console.log(typeof Math.ceil)

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2' //Declara também um atributo dentro de um objeto. Somente a sintaxa é diferente
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa');
console.log(obj2.nome)
console.log(obj3.nome)