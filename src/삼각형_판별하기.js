// 두 막대기가 가장 큰 막대기보다 작다면 삼각형이 만들어 질 수 없다.
// 따라서, 가장 큰 막대기 길이를 가지고 두 변의 길이를 더해 짧은 지 대조해 보면 삼각형이 될 수 있을 지 판별할 수 있다.

function solution(a, b, c) {
  let answer;

  const size = a + b + c;
  const max = Math.max(a, b, c);

  if (size - max >= max) {
    answer = "YES";
  } else {
    answer = "NO";
  }

  return answer;
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
