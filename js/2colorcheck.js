function twoColoringGraph(input) {
  const [n, edges] = input;
  const graph = Array.from({ length: n }, () => []);

  // 建立 adjacency list
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const colors = Array(n).fill(-1);

  for (let start = 0; start < n; start++) {
    if (colors[start] !== -1) continue;
    const queue = [start];
    colors[start] = 0;

    while (queue.length) {
      const node = queue.shift();
      for (const nei of graph[node]) {
        if (colors[nei] === -1) {
          colors[nei] = 1 - colors[node];
          queue.push(nei);
        } else if (colors[nei] === colors[node]) {
          return []; // 不是二分圖
        }
      }
    }
  }

  return colors;
}

// === 測試題目 ===
const input = [13, [
  [11,12],[9,11],[4,12],[7,8],[1,10],[2,9],[6,11],[1,12],[3,11],
  [2,10],[4,6],[3,6],[1,9],[2,6],[7,11],[2,12],[8,12],[2,5],
  [0,6],[0,3],[3,4],[6,8]
]];

console.log(twoColoringGraph(input));