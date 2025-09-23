function solution(n, board) {
  let answer = Number.MIN_SAFE_INTEGER;
  let sum01 = 0;
  let sum02 = 0;

  for (let i = 0; i < n; i++) {
    sum01 = 0;
    sum02 = 0;

    for (let j = 0; j < n; j++) {
      sum01 += board[i][j];
      sum02 += board[j][i];
    }

    answer = Math.max(answer, sum01, sum02);
  }

  sum01 = 0;
  sum02 = 0;

  for (let i = 0; i < n; i++) {
    sum01 += board[i][i];
    sum02 += board[i][n - i - 1];
  }

  answer = Math.max(answer, sum01, sum02);

  return answer;
}

const board = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.log(solution(5, board));
