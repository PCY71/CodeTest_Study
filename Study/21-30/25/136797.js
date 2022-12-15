/* 136797번 문제
숫자 타자 대회*/

function solution(numbers) {
    let answer = 0;
    const map = [
        [1, 7, 6, 7, 5, 4, 5, 3, 2, 3],
        [7, 1, 2, 4, 2, 3, 5, 4, 5, 6],
        [6, 2, 1, 2, 3, 2, 3, 5, 4, 5],
        [7, 4, 2, 1, 5, 3, 2, 6, 5, 4],
        [5, 2, 3, 5, 1, 2, 4, 2, 3, 5],
        [4, 3, 2, 3, 2, 1, 2, 3, 2, 3],
        [5, 5, 3, 2, 4, 2, 1, 5, 3, 2],
        [3, 4, 5, 6, 2, 3, 5, 1, 2, 4],
        [2, 5, 4, 5, 3, 2, 3, 2, 1, 2],
        [3, 6, 5, 4, 5, 3, 2, 4, 2, 1]
    ];
    let left = 4;
    let right = 6;

    for (const number of numbers) {
        const num = Number(number);
        const lCost = map[left][num];
        const rCost = map[right][num];

        if (lCost < rCost) {
            answer += map[left][num];
            left = num;
        } else {
            answer += map[right][num];
            right = num;
        }
    }
    return answer;
}

const test1 = "1756";
const test2 = "5123";

console.log(solution(test1));
console.log(solution(test2));