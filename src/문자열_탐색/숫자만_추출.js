// function solution(string) {
//   let lower = string.toLowerCase();
//   let answer = lower.replace(/[a-z]/g, "");
//   return Number(answer);
// }

function solution(string) {
  let answer = "";

  for (let char of string) {
    if (!isNaN(char)) answer += char;
  }

  return Number(answer);
}

console.log(solution("g0en2T0s8eSoft"));
