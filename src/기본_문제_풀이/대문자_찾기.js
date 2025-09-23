function solution(string) {
  //   const reg = /[A-Z]/;
  //   return reg.test(string).length;

  let answer = 0;

  for (let char of string) {
    if (char.toUpperCase() === char) answer++;
    // let num = char.charCodeAt();
    // if (num >= 65 && num <= 90) answer++;
  }

  return answer;
}

console.log(solution("KoreanTimeGood"));
