function solution(string, char) {
  //   let answer = 0;

  //   for (let str of string) {
  //     if (str === char) answer += 1;
  //   }

  //   return answer;

  // R을 기준으로 구분자 처리
  let answer = string.split(char);
  return answer.length - 1;
}

console.log(solution("COMPUTERPROGRAMMING", "R"));
