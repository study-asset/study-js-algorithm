// function findCharIndexes(s, t) {
//   let result = [];
//   let currentIndex = s.indexOf(t);

//   while (currentIndex !== -1) {
//     result.push(currentIndex);
//     currentIndex = s.indexOf(t, currentIndex + 1);
//   }

//   return result;
// }

// function solution(s, t) {
//   let answer = [];
//   let tIndexes = findCharIndexes(s, t);

//   for (let i = 0; i < s.length; i++) {
//     let min = Number.MAX_SAFE_INTEGER;

//     for (let j = 0; j < tIndexes.length; j++) {
//       let diff = Math.abs(i - tIndexes[j]);
//       if (min > diff) min = diff;
//     }

//     answer.push(min);
//   }

//   return answer.join(" ");
// }

function solution(s, t) {
  let answer = [];
  let P = 1000;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) P = 0;
    else P++;
    answer.push(P);
  }

  P = 1000;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) P = 0;
    else P++;
    answer[i] = Math.min(answer[i], P);
  }

  return answer;
}

console.log(solution("teachermode", "e"));
