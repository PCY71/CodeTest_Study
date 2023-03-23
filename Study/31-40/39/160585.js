/*160585번 문제
혼자서 하는 틱택토*/

function solution(board) {
    let cntO = 0;
    let cntX = 0;

    for (const row of board) {
        for (const room of row) {
            if (room === 'O') cntO++;
            else if (room === 'X') cntX++;
        }
    }
    //O가 2개 이상 많거나 X가 더 많은 경우 순서 실수
    if (cntO > cntX + 1 || cntX > cntO) return 0;

    //승리로 게임이 끝나고도 진행됐는지 -> O승리시 x가 적어야, X승리시 O와 갯수가 같아야 한다
    if (checkWin('O', board) && cntO <= cntX) return 0;
    if (checkWin('X', board) && cntO > cntX) return 0;

    //정상적으로 종료된 경우
    return 1;
}

const checkWin = (char, board) => {
    return checkRow(char, board) || checkCol(char, board) || checkDiag(char, board);
}
const checkRow = (char, board) => {
    for (const row of board) {
        if (row[0] === char && row[1] === char && row[2] === char) return true;
    }
    return false;
}
const checkCol = (char, board) => {
    for (let i = 0; i < 3; i++) {
        if (board[0][i] === char && board[1][i] === char && board[2][i] === char) return true;
    }
    return false;
}
const checkDiag = (char, board) => {
    if ((board[0][0] === char && board[1][1] === char && board[2][2] === char)
        || (board[0][2] === char && board[1][1] === char && board[2][0] === char)
    ) return true;
    return false;
}
const board1 = ["O.X", ".O.", "..X"];
const board2 = ["OOO", "...", "XXX"];
const board3 = ["...", ".X.", "..."];

console.log(solution(board1));
console.log(solution(board2));
console.log(solution(board3));