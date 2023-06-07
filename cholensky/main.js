function CholeskyFactorization(matrix) {
  const n = matrix.length;
  const G = [];

  // Inicializar a matriz G com zeros
  for (let i = 0; i < n; i++) {
    G[i] = new Array(n).fill(0);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      let sum = 0;
      if (j === i) {
        // Calcular os elementos da diagonal principal de G
        for (let k = 0; k < j; k++) {
          sum += G[j][k] * G[j][k];
        }
        G[j][j] = Math.sqrt(matrix[j][j] - sum);
      } else {
        // Calcular os elementos fora da diagonal principal de G
        for (let k = 0; k < j; k++) {
          sum += G[i][k] * G[j][k];
        }
        G[i][j] = (matrix[i][j] - sum) / G[j][j];
      }
    }
  }

  return G;
}

const prompt = require("prompt-sync")();
// Exemplo de uso
//const matrix = [[4, 12, -16], [12, 37, -43], [-16, -43, 98]];

//entrada de dados
var matrix = [];
for (let m1 = 0; m1 < 3; m1++) {
  matrix[m1] = [];
  for (let m2 = 0; m2 < 3; m2++) {
    matrix[m1][m2] = parseInt(prompt("Digite o valor para a posição [" + m1 + "][" + m2 + "]:"));
    console.log("Número: ", matrix[m1][m2]);
  }
}

const G = CholeskyFactorization(matrix);

// Transpor a matriz G para obter a matriz transposta G^T
const GT = [];
for (let i = 0; i < G.length; i++) {
  GT[i] = [];
  for (let j = 0; j < G.length; j++) {
    GT[i][j] = G[j][i];
  }
}

console.log("Matriz G:");
console.log(G[0]);
console.log(G[1]);
console.log(G[2]);
console.log("Matriz Transposta G^T:");
console.log(GT[0]);
console.log(GT[1]);
console.log(GT[2]);