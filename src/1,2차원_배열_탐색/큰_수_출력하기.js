function solution(n, nums) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    if (!nums[i - 1]) {
      answer.push(nums[i]);
    } else if (nums[i - 1] < nums[i]) {
      answer.push(nums[i]);
    }
  }

  return answer;
}

console.log(solution(6, [7, 3, 9, 5, 6, 12]));
