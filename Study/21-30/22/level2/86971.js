/* 86971번 문제
전력망을 둘로 나누기*/

function solution(n, wires) {
    let answer = Number.MAX_SAFE_INTEGER;
    const graph = Array.from(new Array(n), () => Array(n).fill(0));

    const DFS = (node, visited, path) => {
        visited[node] = true;
        for (let i = 0; i < n; i++) {
            if (!visited[i] && path[node][i]) {
                DFS(i, visited, path)
            }
        }
    }

    wires.forEach(([from, to]) => {
        graph[from - 1][to - 1] = graph[to - 1][from - 1] = 1;
    })

    wires.forEach(([from, to]) => {
        //2차원 배열 복사시 깊은복사 하려면 이런식으로 내부 하나하나 복사해야
        const curPath = graph.map(v => [...v]);
        const visited = Array(n).fill(false);
        curPath[from - 1][to - 1] = curPath[to - 1][from - 1] = 0;
        DFS(0, visited, curPath);

        const visited_node_nums = visited.reduce((acc, cur) => acc + cur, 0);
        const diff = Math.abs(visited_node_nums - (n - visited_node_nums));
        answer = Math.min(diff, answer);
    })

    return answer;
}

console.log(solution(9, [[1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]]));
console.log(solution(4, [[1, 2], [2, 3], [3, 4]]));
console.log(solution(7, [[1, 2], [2, 7], [3, 7], [3, 4], [4, 5], [6, 7]]));