function solution(array) {
  //   const set = new Set(array);
  //   return Array.from(set);

  let answer = array.filter((string, index) => {
    if (array.indexOf(string) === index) return true;
  });

  return answer;
}

console.log(solution(["good", "time", "good", "time", "student"]));
