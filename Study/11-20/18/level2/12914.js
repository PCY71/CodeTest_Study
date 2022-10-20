/* 12914번 문제
멀리 뛰기*/

function solution(n) {
    const dp = new Array(n + 1);
    dp[0] = dp[1] = 1n;
    for (let i = 2; i < n + 1; i++) {
        dp[i] = dp[i - 2] + dp[i - 1];
    }
    return dp[n] % 1234567n;
}
console.log(solution(4));
console.log(solution(3));