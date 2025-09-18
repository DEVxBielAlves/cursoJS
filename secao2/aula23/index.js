let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

console.log(varA, varB, varC);

// const varATemp = varA;
// const varBTemp = varB;
// const varCTemp = varC;

// varA = varBTemp;
// varB = varCTemp;
// varC = varATemp;

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
