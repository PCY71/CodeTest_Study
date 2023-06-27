/*169198 문제
당구 연습*/

function solution(m, n, startX, startY, balls) {
    const answer = [];
    const calcul = (x, y) => {
        const up = x === startX && y > startY
            ? Infinity
            : Math.pow(x - startX, 2) + Math.pow((2 * n - startY) - y, 2);
        const down = x === startX && y < startY
            ? Infinity
            : Math.pow(x - startX, 2) + Math.pow(y + startY, 2);
        const left = y === startY && x < startX
            ? Infinity
            : Math.pow(x + startX, 2) + Math.pow(y - startY, 2);
        const right = y === startY && x > startX
            ? Infinity
            : Math.pow((2 * m - startX) - x, 2) + Math.pow(y - startY, 2);
        return Math.min(up, down, left, right);
    }
    balls.forEach(([x, y]) => {
        answer.push(calcul(x, y))
    })
    return answer;
}

console.log(solution(10, 10, 3, 7, [[7, 7], [2, 7], [7, 3]]));