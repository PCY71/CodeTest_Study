/* 12945번 문제
피보나치 수*/

function solution(n) {
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567
    }

    return dp[n];
}

console.log(solution(3));
console.log(solution(5));