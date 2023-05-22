function LuFactorization(matrix) {
  const n = matrix.length;
  const L = [];
  const U = [];

  // Inicializa as matrizes L e U com zeros
  for (let i = 0; i < n; i++) {
    L[i] = new Array(n).fill(0);
    U[i] = new Array(n).fill(0);
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

  return { L, U };
}

// Exemplo de uso
const matrix = [
  [2, 1, -1],
  [-3, -1, 2],
  [-2, 1, 2],
];

const { L, U } = LuFactorization(matrix);
console.log("Matriz L:", L);
console.log("Matriz U:", U);

//MATRIZ:
2  1 -1
-3 -1  2
-2  1  2
