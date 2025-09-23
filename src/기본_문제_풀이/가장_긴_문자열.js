function solution(arr) {
  let answer = "";
  let max = Number.MIN_SAFE_INTEGER;

  for (let string of arr) {
    if (string.length > max) {
      max = string.length;
      answer = string;
    }
  }

  return answer;
}

console.log(solution(["teacher", "time", "student", "beautiful", "good"]));
