/*12913번 문제
땅따먹기*/

function solution(land) {
    const dp = Array.from(Array(land.length), () => Array(4).fill(0));;
    for (let i = 0; i < land[0].length; i++) {
        dp[0][i] = land[0][i];
    }

    for (let i = 1; i < land.length; i++) {
        dp[i][0] = land[i][0] + Math.max(dp[i - 1][1], dp[i - 1][2], dp[i - 1][3]);
        dp[i][1] = land[i][1] + Math.max(dp[i - 1][0], dp[i - 1][2], dp[i - 1][3]);
        dp[i][2] = land[i][2] + Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][3]);
        dp[i][3] = land[i][3] + Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]);
    }

    return Math.max(...dp[land.length - 1]);
}


console.log(solution([[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]]));