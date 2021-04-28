let isAtivo = false;
console.log(isAtivo);


isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log("Os verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));


console.log("Os falsos...");
console.log(!!0);
console.log(!!''); //String vazia é falso. Pode ser usada para verificar se a variável está guardando algo ou não.
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false))

console.log("Para finalizar...");
console.log( '' || null || 0 || "epa");


// A seguinte validação é bastante útil.

let nome = "Ronaldo";
console.log(nome || "Desconhecido");

let nome2 = ""
console.log(nome2 || "Desconhecido"); 
