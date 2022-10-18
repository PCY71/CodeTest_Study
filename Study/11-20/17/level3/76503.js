/* 76503번 문제
모두 0으로 만들기*/

function solution(a, edges) {
    if (a.reduce((acc, cur) => acc + cur, 0) !== 0) return -1;
    const graph = new Array(a.length).fill(0).map(() => new Array());
    const stack = [[0, null]];
    const visited = new Array(a.length).fill(false);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    };

    let answer = 0n;

    while (stack.length) {
        const [start, parent] = stack.pop();
        if (visited[start]) {
            a[parent] += a[start];
            answer += BigInt(Math.abs(a[start]));
            continue;
        }

        stack.push([start, parent]);
        visited[start] = true;

        for (const next of graph[start]) {
            if (!visited[next]) {
                stack.push([next, start]);
            }
        }
    }

    return Number(answer);
}

console.log(solution([-5, 0, 2, 1, 2], [[0, 1], [3, 4], [2, 3], [0, 3]]));
console.log(solution([0, 1, 0], [[0, 1], [1, 2]]));