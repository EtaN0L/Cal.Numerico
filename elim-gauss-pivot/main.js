function GaussElimination(matrix) {
  const n = matrix.length;

  // Eliminação direta com pivoteamento parcial
  for (let i = 0; i < n - 1; i++) {
    // Encontra o elemento pivô máximo na coluna atual
    let maxIndex = i;
    let maxValue = Math.abs(matrix[i][i]);

    for (let j = i + 1; j < n; j++) {
      const absValue = Math.abs(matrix[j][i]);
      if (absValue > maxValue) {
        maxIndex = j;
        maxValue = absValue;
      }
    }

    // Troca as linhas para posicionar o elemento pivô máximo
    if (maxIndex !== i) {
      [matrix[i], matrix[maxIndex]] = [matrix[maxIndex], matrix[i]];
    }

    // Eliminação dos elementos abaixo do pivô
    for (let j = i + 1; j < n; j++) {
      const factor = matrix[j][i] / matrix[i][i];

      for (let k = i; k < n + 1; k++) {
        matrix[j][k] -= factor * matrix[i][k];
      }
    }
  }

  // Retrosubstituição
  const solution = new Array(n);

  solution[n - 1] = matrix[n - 1][n] / matrix[n - 1][n - 1];

  for (let i = n - 2; i >= 0; i--) {
    let sum = 0;

    for (let j = i + 1; j < n; j++) {
      sum += matrix[i][j] * solution[j];
    }

    solution[i] = (matrix[i][n] - sum) / matrix[i][i];
  }

  return solution;
}

// Exemplo de uso
const matrix = [
  [0, 2, 1, 8],
  [1, -3, -1, -11],
  [2, -2, 1, -3],
];

const solution = GaussElimination(matrix);
console.log(solution);
