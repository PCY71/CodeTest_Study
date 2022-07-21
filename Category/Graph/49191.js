/* 49191번 문제
순위*/

function solution(n, results) {

    let wins = Array.from(Array(n + 1), () => new Set());
    let loses = Array.from(Array(n + 1), () => new Set());

    //wins와 loses results 기반으로 초기화
    results.map((el) => {
        const [winner, loser] = el;
        wins[winner].add(loser);
        loses[loser].add(winner);
    });

    for (let i = 1; i < n + 1; i++) {
        // i 선수에게 진 선수는 i가 패한 선수에게도 패함
        for (const loser of wins[i]) {
            for (const winner of loses[i]) {
                loses[loser].add(winner);
            }
        }

        // i 선수에게 이긴 선수는 i 선수에게 패한 선수에게도 이김
        for (const winner of loses[i]) {
            for (const loser of wins[i]) {
                wins[winner].add(loser);
            }
        }
    }

    // 가상의 match까지 합쳐 n-1이 되는 경우를 check
    let answer = 0;
    for (let i = 1; i < n + 1; i++) {
        let totalMatch = wins[i].size + loses[i].size;
        if (totalMatch === n - 1) answer++;
    }

    return answer;
}

const n = 5;
const results = [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]];

console.log(solution(n, results));