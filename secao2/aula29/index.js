//            0123456  
const nome = 'Gabriel'; // string
console.log(nome[4]);

//                  0            1          2
const alunos = ['Gabriel', 'Guilherme', 'Victor']; // array
console.log(alunos);
console.log(alunos[1]); // retorna o valor do indice 1

alunos[1] = 'João'; // substitui o valor do indice 1
alunos.push('Roberto'); // adiciona um valor ao final do array
console.log(alunos);

alunos.unshift('Luiza'); // adiciona um valor ao inicio do array
console.log(alunos);

const removido = alunos.pop(); // remove o ultimo valor do array
console.log(alunos);
console.log(removido); // retorna o valor removido

console.log(alunos.slice(0, 2)) // retorna um novo array com os valores do indice 0 ao 2

console.log(alunos instanceof Array) // retorna true se alunos é um array