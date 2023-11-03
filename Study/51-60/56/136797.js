/*136797 문제
숫자 타자 대회*/

function solution(numbers) {
    /**greedy 사용시 가중치 같은 데에서 안됨
     * let answer = 0;
    const map = [
        [1, 7, 6, 7, 5, 4, 5, 3, 2, 3],
        [7, 1, 2, 4, 2, 3, 5, 4, 5, 6],
        [6, 2, 1, 2, 3, 2, 3, 5, 4, 5],
        [7, 4, 2, 1, 5, 3, 2, 6, 5, 4],
        [5, 2, 3, 5, 1, 2, 4, 2, 3, 5],
        [4, 3, 2, 3, 2, 1, 2, 3, 2, 3],
        [5, 5, 3, 2, 4, 2, 1, 5, 3, 2],
        [3, 4, 5, 6, 2, 3, 5, 1, 2, 4],
        [2, 5, 4, 5, 3, 2, 3, 2, 1, 2],
        [3, 6, 5, 4, 5, 3, 2, 4, 2, 1]
        ];
    let left = 4;
    let right = 6;

    for(const number of numbers) {
        const num = Number(number);
        const lCost = map[left][num];
        const rCost = map[right][num];

        if(lCost < rCost){
            answer += map[left][num];
            left = num;
        }else {
            answer += map[right][num];
            right = num;
        }
    }
    return answer;
    */
    const map = [
        [1, 7, 6, 7, 5, 4, 5, 3, 2, 3],
        [7, 1, 2, 4, 2, 3, 5, 4, 5, 6],
        [6, 2, 1, 2, 3, 2, 3, 5, 4, 5],
        [7, 4, 2, 1, 5, 3, 2, 6, 5, 4],
        [5, 2, 3, 5, 1, 2, 4, 2, 3, 5],
        [4, 3, 2, 3, 2, 1, 2, 3, 2, 3],
        [5, 5, 3, 2, 4, 2, 1, 5, 3, 2],
        [3, 4, 5, 6, 2, 3, 5, 1, 2, 4],
        [2, 5, 4, 5, 3, 2, 3, 2, 1, 2],
        [3, 6, 5, 4, 5, 3, 2, 4, 2, 1]
    ];

    const dp = Array.from(Array(numbers.length + 1), () => Array(10).fill('').map((el) => Array(10).fill(null)));
    dp[0][4][6] = 0;

    for (let i = 0; i < numbers.length; i++) {
        const num = Number(numbers[i]);

        for (let left = 0; left < 10; left++) {
            for (let right = 0; right < 10; right++) {
                if (dp[i][left][right] !== null) {
                    const prev = dp[i][left][right];
                    const lCost = map[left][num];
                    const rCost = map[right][num];

                    dp[i + 1][num][right] = dp[i + 1][num][right] !== null
                        ? Math.min(dp[i + 1][num][right], prev + lCost)
                        : prev + lCost;

                    dp[i + 1][left][num] = dp[i + 1][left][num] !== null
                        ? Math.min(dp[i + 1][left][num], prev + rCost)
                        : prev + rCost;
                }
            }
        }
    }

    return dp[numbers.length].flat().reduce((acc, cur) => cur !== null
        ? acc < cur ? acc : cur
        : acc, Infinity);
}

console.log(solution("1756"));
console.log(solution("5123"));