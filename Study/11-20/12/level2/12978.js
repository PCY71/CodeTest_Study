/* 12978번 문제
배달*/

function solution(N, road, K) {
    let answer = 0;
    const graph = Array.from(Array(N), () => Array(N).fill(Infinity));
    for (let i = 0; i < N; i++) {
        graph[i][i] = 0;
    }

    //각 도로별 거리 기록
    for (const path of road) {
        const [from, to, distance] = path;
        graph[from - 1][to - 1] = Math.min(graph[from - 1][to - 1], distance);
        graph[to - 1][from - 1] = Math.min(graph[to - 1][from - 1], distance);
    }

    //플로이드 와샬
    for (let k = 0; k < N; k++) {
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
            }
        }
    }

    return graph[0].filter((el) => el <= K).length;
}

console.log(solution(5, [[1, 2, 1], [2, 3, 3], [5, 2, 2], [1, 4, 2], [5, 3, 1], [5, 4, 2]], 3));
console.log(solution(6, [[1, 2, 1], [1, 3, 2], [2, 3, 2], [3, 4, 3], [3, 5, 2], [3, 5, 3], [5, 6, 1]], 4));