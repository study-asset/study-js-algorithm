function solution(string) {
  let answer = true;
  const lower = string.toLowerCase();
  const reverse = [...lower].reverse();

  for (let i = 0; i < lower.length; i++) {
    if (lower[i] != reverse[i]) {
      answer = false;
    }
  }

  return answer ? "YES" : "NO";
}

console.log(solution("gooG"));
