/* 43164번 문제
여행경로*/

function solution(tickets) {

    //알파뱃 순 정렬
    tickets.sort((a, b) => {
        let [fromA, toA] = a;
        let [fromB, toB] = b;
        if (fromA > fromB) return 1;
        if (fromA < fromB) return -1;
        if (toA > toB) return 1;
        if (toA < toB) return -1;
        return 0;
    })

    const travel = (cur, visited, left) => {
        if (left.length === 0) {
            return [...visited, cur];
        }
        for (let i = 0; i < left.length; i++) {
            const [from, to] = left[i];
            if (cur === from) {
                let newVisited = travel(to, [...visited, cur], [...left.slice(0, i), ...left.slice(i + 1)])
                if (newVisited && newVisited.length - 1 === tickets.length) return newVisited;
            }
        }
    }

    for (let i = 0; i < tickets.length; i++) {
        const [from, to] = tickets[i];
        const left = [...tickets.slice(0, i), ...tickets.slice(i + 1)];
        let visited
        if (from === 'ICN') {
            visited = travel(to, [from], left);
        }
        if (visited) return visited;
    }
}

const tickets1 = [["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]];
const tickets2 = [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]];

console.log(solution(tickets1));
console.log(solution(tickets2));