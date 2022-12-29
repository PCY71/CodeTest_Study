/* 87377번 문제
교점에 별 만들기*/

function solution(line) {
    let interSection = [];
    let minX = minY = Number.MAX_SAFE_INTEGER;
    let maxX = maxY = Number.MIN_SAFE_INTEGER;

    line.forEach(([a, b, e], idx) => {
        for (let i = idx + 1; i < line.length; i++) {
            const [c, d, f] = line[i];
            if (a * d - b * c !== 0) {
                const [x, y] = calculXY([a, b, e], [c, d, f]);
                if (isInteger(x, y)) interSection.push([x, y]);
            }
        }
    })

    interSection.forEach(([x, y]) => {
        minX = Math.min(x, minX);
        maxX = Math.max(x, maxX);
        minY = Math.min(y, minY);
        maxY = Math.max(y, maxY);
    })

    const paper = Array.from(Array(maxY - minY + 1), () => Array(maxX - minX + 1).fill('.'));
    interSection.forEach(([x, y]) => {
        paper[y - minY][x - minX] = '*';
    })
    return paper.reverse().map((el) => el.join(''));
}

const calculXY = ([a, b, e], [c, d, f]) => {
    const x = (b * f - e * d) / (a * d - b * c);
    const y = (e * c - a * f) / (a * d - b * c);

    return [x, y]
}

const isInteger = (x, y) => Number.isInteger(x) && Number.isInteger(y);

const test1 = [[2, -1, 4], [-2, -1, 4], [0, -1, 1], [5, -8, -12], [5, 8, 12]];
const test2 = [[0, 1, -1], [1, 0, -1], [1, 0, 1]];
const test3 = [[1, -1, 0], [2, -1, 0]];
const test4 = [[1, -1, 0], [2, -1, 0], [4, -1, 0]];

console.log(solution(test1));
console.log(solution(test2));
console.log(solution(test3));
console.log(solution(test4));