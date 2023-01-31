/*49994번 문제
방문 길이*/

function solution(dirs) {
    let x = 0;
    let y = 0;
    const direction = {
        "L": [-1, 0],
        "R": [1, 0],
        "U": [0, 1],
        "D": [0, -1]
    }
    const set = new Set();

    [...dirs].forEach((dir) => {
        const [tempX, tempY] = [x + direction[dir][0], y + direction[dir][1]]

        if (isValid(tempX, tempY)) {
            const [fromX, fromY] = [x, y];
            x = tempX;
            y = tempY;
            set.add(`${fromX}${fromY}${x}${y}`);
            set.add(`${x}${y}${fromX}${fromY}`);
        }

    })

    return set.size / 2;
}

const isValid = (x, y) => x <= 5 && x >= -5 && y <= 5 && y >= -5;

const test1 = "ULURRDLLU";
const test2 = "LULLLLLLU";

console.log(solution(test1));
console.log(solution(test2));