// function solution(n, nums) {
//   let answer = [];

//   for (let num of nums) {
//     let reverse = "";
//     let tmp = num;

//     while (tmp !== 0) {
//       reverse += String(tmp % 10);
//       tmp = Math.floor(tmp / 10);
//     }

//     let isDecimal = true;
//     let sqrt = Math.sqrt(Number(reverse));

//     if (Number(reverse) < 2) {
//       isDecimal = false;
//     }

//     for (let i = 2; i <= sqrt; i++) {
//       if (Number(reverse) % i === 0) {
//         isDecimal = false;
//         break;
//       }
//     }

//     if (isDecimal) {
//       answer.push(Number(reverse));
//     }
//   }

//   return answer.join(" ");
// }

function isPrime(num) {
  if (num === 1) return true;

  for (let i = 2; i <= parseInt(num / 2); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function solution(n, nums) {
  let answer = [];

  for (let num of nums) {
    let reverse = "";

    while (num) {
      reverse += num % 10;
      num = Math.floor(num / 10);
    }

    if (isPrime(Number(reverse))) {
      answer.push(Number(reverse));
    }
  }

  return answer.join(", ");
}

console.log(solution(9, [32, 55, 62, 20, 250, 370, 200, 30, 100]));
