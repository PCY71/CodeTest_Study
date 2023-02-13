/*154538번 문제
숫자 변환하기

연쇄 행렬 곱셈 알고리즘 참고
https://ggjjdiary.tistory.com/132
*/

function solution(matrix_sizes) {

    //각 곱셈에 필요한 숫자 선 별
    const num = matrix_sizes.map((el) => el[0]);
    num.push(matrix_sizes[matrix_sizes.length - 1][1]);
    const size = num.length;

    //dynamic programming으로 기록될 배열
    const dp = Array.from(Array(size + 1), () => new Array(size + 1).fill(Infinity));

    for (let n = 0; n < size; n++) {
        for (let i = 1; i <= size - n; i++) {
            let j = i + n;
            if (i === j) dp[i][j] = 0;
            else {
                for (let k = i; k <= j - 1; k++) {
                    const result = dp[i][k] + dp[k + 1][j] + num[i - 1] * num[k] * num[j];
                    if (!result) continue;
                    dp[i][j] = Math.min(dp[i][j], result);
                }
            }
        }
    }
    return dp[1][size - 1];
}

console.log(solution([[5, 3], [3, 10], [10, 6]]));