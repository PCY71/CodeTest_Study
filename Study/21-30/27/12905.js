/* 12905번 문제
가장 큰 정사각형 찾기*/
//개념 참고 https://minnnne.tistory.com/16

function solution(board) {
    let answer = 0;
    let row = board.length;
    let col = board[0].length;

    if (row === 1 || col === 1) return 1;

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (board[i][j] !== 0) {
                let min = Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]);
                board[i][j] = min + 1;

                if (answer < board[i][j]) answer = board[i][j];
            }
        }
    }

    return answer ** 2;
}

const test1 = [[0, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 1, 0]];
const test2 = [[0, 0, 1, 1], [1, 1, 1, 1]];

console.log(solution(test1));
console.log(solution(test2));