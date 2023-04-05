/*131129번 문제
카운트 다운*/

function solution(target) {
    const dp = Array.from(Array(300000), (_) => [Infinity, 0]);
    dp[0][0] = 0;

    for (let i = 0; i < target; i++) {
        const check = (addIdx, cnt) => {
            if (dp[i + addIdx][0] >= dp[i][0] + 1) {
                if (dp[i + addIdx][0] === dp[i][0] + 1) {
                    dp[i + addIdx][1] = Math.max(dp[i + addIdx][1], dp[i][1] + cnt);
                } else {
                    dp[i + addIdx] = [dp[i][0] + 1, dp[i][1] + cnt];
                }
            }
        }
        for (let j = 1; j <= 20; j++) {
            [[1, 1], [2, 0], [3, 0]].forEach(([v, c]) => {
                check(j * v, c)
            })
        }
        check(50, 1);
    }

    return dp[target];
}

console.log(solution(21));
console.log(solution(58));
console.log(solution(106));