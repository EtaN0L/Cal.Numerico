function LuFactorization(matrix) {
  const n = matrix.length;
  const L = [];
  const U = [];
  const b = [];

  // Inicializa as matrizes L e U com zeros
  for (let i = 0; i < n; i++) {
    L[i] = new Array(n).fill(0);
    U[i] = new Array(n).fill(0);
  }

  // Preenche o vetor b com os valores fornecidos
  for (let i = 0; i < n; i++) {
    b[i] = matrix[i][n]; // Última coluna da matriz
  }

  // Calcula a matriz U e a matriz L (com diagonal principal igual a 1)
  for (let i = 0; i < n; i++) {
    // Calcula a linha i da matriz U
    for (let j = i; j < n; j++) {
      let sum = 0;

      // Calcula o somatório para obter os elementos da matriz U
      for (let k = 0; k < i; k++) {
        sum += L[i][k] * U[k][j];
      }

      U[i][j] = matrix[i][j] - sum;
    }

    // Calcula a coluna i da matriz L
    for (let j = i; j < n; j++) {
      if (i === j) {
        L[i][i] = 1; // Diagonal principal de L é igual a 1
      } else {
        let sum = 0;

        // Calcula o somatório para obter os elementos da matriz L
        for (let k = 0; k < i; k++) {
          sum += L[j][k] * U[k][i];
        }

        L[j][i] = (matrix[j][i] - sum) / U[i][i];
      }
    }
  }

  // Calcula o vetor solução c resolvendo Lc = b
  const c = [];
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < i; j++) {
      sum += L[i][j] * c[j];
    }
    c[i] = (b[i] - sum) / L[i][i];
  }

  return { L, U, c };
}

const prompt = require("prompt-sync")();
// Exemplo de uso
//const matrix = [ [2, 1, -1, 8], [-3, -1, 2, -11], [-2, 1, 2, -3]];
// o vetor b é o ultimo caractere de cada linha

//entrada de dados
var matrix = [];
for (let m1 = 0; m1 < 3; m1++) {
  matrix[m1] = [];
  for (let m2 = 0; m2 < 4; m2++) {
    matrix[m1][m2] = parseInt(prompt("Digite o valor para a posição [" + m1 + "][" + m2 + "]:"));
    console.log("Número: ", matrix[m1][m2]);
  }
}


const { L, U, c } = LuFactorization(matrix);
console.log("Matriz L:", L);
console.log("Matriz U:", U);
console.log("Vetor solução c:", c);
