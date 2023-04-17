/*68644번 문제
두 개 뽑아서 더하기*/

function solution(numbers) {
    let answer = new Set();
    getCombi(numbers, 2).forEach(([a, b]) => answer.add(a + b));
    return [...answer].sort((a, b) => a - b);
}

const getCombi = (arr, selectNum) => {
    let results = [];
    if (selectNum === 1) return arr.map((v) => [v]);

    arr.forEach((v, idx, arr) => {
        const fixer = v;
        const rest = arr.filter((_, index) => index < idx);
        const permutationArr = getCombi(rest, selectNum - 1);
        const combineFixer = permutationArr.map((v) => [fixer, ...v]);
        results.push(...combineFixer);
    });
    return results;
}

const test1 = [2, 1, 3, 4, 1];
const test2 = [5, 0, 2, 7];

console.log(solution(test1));
console.log(solution(test2));
