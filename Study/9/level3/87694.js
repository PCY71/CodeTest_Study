/* 87694번 문제
아이템 줍기*/

function solution(rectangle, characterX, characterY, itemX, itemY) {
    const moveX = [1, -1, 0, 0];
    const moveY = [0, 0, 1, -1];

    const maxSize = 101;
    const board = Array.from(Array(maxSize), () => Array(maxSize).fill(0));
    const doubleRect = rectangle.map((el) => el.map((v) => v * 2));

    const checkLoc = (x, y) => x >= 0 && x < 101 && y >= 0 && y < 101;

    doubleRect.forEach(([x1, y1, x2, y2]) => {
        for (let i = y1; i <= y2; i++) {
            for (let j = x1; j <= x2; j++) {
                if (j === x1 || j === x2 || i === y1 || i === y2) {
                    if (board[j][i] === 1) continue;
                    else board[j][i] += 1;
                } else board[j][i] += 2;
            }
        }
    })

    characterX *= 2;
    characterY *= 2;
    itemX *= 2;
    itemY *= 2;

    const queue = [[characterX, characterY, 0]];
    board[characterX][characterY] += 100;

    while (queue.length) {
        const [curX, curY, step] = queue.shift();

        if (curX === itemX && curY === itemY) return step / 2;

        for (let i = 0; i < 4; i++) {
            const [newX, newY] = [curX + moveX[i], curY + moveY[i]];
            if (checkLoc(newX, newY)) {
                if (board[newX][newY] === 1) {
                    board[newX][newY] += 100;
                    queue.push([newX, newY, step + 1]);
                }
            }
        }
    }

    return 0;
}

const test = [[[[1, 1, 7, 4], [3, 2, 5, 5], [4, 3, 6, 9], [2, 6, 8, 8]], 1, 3, 7, 8],
[[1, 1, 8, 4], [2, 2, 4, 9], [3, 6, 9, 8], [6, 3, 7, 7], 9, 7, 6, 1]]

console.log(solution(test[0][0], test[0][1], test[0][2], test[0][3], test[0][4]));
console.log(solution(test[1][0], test[1][1], test[1][2], test[1][3], test[1][4]));