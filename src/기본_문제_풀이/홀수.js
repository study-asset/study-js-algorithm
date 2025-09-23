const answer = [];
const nums = [12, 77, 38, 41, 53, 92, 85];

let sum = 0;
let min = Number.MAX_SAFE_INTEGER;
const odds = [];

for (let n of nums) {
  if (n % 2 !== 0) {
    sum += n;
    if (n < min) min = n;
  }
}

answer.push(sum);
answer.push(min);

console.log(answer.join("\n"));
