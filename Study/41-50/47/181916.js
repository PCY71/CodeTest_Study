/*181916 문제
주사위 게임 3*/

function solution(a, b, c, d) {
    const obj = {
        1: 0, 2: 0, 3: 0,
        4: 0, 5: 0, 6: 0,
    }
    obj[a]++;
    obj[b]++;
    obj[c]++;
    obj[d]++;
    const sorted = Object.entries(obj).map(([dice, num]) => [Number(dice), num]).sort((a, b) => a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]);
    const cur = sorted[0];
    const next = sorted[1];
    switch (cur[1]) {
        case 4:  //모두 같은 눈
            return 1111 * cur[0];
        case 3: // 3/1 눈
            return Math.pow((10 * cur[0] + next[0]), 2);
        case 2: // 2/2 눈
            if (sorted[1][1] === 2) {
                return (cur[0] + next[0]) * (next[0] - cur[0]);
            } else {// 2/1/1 눈

                return next[0] * sorted[2][0];
            }
        default: //모두 다른 눈
            return cur[0];
    }
}

console.log(solution(2, 2, 2, 2));
console.log(solution(4, 1, 4, 4));
console.log(solution(6, 3, 3, 6));
console.log(solution(2, 5, 2, 6));
console.log(solution(6, 4, 2, 5));