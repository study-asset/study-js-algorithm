// function solution(string) {
//   let answer = "";
//   const set = new Set(string);

//   for (let str of set) {
//     let count = 0;

//     for (let char of string) {
//       if (str === char) count++;
//     }

//     if (count !== 1) {
//       answer += `${str}${count}`;
//     } else {
//       answer += `${str}`;
//     }
//   }

//   return answer;
// }

// function solution(string) {
//   let answer = "";
//   let count = 1;

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === string[i + 1]) {
//       count += 1;
//     } else if (count === 1 && string[i] !== string[i + 1]) {
//       answer += `${string[i]}`;
//     } else {
//       answer += `${string[i]}${count}`;
//       count = 1;
//     }
//   }

//   return answer;
// }

function solution(string) {
  let answer = "";
  let count = 1;
  string = string + " ";

  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] === string[i + 1]) {
      count += 1;
    } else {
      answer += string[i];
      if (count > 1) answer += String(count);
      count = 1;
    }
  }

  return answer;
}

console.log(solution("KKHSSSSSSSE"));
