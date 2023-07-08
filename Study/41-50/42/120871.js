/*120871 문제
저주의 숫자 3*/

function solution(n) {
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        let temp = dp[i - 1] + 1;
        while (temp % 3 === 0 || temp.toString().includes('3')) temp++;
        dp[i] = temp;
    }

    return dp[n];
}
console.log(solution(15));
console.log(solution(40));