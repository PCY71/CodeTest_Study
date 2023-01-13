/* 64061번 문제
크레인 인형뽑기 게임*/

function solution(board, moves) {
    let answer = 0;
    let bascket = [];
    let stack = Array.from(Array(board.length), () => new Array());

    for (let i = board.length - 1; i >= 0; i--) {
        for (let j = 0; j < board[0].length; j++) {
            const doll = board[i][j];
            if (doll) stack[j].push(doll);
        }
    }

    moves.forEach((num) => {
        const move = num - 1;
        const line = stack[move];
        let lastDoll = bascket.length ? bascket[bascket.length - 1] : 0;
        if (line.length) {
            if (line[line.length - 1] === lastDoll) {
                line.pop();
                bascket.pop();
                answer += 2;
            } else {
                bascket.push(line.pop());
            }
        }
    })
    return answer;
}

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4]));