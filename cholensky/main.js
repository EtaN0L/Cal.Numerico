function CholeskyFactorization(matrix) {
  const n = matrix.length;
  const L = [];

  // Inicializar a matriz L com zeros
  for (let i = 0; i < n; i++) {
    L[i] = new Array(n).fill(0);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      let sum = 0;
      if (j === i) {
        // Calcular os elementos da diagonal principal de L
        for (let k = 0; k < j; k++) {
          sum += L[j][k] * L[j][k];
        }
        L[j][j] = Math.sqrt(matrix[j][j] - sum);
      } else {
        // Calcular os elementos fora da diagonal principal de L
        for (let k = 0; k < j; k++) {
          sum += L[i][k] * L[j][k];
        }
        L[i][j] = (matrix[i][j] - sum) / L[j][j];
      }
    }
  }

  return L;
}

// Exemplo de uso
const matrix = [
  [4, 12, -16],
  [12, 37, -43],
  [-16, -43, 98]
];

const L = CholeskyFactorization(matrix);
console.log(L);