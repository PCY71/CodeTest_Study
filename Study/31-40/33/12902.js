/*12902번 문제
3xn 타일링*/

function solution(n) {
    if (n % 2 === 1) return 0;

    const dp = [0, 3];
    let sum = 0;

    for (let i = 2; i <= n / 2; i++) {
        dp[i] = ((dp[i - 1] * 3 + (sum * 2 + 2)) % 1000000007);
        sum += dp[i - 1] % 1000000007;
    }
    return dp[n / 2];
}

console.log(solution(4));
console.log(solution(6));