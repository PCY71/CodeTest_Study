/*92344 문제
파괴되지 않은 건물*/

/** 카카오 해설 참조
 * https://tech.kakao.com/2022/01/14/2022-kakao-recruitment-round-1/
 */

function solution(board, skill) {
    const prefixSum = Array.from(Array(board.length + 1), () => new Array(board[0].length + 1).fill(0));

    skill.forEach(([type, r1, c1, r2, c2, degree]) => {
        const sum = type === 1 ? -degree : degree;
        prefixSum[r1][c1] += sum;
        prefixSum[r2 + 1][c2 + 1] += sum;
        prefixSum[r1][c2 + 1] -= sum;
        prefixSum[r2 + 1][c1] -= sum;
    })

    for (let r = 0; r < prefixSum.length; r++) {
        for (let c = 1; c < prefixSum[0].length; c++) {
            prefixSum[r][c] += prefixSum[r][c - 1];
        }
    }

    for (let r = 1; r < prefixSum.length; r++) {
        for (let c = 0; c < prefixSum[0].length; c++) {
            prefixSum[r][c] += prefixSum[r - 1][c];
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            board[i][j] = board[i][j] + prefixSum[i][j];
        }
    }
    return board.flat().filter((el) => el > 0).length;
}

console.log(solution([[5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5]], [[1, 0, 0, 3, 4, 4], [1, 2, 0, 2, 3, 2], [2, 1, 0, 3, 1, 2], [1, 0, 1, 3, 3, 1]]));
console.log(solution([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[1, 1, 1, 2, 2, 4], [1, 0, 0, 1, 1, 2], [2, 2, 0, 2, 0, 100]]));