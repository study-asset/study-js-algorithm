function solution(arr) {
  let answer = arr;
  let flag = false;
  const total = arr.reduce((acc, cur) => acc + cur, 0);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      else if (total - (arr[i] + arr[j]) === 100) {
        if (i > j) {
          arr.splice(i, 1);
          arr.splice(j, 1);
        } else {
          arr.splice(j, 1);
          arr.splice(i, 1);
        }

        flag = true;
        break;
      }
    }

    if (flag) break;
  }

  return answer;
}

const bodyHeights = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(bodyHeights));
