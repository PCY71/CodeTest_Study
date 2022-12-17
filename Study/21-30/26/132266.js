/* 132266번 문제
부대복귀*/

function solution(n, roads, sources, destination) {
    let graph = Array.from(Array(n + 1), () => Array());
    roads.forEach(([start, dest]) => {
        graph[start].push(dest);
        graph[dest].push(start);
    })

    const visited = new Array(n + 1).fill(Infinity);
    const bfs = (dest) => {
        const queue = [dest];
        visited[dest] = 0;
        while (queue.length > 0) {
            const node = queue.shift();
            for (let next of graph[node]) {
                if (visited[node] + 1 < visited[next]) {
                    visited[next] = visited[node] + 1;
                    queue.push(next);
                }
            }
        }
    }

    bfs(destination);

    return sources.map((source) => visited[source] === Infinity ? -1 : visited[source]);

}

console.log(solution(3, [[1, 2], [2, 3]], [2, 3], 1));
console.log(solution(5, [[1, 2], [1, 4], [2, 4], [2, 5], [4, 5]], [1, 3, 5], 5));