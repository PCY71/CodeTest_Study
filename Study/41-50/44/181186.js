/*181186번 문제
아방가르드 타일링*/

function solution(n) {
    const dp = [1, 1, 3, 10, 23, 62, 170];
    const mod = 1000000007;
    if (n < 7) return dp[n];

    //추가 패턴 1,2,5, 2,2,4,2,2,4,2,2,4.......
    //점화식 a(n) = a(n-1) + 2*a(n-2) + 6*a(n-3) + a(n-4) - a(n-6)

    for (let i = 7; i <= n; i++) {
        dp[i] = dp[i] = (dp[i - 1] + dp[i - 2] * 2 + dp[i - 3] * 6 + dp[i - 4] - dp[i - 6] + mod) % mod;;
    }

    return dp[n];
}

console.log(solution(2));
console.log(solution(3));