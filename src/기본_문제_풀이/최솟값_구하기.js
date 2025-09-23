const arr = [5, 3, 7, 11, 2, 15, 17];

function solution(nums) {
  let answer = Math.min(...nums);
  return answer;
}

console.log(solution(arr));
