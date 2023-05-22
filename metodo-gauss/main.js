function GaussElimination(matrix) {
  const n = matrix.length;

  // Eliminação direta
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const factor = matrix[j][i] / matrix[i][i];

      // Atualiza os elementos da linha j
      // multiplicando pelo fator e subtraindo da linha i
      for (let k = i; k < n + 1; k++) {
        matrix[j][k] -= factor * matrix[i][k];
      }
    }
  }

  // Retrosubstituição
  const solution = new Array(n);

  // Calcula o valor da última variável
  solution[n - 1] = matrix[n - 1][n] / matrix[n - 1][n - 1];

  // Calcula os valores das variáveis restantes usando a retrosubstituição
  for (let i = n - 2; i >= 0; i--) {
    let sum = 0;

    // Somatório dos produtos dos coeficientes das variáveis já conhecidas
    // com seus respectivos valores
    for (let j = i + 1; j < n; j++) {
      sum += matrix[i][j] * solution[j];
    }

    // Calcula o valor da variável atual
    solution[i] = (matrix[i][n] - sum) / matrix[i][i];
  }

  return solution;
}

// Exemplo de uso
const matrix = [
  [2, 1, -1, 8],
  [-3, -1, 2, -11],
  [-2, 1, 2, -3],
];

const solution = GaussElimination(matrix);
console.log(solution);

//MATRIZ;

2x + y - z = 8
-3x - y + 2z = -11
-2x + y + 2z = -3
