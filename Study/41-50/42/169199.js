/*169199번 문제
리코쳇 로봇*/

function solution(board) {
    let answer = 0;
    let dest = [0, 0];
    const queue = [];
    const rowLen = board[0].length;
    const colLen = board.length;
    const visited = Array.from(Array(board.length), () => Array(board[0].length).fill(false));
    const direction = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    //시작&도착 지점 초기화
    board.forEach((v, i) => {
        if (v.includes('R')) queue.push([i, v.indexOf('R'), 0]);
        if (v.includes('G')) dest = [i, v.indexOf('G')];
    })

    //bfs
    while (queue.length) {
        const [y, x, d] = queue.shift(); // y좌표, x좌표, depth
        if (dest[0] === y && dest[1] === x) return d;
        visited[y][x] = true;

        let nextX = x;
        let nextY = y;

        //상
        while (nextY) {
            if (board[nextY - 1][x] === "D") break;
            nextY--;
        }
        if (!visited[nextY][x]) queue.push([nextY, x, d + 1]);
        nextY = y;

        //하
        while (nextY < colLen - 1) {
            if (board[nextY + 1][x] === "D") break;
            nextY++;
        }
        if (!visited[nextY][x]) queue.push([nextY, x, d + 1]);
        nextY = y;

        //좌
        while (nextX) {
            if (board[y][nextX - 1] === "D") break;
            nextX--;
        }
        if (!visited[y][nextX]) queue.push([y, nextX, d + 1]);
        nextX = x;

        while (nextX < rowLen - 1) {
            if (board[y][nextX + 1] === "D") break;
            nextX++;
        }
        if (!visited[y][nextX]) queue.push([y, nextX, d + 1]);
        nextX = x;
    }

    return -1;
}

const board1 = ["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."];
const board2 = [".D.R", "....", ".G..", "...D"];

console.log(solution(board1));
console.log(solution(board2));