function solution(string) {
  let reg = /[^a-z]/g;

  let answer = "YES";
  let lower = string.toLowerCase().replace(reg, "");

  if ([...lower].reverse().join("") !== lower) {
    answer = "NO";
  }

  return answer;
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
