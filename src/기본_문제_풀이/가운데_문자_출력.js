function solution(string) {
  let answer = "";
  const mid = Math.floor(string.length / 2);

  if (string.length % 2 === 0) {
    //   answer = string.substring(mid - 1, mid + 1);
    answer = string.substr(mid - 1, 2);
  } else {
    // answer = string.substring(mid, mid + 1);
    answer = string.substr(mid, 1);
  }

  return answer;
}

console.log(solution("study"));
