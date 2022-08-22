/* 67259번 문제
경주로 건설*/

function solution(board) {

    //다음 step의 이동 좌표 하,우,상,좌(상하/좌우를 짝수 홀수로 나눠서 방향전환 알 수 있게)
    const n = board.length;
    const moveX = [0, 1, 0, -1];
    const moveY = [1, 0, -1, 0];
    const checkBoundary = (y, x) => x >= 0 && y >= 0 && x < n && y < n;

    const map = board.map((row) => row.map((el) => [el, el, el, el]))
    map[n - 1][n - 1] = [Infinity, Infinity, Infinity, Infinity]

    //[y,x,step,prevDirc]
    const queue = [[0, 0, 0, 0]];

    while (queue.length) {
        const [curY, curX, prevDir, step] = queue.shift();

        //기존 값이 더 효율적인 경우
        if (map[curY][curX][prevDir] !== 0 && map[curY][curX][prevDir] < step) continue;
        map[curY][curX][prevDir] = curY === 0 && curX === 0 ? 1 : step;

        //4방향으로 진행
        for (let i = 0; i < 4; i++) {
            const [nextX, nextY] = [curX + moveX[i], curY + moveY[i]];
            //if(i !== prevDir && i%2 === prevDir%2) continue;
            const nextStep = curX === 0 && curY === 0
                ? 100
                : prevDir % 2 === i % 2
                    ? step + 100
                    : step + 600;
            if (checkBoundary(nextY, nextX) && board[nextY][nextX] !== 1) queue.push([nextY, nextX, i, nextStep]);
        }
    }

    return Math.min(...map[n - 1][n - 1]);
}

const board = [[[0, 0, 0], [0, 0, 0], [0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 1], [0, 0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0]], [[0, 0, 1, 0], [0, 0, 0, 0], [0, 1, 0, 1], [1, 0, 0, 0]], [[0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 0], [1, 0, 0, 1, 0, 1], [0, 1, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0]]];

console.log(solution(board[0]));
console.log(solution(board[1]));
console.log(solution(board[2]));
console.log(solution(board[3]));