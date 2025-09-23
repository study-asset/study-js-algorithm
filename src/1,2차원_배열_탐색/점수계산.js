function solution(n, nums) {
  let answer = 0;
  let seq = 0;

  for (let result of nums) {
    if (result === 1) {
      seq++;
      answer += seq;
    } else {
      seq = 0;
    }
  }

  return answer;
}

console.log(solution(10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
