const prod1 = {};

prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; // Evitar atributos com espaço;

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2);

const teste1 = {};
teste1.nome = "Opa";

const teste2 = teste1;

console.log(teste2);

teste2.nome = "Tomar banho";
console.log(teste1);