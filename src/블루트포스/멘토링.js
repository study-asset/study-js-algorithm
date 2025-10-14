function solution(n, m, nums) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let count = 0;

      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;

        for (let s = 0; s < n; s++) {
          if (nums[k][s] === i) pi = s;
          if (nums[k][s] === j) pj = s;
        }

        if (pi < pj) count++;
      }

      if (count === m) answer++;
    }
  }

  return answer;
}

const nums = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(solution(4, 3, nums));
