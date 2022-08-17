/* 42842번 문제
카펫*/

function solution(brown, yellow) {
    for (let y = 3; y < brown / 2; y++) {
        for (let x = 3; ((y * 2) + ((x - 2) * 2)) <= brown; x++) {
            if ((x - 2) * (y - 2) === yellow) return [x, y]
        }
    }
    return 0;
}

const test = [[10, 2], [8, 1], [24, 24]];

console.log(solution(test[0][0], test[0][1]));
console.log(solution(test[1][0], test[1][1]));
console.log(solution(test[2][0], test[2][1]));
