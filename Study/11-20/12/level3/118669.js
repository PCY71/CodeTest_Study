/* 118669번 문제
등산코스 정하기
효율성 개선해야됨*/


function solution(n, paths, gates, summits) {
    const graph = Array.from(Array(n), () => Array(n).fill(0));
    let answer = [];
    let min_intensity = Infinity;

    for (let i = 0; i < n; i++) {
        graph[i][i] = 0;
    }

    for (const path of paths) {
        const [from, to, distance] = path;
        graph[from - 1][to - 1] = distance;
        graph[to - 1][from - 1] = distance;
    }

    const DFS = (queue) => {
        const [start, max_distance, visited, route] = queue.pop();
        const cur = route[route.length - 1];

        if (gates.includes(cur + 1)) {
            min_intensity = Math.min(min_intensity, max_distance);
            answer.push([start + 1, max_distance]);
            return;
        }
        visited[cur] = true;

        for (let i = 0; i < graph[cur].length; i++) {
            const next_distance = graph[cur][i];
            if (!visited[i] && next_distance && next_distance <= min_intensity) {
                queue.push([start, Math.max(max_distance, next_distance), visited.slice(), [...route, i]]);
                DFS(queue)
            }
        }

    }

    for (const summit of summits) {
        const visited = new Array(n).fill(false)
        summits.forEach((summ) => visited[summ - 1] = true);
        const queue = [[summit - 1, 0, visited, [summit - 1]]];
        DFS(queue);
    }
    return answer.sort((a, b) => a[1] - b[1])[0];
}

console.log(solution(6, [[1, 2, 3], [2, 3, 5], [2, 4, 2], [2, 5, 4], [3, 4, 4], [4, 5, 3], [4, 6, 1], [5, 6, 1]], [1, 3], [5]));
console.log(solution(7, [[1, 4, 4], [1, 6, 1], [1, 7, 3], [2, 5, 2], [3, 7, 4], [5, 6, 6]], [1], [2, 3, 4]));
console.log(solution(7, [[1, 2, 5], [1, 4, 1], [2, 3, 1], [2, 6, 7], [4, 5, 1], [5, 6, 1], [6, 7, 1]], [3, 7], [1, 5]));