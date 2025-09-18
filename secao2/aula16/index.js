const nome = "Gabriel";
const sobrenome = "Alves Lima";
const peso = 70;
const alturaemM = 1.79;
let imc = peso / (alturaemM * alturaemM);

const idade = 21;
let anoAtual = 2025;
const anoNascimento = anoAtual - idade;

const nomeCompleto = nome + " " + sobrenome;

// template string
const infos = `  ${
  nome + " " + sobrenome
} tem ${idade} anos, pesa ${peso} kg e tem ${alturaemM} m de alturaemM. Seu IMC é ${imc}.\n ${nomeCompleto} nasceu em ${anoNascimento}`;

console.log(infos);
