/* 43162번 문제
네트워크*/

function solution(n, computers) {
    let answer = 0;
    let totalVisited = new Array(n).fill(false);

    const dfs = (startNode) => {
        const dfsVisited = [];
        let nextVisit = [startNode];

        while (nextVisit.length > 0) {
            const node = nextVisit.shift();
            totalVisited[node] = true;

            if (!dfsVisited.includes(node)) {
                dfsVisited.push(node);
                //현 node와 연결된 node 중 방문하지 않은 목록 추가
                const linkedNode = [];
                for (let i = 0; i < n; i++) {
                    /*현 node와 i가 연결되어 있고
                    자기 자신을 가리키는 경우가 아니며
                    DFS에서 방문하지 않은 경우 방문목록에 추가
                    */
                    if (computers[node][i] && i !== node && !dfsVisited.includes(i)) {
                        linkedNode.push(i)
                    }
                }
                nextVisit = [...linkedNode, ...nextVisit];
            }
        }
    }

    for (let i = 0; i < totalVisited.length; i++) {
        if (!totalVisited[i]) {
            answer++;
            dfs(i)
        }
    }

    return answer;
}

const n = 3;
const computers1 = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];
const computers2 = [[1, 1, 0], [1, 1, 1], [0, 1, 1]];

console.log(solution(n, computers1));
console.log(solution(n, computers2));
