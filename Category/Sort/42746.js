/* 42746번 문제
가장 큰 수*/

function solution(numbers) {
    const arr = [...numbers];

    const result = arr.sort((a, b) => {
        return ('' + b + a) - ('' + a + b);
    }).join('');

    return result[0] === '0' ? '0' : result;
}

const numbers1 = [6, 10, 2];
const numbers2 = [3, 30, 34, 5, 9];

console.log(solution(numbers1));
console.log(solution(numbers2));