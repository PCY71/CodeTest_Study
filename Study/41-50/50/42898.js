/*42898 문제
등굣길*/

function solution(m, n, puddles) {
    const dp = Array.from(Array(n), () => Array(m).fill(0));
    puddles.forEach(([x, y]) => dp[y - 1][x - 1] = -1);

    dp[0][0] = 1;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let path = dp[i][j];
            if (path === -1) continue;

            if (i - 1 >= 0 && dp[i - 1][j] !== -1) path += dp[i - 1][j];
            if (j - 1 >= 0 && dp[i][j - 1] !== -1) path += dp[i][j - 1];
            dp[i][j] = path % 1000000007;
        }
    }
    return dp[n - 1][m - 1] % 1000000007;
}

console.log(solution(4, 3, [[2, 2]]));