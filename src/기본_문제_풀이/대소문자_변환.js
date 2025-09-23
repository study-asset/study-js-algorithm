function solution(string) {
  let answer = "";

  for (let char of string) {
    const num = char.charCodeAt();

    if (num >= 65 && num <= 90) answer += String.fromCharCode(num + 32);
    else answer += String.fromCharCode(num - 32);
    // if (char.toUpperCase() === char) answer += char.toLowerCase();
    // else answer += char.toUpperCase();
  }

  return answer;
}

console.log(solution("StuDY"));
