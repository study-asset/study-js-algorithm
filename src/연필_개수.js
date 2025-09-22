// 연필 1다스는 총 12개이고, 학생들에게 연필 1개씩 나눠준다면 몇 다스가 필요한가 ..
// 그건 학생 수에 1다스의 개수인 12를 나누고 계산된 값을 반올림하여 필요한 다스의 개수를 알 수 있다.

function solution(students) {
  let answer = Math.ceil(students / 12);
  return answer;
}

console.log(solution(25));
console.log(solution(178));
