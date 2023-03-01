/*12907번 문제
거스름돈*/

function solution(n, money) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;

    for (const m of money) {
        for (let i = 1; i <= n; i++) {
            if (i >= m) {
                dp[i] += dp[i - m] % 1000000007;
            }
        }
    }

    return dp[n];
}

console.log(solution(5, [1, 2, 5]));