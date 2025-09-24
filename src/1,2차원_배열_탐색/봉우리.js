function solution(n, map) {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let current = map[i][j]; // 자신
      let isTop = true;

      for (let k = 0; k < dx.length; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];

        if (map[nx] && map[ny] && map[nx][ny] >= current) {
          isTop = false;
          break;
        }
      }

      if (isTop) answer++;
    }
  }

  return answer;
}

const map = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

console.log(solution(5, map));
