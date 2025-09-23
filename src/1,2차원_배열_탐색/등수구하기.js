// function solution(n, scores) {
//   const answer = [];
//   const sorted = [...scores].sort((a, b) => b - a);

//   for (let score of scores) {
//     answer.push(sorted.indexOf(score) + 1);
//   }

//   return answer;
// }

// console.log(solution(5, [87, 89, 92, 100, 76]));

// function solution(n, scores) {
//   const answer = [];

//   for (let i = 0; i < n; i++) {
//     let rank = n;

//     for (let j = 0; j < n; j++) {
//       if (i !== j && scores[i] >= scores[j]) {
//         rank--;
//       }
//     }

//     answer.push(rank);
//   }

//   return answer;
// }

// console.log(solution(5, [92, 92, 92, 100, 76]));

function solution(n, scores) {
  let answer = Array.from({ length: n }).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (scores[j] > scores[i]) answer[i]++;
    }
  }

  return answer;
}

console.log(solution(5, [87, 89, 92, 100, 76]));
