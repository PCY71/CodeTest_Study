/*12935 문제
제일 작은 수 제거하기*/

function solution(arr) {
    if (arr.length <= 1) return [-1];
    let minIdx = arr.indexOf(Math.min(...arr))

    return [...arr.slice(0, minIdx), ...arr.slice(minIdx + 1)];
}

const test1 = [4, 2, 3, 1];
const test2 = [10];

console.log(solution(test1));
console.log(solution(test2));