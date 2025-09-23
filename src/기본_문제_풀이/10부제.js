const ban = 0;
const nums = [12, 20, 54, 30, 87, 91, 30];

let answer = 0;

for (let num of nums) {
  if (num % 10 === ban) answer++;
}

console.log(answer);
