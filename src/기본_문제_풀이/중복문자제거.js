function solution(string) {
  //   let answer = "";

  //   for (let i = 0; i < string.length; i++) {
  //     if (string.indexOf(string[i]) === i) {
  //       answer += string[i];
  //     }
  //   }

  //   return answer;

  let answer = 0;
  let pos = string.indexOf("k");

  // indexOf는 발견하지 못할 경우, -1을 출력함
  while (pos !== -1) {
    answer++;
    pos = string.indexOf("k", pos + 1);
  }

  return answer;
}

console.log(solution("ksekkset"));
