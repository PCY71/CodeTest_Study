/* 17683번 문제
방금그곡*/

//크루스칼 알고리즘 사용한 풀이법 (MST, 최소신장트리)
//좀 더 공부해보기
function solution(n, costs) {
    let answer = 0;
    const parent = [];
    for (let i = 0; i < n; i++) {
        parent.push(i);
    }

    costs.sort((a, b) => a[2] - b[2]);

    for (const cost of costs) {
        if (!findParent(parent, cost[0], cost[1])) {
            answer += cost[2];
            unionParent(parent, cost[0], cost[1]);
        }
    }

    return answer;
}

//최상위 부모를 찾을때까지 재귀
const getParent = (parent, x) => {
    if (parent[x] === x) return x;
    return parent[x] = getParent(parent, parent[x]);
}

//두 노드의 부모를 병합
const unionParent = (parent, a, b) => {
    const n1 = getParent(parent, a);
    const n2 = getParent(parent, b);
    if (n1 < n2) return parent[n2] = n1;
    else return parent[n1] = n2;
}

// 두 노드의 부모를 찾아 같으면 true, 다르면 false
const findParent = (parent, a, b) => {
    const n1 = getParent(parent, a);
    const n2 = getParent(parent, b);
    if (n1 === n2) return true;
    else return false;
}

console.log(solution(4, [[0, 1, 1], [0, 2, 2], [1, 2, 5], [1, 3, 1], [2, 3, 8]]));