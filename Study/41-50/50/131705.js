/*131705 문제
삼총사*/

function solution(number) {
    return getCombinations(0, number.length, 3, []).map(([a, b, c]) => number[a] + number[b] + number[c]).filter((el) => el === 0).length;
}

const getCombinations = (idx, size, num, result) => {
    // base case1: 선택해야 개수가 남아있는 개수 이상일 경우
    // => 남아있는 모든 걸 선택한다.
    if (size - idx <= num) {
        for (let i = idx; i < size; i++) result.push(i);
        return [result];
    }

    // base case2: 선택이 완료되었을 경우
    if (num === 0) {
        return [result];
    }

    // 현재 idx부터 num개를 뽑는 방법은
    // 1) 현재 요소를 선택하고 num-1개를 뽑는 방법
    const picked = getCombinations(idx + 1, size, num - 1, result.concat(idx));
    // 2) 현재 요소를 선택하지 않고 num개를 뽑는 방법
    const notPicked = getCombinations(idx + 1, size, num, result);
    return picked.concat(notPicked);
};

const number1 = [-2, 3, 0, 2, -5];
const number2 = [-3, -2, -1, 0, 1, 2, 3];
const number3 = [-1, 1, -1, 1];

console.log(solution(number1));
console.log(solution(number2));
console.log(solution(number3));