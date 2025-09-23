function solution(n, students) {
  let answer = 1;
  let max = students[0];

  for (let i = 1; i < n; i++) {
    if (students[i] > max) {
      answer++;
      max = students[i];
    }
  }

  return answer;
}

console.log(solution(8, [130, 135, 148, 140, 145, 150, 150, 153]));
