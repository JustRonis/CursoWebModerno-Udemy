// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: "Rua ana",
        numero: "1"
    }    
}

console.log(pessoa.nome);

const {nome, idade} = pessoa
console.log(nome, idade);

const {nome: n , idade:i} =  pessoa;

console.log(n,i);

const {endero: {logradouro, numero}} = pessoa
console.log(logradouro, numero)
const {endero: {logradouro: l, numero: nu}} = pessoa
console.log(l,n)