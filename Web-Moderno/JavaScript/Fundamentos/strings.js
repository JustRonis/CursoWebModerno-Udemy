const nome = "Ronaldo";

console.log(nome.charAt(4)); // String é um array de char. A funcão charAt busca no indice e retorna o valor que contem aquela posição do indice. Nesse caso ele irá retornar o valor que ocupa a 4 posição(Lembre-se que se inicia no 0)


console.log(nome.charAt(7)); // "Ronaldo" tem 6 caracteres(iniciando em 0), neste casos estamos pedindo pro console imprimir o valor que esta no indice 7. Será que vai retornar erro?

//Não, não retorna erro, retorna um campo vazio. JS é uma linguagem "maleavel" evita disparar erros não "criticos". Isso tem seu lado positivo e negativo.



// A funcção indexOf, procura dentro de uma string determinado char. Ao encontra-lo esse retorna a posição que este char ocupa no indice.
console.log(nome.indexOf('R')); // "R" ocupa o indice 0
console.log(nome.indexOf('o')); // A string "Ronaldo" possui dois chars de valor "o", neste caso o indexOf retorna o primeiro indice que contenha esse valor. 
console.log(nome.indexOf('d')); // "d" ocupa o indice 5



// Substring
console.log(nome.substring(1)); // substring é utilizado para percorrer pelos indices. Neste caso passei o 1. Ou seja, foi impresso a string "Ronaldo" a partir do 1 indice. Resultado "onaldo"
console.log(nome.substring(0,4)); // neste caso eu passei o indice 0 e 4. Ou seja, ele vai iniciar do 0 e parar no 4(O 4 NAO SERÁ IMPRESSO). Resultado "Rona". 


//Concatenação de string.
let idade = 20;
console.log("Meu nome é: ".concat(nome).concat(" Luiz Pinto filho").concat(", e minha idade é: ").concat(idade).concat(" anos"));

//Replace;

console.log(nome.replace(3 , "F")); // NÃO FUNCIONOU. //PODE-SE USAR REGEX


//Converter uma String para um array:

console.log('Ronaldo, Lidia, Taluama, Luiza'.split(',')); // (',') esse parametro esta definindo qual é o separador, neste caso é a virgula, Sendo assim cada valor seperado por virgula será convertido para um array.
// O split pode-se usar o REGEX.

let farofa = console.log('Eu nao presto', 'nem um pouco'.split(','));



// template string é uma prática melhor que a concatenação normal

const quem = "Ronaldo";
const concatenecao = "Olá" + quem + "! Tudo bem?";

const templateString = `
                 Olá            
                 ${quem}` 
console.log(templateString); //Note que o template String respeita a quebra de linhas


const up = texto => texto.toUpperCase()

console.log(`Ei... ${up("cuidado")}!`)
