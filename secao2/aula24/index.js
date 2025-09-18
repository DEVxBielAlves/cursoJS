//               01234567
let umaString = "Um texto";

console.log(umaString.length); // length retorna o número de caracteres da string
console.log(umaString[5]); // [5] retorna o caractere na posição 5
console.log(umaString.charAt(6)); // charAt retorna o caractere na posição 6
console.log(umaString.concat(" demais")); // concat concatena a string com " demais"
console.log(umaString + " demais"); // + concatena a string com " demais"
console.log(`${umaString} demais`); // ${umaString} demais concatena a string com " demais"
console.log(umaString.indexOf("texto")); // indexOf retorna a posição da primeira ocorrência de "texto"
console.log(umaString.substring(0, 3)); // substring retorna a substring da posição 0 a 3
console.log(umaString.split(" ")); // split retorna um array com as palavras da string
console.log(umaString.replace("texto", "texto demais")); // replace substitui a primeira ocorrência de "texto" por "texto demais"
console.log(umaString.toLowerCase()); // toLowerCase retorna a string em minúsculas
console.log(umaString.toUpperCase()); // toUpperCase retorna a string em maiúsculas
console.log(umaString.trim()); // trim remove os espaços em branco do início e do fim da string
console.log(umaString.length); // length retorna o número de caracteres da string

console.log(""); // quebra de linha
console.log("Métodos de string"); // métodos de string
console.log(umaString.match(/[a-z]/)); // match retorna um array com as letras minúsculas
console.log(umaString.replace(/[a-z]/g, "x")); // replace substitui todas as letras minúsculas por x

console.log(""); // quebra de linha
