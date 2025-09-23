function solution(string) {
  let answer = "";

  for (let char of string) {
    if (char === "A") {
      answer += "#";
    } else {
      answer += char;
    }
  }

  return answer;
  //   return str.replaceAll("A", "#");
}

console.log(solution("BANANA"));
