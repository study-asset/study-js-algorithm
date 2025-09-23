function solution(n, A, B) {
  let answer = "";

  for (let i = 0; i < n; i++) {
    const [a, b] = [A[i], B[i]];
    const diff = Math.max(a, b) - Math.min(a, b);

    if (diff === 0) {
      answer += "D\n";
    }

    if (diff === 1) {
      if (a > b) {
        answer += "A\n";
      } else {
        answer += "B\n";
      }
    }

    if (diff === 2) {
      if (a > b) {
        answer += "B\n";
      } else {
        answer += "A\n";
      }
    }
  }

  return answer;
}

console.log(solution(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
