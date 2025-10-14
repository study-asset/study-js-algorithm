// function solution(n, nums) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   let max = Number.MIN_SAFE_INTEGER;

//   for (let i = 0; i < n; i++) {
//     const numArr = String(nums[i]).split("");
//     const total = numArr.reduce((pre, cur) => pre + Number(cur), 0);

//     if (total >= max && nums[i] > answer) {
//       answer = nums[i];
//       max = total;
//     }
//   }

//   return answer;
// }

function solution(n, nums) {
  let answer = Number.MIN_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  for (let num of nums) {
    let sum = 0;
    let tmp = num;

    while (tmp !== 0) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }

    if (sum >= max && num > answer) {
      max = sum;
      answer = num;
    }
  }

  return answer;
}

console.log(solution(7, [128, 460, 603, 40, 521, 137, 123]));
