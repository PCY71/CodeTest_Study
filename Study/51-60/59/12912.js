/*12912 문제
두 정수 사이의 합*/

function solution(a, b) {
    const n = (Math.abs(a - b) + 1);

    return n * (a + b) / 2;
}

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));