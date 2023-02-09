/*154538번 문제
숫자 변환하기*/

function solution(x, y, n) {
    if (x === y) return 0;

    const dp = [];
    dp[x] = 0;

    for (let i = x; i < y; i++) {
        if (dp[i] === undefined) continue;
        const nextStep = dp[i] + 1;
        if (i * 2 === y || i * 3 === y || i + n === y) return nextStep;
        //각각의 연산에 step수를 기록
        dp[i * 2] = dp[i * 2] ? Math.min(nextStep, dp[i * 2]) : nextStep;
        dp[i * 3] = dp[i * 3] ? Math.min(nextStep, dp[i * 3]) : nextStep;
        dp[i + n] = dp[i + n] ? Math.min(nextStep, dp[i + n]) : nextStep;
    }

    return -1;
}

console.log(solution(10, 40, 5));
console.log(solution(10, 40, 30));
console.log(solution(2, 5, 4));