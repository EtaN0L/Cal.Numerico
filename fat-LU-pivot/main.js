function LuFactorization(matrix) {
  const n = matrix.length;
  const L = [];
  const U = [];
  const P = [];

  // Inicializa as matrizes L, U e P com zeros
  for (let i = 0; i < n; i++) {
    L[i] = new Array(n).fill(0);
    U[i] = new Array(n).fill(0);
    P[i] = new Array(n).fill(0);
  }

  // Inicializa a matriz P como matriz identidade
  for (let i = 0; i < n; i++) {
    P[i][i] = 1;
  }

  // Realiza o pivoteamento parcial
  for (let i = 0; i < n; i++) {
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

    // Troca as linhas da matriz original, matriz P e matriz L
    [matrix[i], matrix[maxIndex]] = [matrix[maxIndex], matrix[i]];
    [P[i], P[maxIndex]] = [P[maxIndex], P[i]];
    [L[i], L[maxIndex]] = [L[maxIndex], L[i]];

    // Copia a linha i para a matriz U
    for (let j = 0; j < n; j++) {
      U[i][j] = matrix[i][j];
    }

    // Calcula a coluna i da matriz L
    for (let j = i + 1; j < n; j++) {
      L[j][i] = matrix[j][i] / U[i][i];

      // Atualiza a linha j da matriz U
      for (let k = i; k < n; k++) {
        U[j][k] = matrix[j][k] - L[j][i] * U[i][k];
      }
    }
  }

  return { L, U, P };
}

// Exemplo de uso
const matrix = [
  [2, 1, -1],
  [-3, -1, 2],
  [-2, 1, 2],
];

const { L, U, P } = LuFactorization(matrix);
console.log("Matriz L:", L);
console.log("Matriz U:", U);
console.log("Matriz P:", P);

//MATRIZ:

2  1 -1
-3 -1  2
-2  1  2
